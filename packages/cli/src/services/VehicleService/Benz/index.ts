import { z } from "zod";
import { vehicle3Items } from "@dev/api/vehicles";
import { request } from "../../../request";
import Service from "../../Service";
import { Vehicle3Data, Vehicle3Item } from "./types";
import { _time, _past, createItem, diffItem, updateItem } from "../utils";

const { BENZ_URL: URL } = process.env;

export class VehicleBenzService extends Service {
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
        currentPage: z.number().default(0),
        pageSize: z.number().default(48),
      })
      .parseAsync(args)
      .then(({ $type, currentPage, pageSize }) =>
        request(
          {
            id: ["mercedes-benz", this.mk, pageSize, currentPage].join("-"),
            url: `${URL}cars-backend/dcp-api/v2/mpvehicles-pl/products/search?lang=pl&query=%3Aprice-asc%3AallCategories%3Ampvehicles-pl-vehicles&currentPage=${currentPage}&pageSize=${pageSize}&fields=FULL`,
          },
          this.summary
        )
          .then((data) => Vehicle3Data.parse(data))
          .then(
            ({
              pagination: { currentPage, pageSize, totalPages },
              products,
            }) => ({
              type,
              list: products,
              next:
                currentPage + 1 < totalPages
                  ? {
                      $type,
                      currentPage: currentPage + 1,
                      pageSize,
                    }
                  : null,
            })
          )
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle3Item.parseAsync(item)
      .then((item: any) =>
        vehicle3Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return vehicle3Items.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return vehicle3Items.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return vehicle3Items.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}
