import { diffString } from "json-diff";
import { hotShotItems } from "@dev/api/promo";
import { browser } from "../../request";
import Service, { _time, timestamp } from "../Service";
import { ItemSchema } from "./types";

const { STORE_URL: URL, STORE_ALTO_URL } = process.env;

export const diffItem = (
  { _id, _created, _checked, ...last }: any,
  item: object
) => diffString(last, item);

export class HotShotService extends Service {
  mk = timestamp(_time, 1 * 3600 * 1000); // every hour

  async fetcher([site, type]: string[]) {
    console.log(new Date(this.mk));
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
    return this.fetcher(type.split(":"))
      .catch((e) => console.error(e))
      .then((item) => ({
        type,
        list: [item],
        next: null,
      }));
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
          if (last) {
            const diff = diffItem(last, item);
            // console.log({ last });
            console.log(`[${last.id}]`, diff);
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

export class HotShotAltoService extends HotShotService {
  async fetcher([site, type]: string[]) {
    console.log(new Date(this.mk));
    return browser(
      {
        id: [site, this.mk, type].join("-"),
        url: `${STORE_ALTO_URL}${type}`,
      },
      this.summary,
      {}
    );
  }
}
