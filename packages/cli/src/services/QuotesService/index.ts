import { z } from "zod";
import { quotesItems } from "@dev/api/quotes";
import { request } from "../../request";
import Service from "../Service";
import { DataSchema, ItemSchema, TypeSchema } from "./types";

const { TFI_URL } = process.env as {
  TFI_URL: string;
};

const _time = Date.now();

export class QuotesService extends Service {
  async fetcher(type: string, investment_id = 0, format = "json") {
    return request({
      id: [type, this.mk, investment_id].join("-"),
      request: () =>
        this.fetch(
          `${TFI_URL}_ajax/rest/v2/tfi/fund/${investment_id}/values/?format=${format}`
        ),
    });
  }

  async request(type: string): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    return TypeSchema.parseAsync(type.split(":")).then(
      ({ type, investment_id }) =>
        this.fetcher(type, investment_id).then((data) =>
          DataSchema.transform(({ meta: { id }, objects }) => ({
            type,
            list: objects.map(({ ...item }) => ({
              id: `${type}-${id}-${item.date}`,
              investment_id: id,
              ...item,
            })),
            next: null,
          })).parseAsync(data)
        )
    );
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.extend({
      id: z.string(),
      investment_id: z.number(),
    })
      .parseAsync(item)
      .then((item) =>
        quotesItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            this.summary.checked.push(item.id);
            return last;
          } else {
            this.summary.created.push(item.id);
            return quotesItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
