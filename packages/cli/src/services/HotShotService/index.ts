import { z } from "zod";
import { hotShotItems } from "@dev/api/promo";
import { browser } from "../../request";
import Service from "../Service";
import { ItemSchema } from "./types";

const { STORE_URL: URL } = process.env;

const _time = Date.now();

export class HotShotService extends Service {
  async fetcher([site, type]: string[]) {
    return browser(
      {
        id: [site, this.mk, type].join("-"),
        url: `${URL}${type}`,
      },
      this.summary,
      {}
    );
  }

  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .tuple([z.string(), z.string()])
      .transform(([kind, name]) => ({ id: name.split("-")[0], name, kind }))
      .parseAsync(type.split(":"))
      .then(({ name }) =>
        this.fetcher(type.split(":"))
          .catch((e) => console.error(e))
          .then((item) => ({
            type,
            list: [item],
            next: null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.transform((item) => ({
      id: item.Id,
      ...item,
    }))
      .parseAsync(item)
      .then((item) =>
        hotShotItems.findOne({ id: item.id }).then((last: any) => {
          console.log({ item });
          console.log({ last });
          if (last) {
            this.summary.checked.push(item.id);
            return hotShotItems.update({ ...last, _checked: _time });
          } else {
            this.summary.created.push(item.id);
            return hotShotItems.insert({ ...item, _created: _time });
          }
        })
      )
      .catch((error) => {
        console.log(item);
        console.error(error);
        return null;
      });
  }
}
