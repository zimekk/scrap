import { z } from "zod";
import { vehicle2Items } from "@dev/api/vehicles";
import { request } from "../../../request";
import Service from "../../Service";
import { Vehicle2Data, Vehicle2Item } from "./types";
import { _time, _past, createItem, diffItem, updateItem } from "../utils";

const { AUDI_URL: URL } = process.env;

export class VehicleAudiService extends Service {
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
        $from: z.number().default(0),
        $size: z.number().default(100),
      })
      .parseAsync(args)
      .then(({ $type, $from, $size }) =>
        (({
          $type = "pluc",
          $from = 0,
          $size = 100,
          $sort = "prices.retail%3Aasc",
        }: any) =>
          request(
            {
              id: ["scs", this.mk, $type, $size, $from].join("-"),
              url: `${URL}api/v2/search/filter/${$type}/pl?svd=svd-2021-11-15t01_48_13_593-23&sort=${$sort}&from=${$from}&size=${$size}`,
            },
            this.summary
          ))({ $type: $type.split(":")[1] })
          .then((data) => Vehicle2Data.parse(data))
          .then(({ totalCount, vehicleBasic }) => ({
            type,
            list: vehicleBasic,
            next:
              $from + $size < totalCount
                ? {
                    $from: $from + $size,
                    $size,
                  }
                : null,
          }))
      );
  }

  async process(item = {}): Promise<any> {
    return Vehicle2Item.parseAsync(item)
      .then((item) =>
        vehicle2Items.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return vehicle2Items.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return vehicle2Items.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return vehicle2Items.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}
