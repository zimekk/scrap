import { ratesItems } from "@dev/api/rates";
import { format, sub } from "date-fns";
import { request } from "../../request";
import Service from "../Service";
import { DataSchema, ItemSchema, ArgsSchema } from "./types";

const { RATES_URL } = process.env as {
  RATES_URL: string;
};

const _time = Date.now();

export class RatesService extends Service {
  async fetcher(type: string, date: string) {
    return request(
      {
        id: [type, this.mk, date].join("-"),
        url: `${RATES_URL}?type=kursywalut&range=all${
          date ? `&date=${date}` : ""
        }`,
      },
      this.summary
    );
  }

  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    console.log({ type, args });

    return ArgsSchema.parseAsync(args).then(({ date }) =>
      this.fetcher(type, date).then((data) =>
        DataSchema.parseAsync(data).then(({ date, rates, range }) =>
          Promise.resolve(
            Boolean(console.log({ date, range })) ||
              format(
                sub(new Date(date), {
                  days: 1,
                }),
                "yyyy-MM-dd"
              )
          )
            .then((date) =>
              ratesItems.findOne({ date }).then((last) =>
                Boolean(console.log({ date, last })) || last
                  ? null
                  : {
                      date,
                    }
              )
            )
            .then((next) => ({
              type,
              list: Object.values(rates)
                .flat()
                .map((item) => ({
                  id: `${type}-${item.code.toLowerCase()}-${item.date}-${
                    item.time
                  }`,
                  ...item,
                })),
              next:
                Boolean(console.log({ date, next })) || date > "2022-01-01"
                  ? next
                  : null,
            }))
        )
      )
    );
  }

  async process(item = {}): Promise<any> {
    console.log({ item });

    return ItemSchema.parseAsync(item).then((item) =>
      ratesItems.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          this.summary.checked.push(item.id);
          return last;
        } else {
          this.summary.created.push(item.id);
          return ratesItems.insert({ ...item, _created: _time });
        }
      })
    );
  }
}
