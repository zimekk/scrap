import { ratesItems } from "@dev/api/rates";
import { format, sub } from "date-fns";
import { request } from "../../request";
import Service from "../Service";
import { type Rate, DataSchema, ItemSchema, ArgsSchema } from "./types";

const { RATES_URL } = process.env as {
  RATES_URL: string;
};

const _time = Date.now();

const mapRates = (rates: Record<string, Rate[]>, type = "rates") =>
  Object.values(rates)
    .flat()
    .map((item) => ({
      id: `${type}-${item.code.toLowerCase()}-${item.date}-${item.time}`,
      ...item,
    }));

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
    // console.log({ type, args });

    return ArgsSchema.parseAsync(args).then(({ date }) =>
      this.fetcher(type, date).then((data) =>
        DataSchema.parseAsync(data).then(({ date, rates, range }) =>
          Promise.resolve(
            // Boolean(console.log({ date, range })) ||
            format(
              sub(new Date(date), {
                days: 1,
              }),
              "yyyy-MM-dd"
            )
          )
            .then((date) =>
              ratesItems.findOne({ date }).then((last) =>
                // Boolean(console.log({ date, last })) ||
                last
                  ? null
                  : {
                      date,
                    }
              )
            )
            .then((next) => ({
              type,
              list: mapRates(rates),
              next:
                // Boolean(console.log({ date, next })) ||
                date > "2005-01-01" ? next : null,
            }))
        )
      )
    );
  }

  async sync(data = {}, { timestamp: _fetched }: any = {}): Promise<any> {
    return DataSchema.parseAsync(data).then(({ rates }) =>
      mapRates(rates).reduce(
        (promise, item) => promise.then(() => this.process(item, { _fetched })),
        Promise.resolve()
      )
    );
  }

  async process(item = {}, { _fetched }: any = {}): Promise<any> {
    // console.log({ item });

    return ItemSchema.parseAsync(item).then((item) =>
      ratesItems.findOne({ id: item.id }).then((last: any) => {
        if (last) {
          if (
            _fetched &&
            (_fetched < last._checked ||
              _fetched < last._updated ||
              _fetched < last._created)
          ) {
            return;
          }
          this.summary.checked.push(item.id);
          return ratesItems.update({ ...last, _checked: _time });
        } else {
          this.summary.created.push(item.id);
          return ratesItems.insert({ ...item, _created: _time });
        }
      })
    );
  }
}
