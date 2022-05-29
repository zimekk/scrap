import { z } from "zod";
import { vehicle5Items } from "@dev/api/vehicles";
import { request } from "../../../request";
import Service from "../../Service";
import { Vehicle5Data, Vehicle5Item } from "./types";
import { _time, _past, createItem } from "../utils";

const { VW_URL: URL } = process.env;

export class VehicleVwService extends Service {
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
        per_page: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, page, per_page }) =>
        request(
          {
            id: ["vw", this.mk, per_page, page].join("-"),
            url: `${URL}api/cars?page=${page}&per_page=${per_page}`,
            params: {
              headers: {
                "x-app-id": "VW_DCP_C",
              },
            },
          },
          this.summary
        )
          .then((data) => Vehicle5Data.parse(data))
          .then(({ count_all, records }) => ({
            type,
            list: records,
            next:
              page * per_page < count_all
                ? {
                    page: page + 1,
                    per_page,
                  }
                : null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle5Item.parseAsync(item)
      .then((item) =>
        vehicle5Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            //   const diff = diffItem(last, item);
            //   if (diff) {
            //     console.log(`[${last.id}]`, diff);
            //     summary.updated.push(item.id);
            //     return vehicle5Items.update(updateItem(last, item));
            //   } else {
            this.summary.checked.push(item.id);
            return vehicle5Items.update({ ...last, _checked: _time });
            // }
          } else {
            this.summary.created.push(item.id);
            return vehicle5Items.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}
