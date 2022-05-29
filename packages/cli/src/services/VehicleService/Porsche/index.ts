import { z } from "zod";
import { vehicle4Items } from "@dev/api/vehicles";
import { request } from "../../../request";
import Service from "../../Service";
import { Vehicle4Data, Vehicle4Item } from "./types";
import { _time, _past, createItem, diffItem, updateItem } from "../utils";

const { PORSCHE_URL: URL } = process.env;

export class VehiclePorscheService extends Service {
  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return z
      .object({
        $type: z.string().default(type),
        page: z.number().default(1),
      })
      .parseAsync(args)
      .then(({ $type, page }) =>
        request(
          {
            id: ["porsche", this.mk, page].join("-"),
            url: `${URL}api/pl/pl-PL/search?${
              page > 1 ? `page=${page}&` : ``
            }orderBy=recommended_desc&distanceUnit=kilometer`,
          },
          this.summary
        )
          .then((data) => Vehicle4Data.parse(data))
          .then(({ pages: { activePage, totalPages }, results }) => ({
            type,
            list: results,
            next:
              activePage < totalPages
                ? {
                    $type,
                    page: activePage + 1,
                  }
                : null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle4Item.parseAsync(item).then((item: any) =>
      vehicle4Items.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          const diff = diffItem(last, item);
          if (diff) {
            console.log(`[${last.id}]`, diff);
            this.summary.updated.push(item.id);
            return vehicle4Items.update(updateItem(last, item));
          } else {
            this.summary.checked.push(item.id);
            return vehicle4Items.update({ ...last, _checked: _time });
          }
        } else {
          this.summary.created.push(item.id);
          return vehicle4Items.insert(createItem(item));
        }
      })
    );
  }
}
