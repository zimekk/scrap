import { diffString } from "json-diff";
import { z } from "zod";
import { quotesItems, quotesMetas } from "@dev/api/quotes";
import { request } from "../../request";
import Service from "../Service";
import { DataSchema, DiffSchema, ItemSchema, TypeSchema } from "./types";

const { TFI_URL } = process.env as {
  TFI_URL: string;
};

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

const diffItem = (last = {}, item = {}) =>
  diffString(DiffSchema.parse(last), DiffSchema.parse(item));

const updateItem = (
  {
    _id,
    _created = _past,
    _updated = _created,
    _history = {},
    ...last
  }: { _id: string; _created: number; _updated: number; _history: {} },
  item: {}
) => ({
  ...item,
  _id,
  _created,
  _updated: _time,
  _history: {
    ..._history,
    [_updated]: last,
  },
});

export class QuotesService extends Service {
  async fetcher(
    type: string,
    investment_id = 0,
    format = "json",
    division = "daily"
  ) {
    return request(
      {
        id: [type, this.mk, investment_id].join("-"),
        url: `${TFI_URL}_ajax/rest/v2/tfi/fund/${investment_id}/values/?format=${format}&division=${division}`,
      },
      this.summary
    );
  }

  async processMeta(data = {}, { _fetched }: any = {}, type = "investments") {
    return DataSchema.parseAsync(data).then(({ meta, objects }) => {
      const investment_id = meta.id;

      return Promise.resolve(meta).then((item) =>
        quotesMetas
          .findOne({ id: item.id })
          .then((last: any) => {
            const id = `${type}-${item.id}`;
            if (last) {
              if (
                _fetched &&
                (_fetched < last._checked ||
                  _fetched < last._updated ||
                  _fetched < last._created)
              ) {
                return;
              }
              const diff = diffItem(last, item);
              if (diff) {
                console.log(`[${last.id}]`, diff);
                this.summary.updated.push(id);
                return quotesMetas.update(updateItem(last, item));
              } else {
                this.summary.checked.push(id);
                return quotesMetas.update({ ...last, _checked: _time });
              }
            } else {
              this.summary.created.push(id);
              return quotesMetas.insert({ ...item, _created: _time });
            }
          })
          .then(() =>
            objects.map(({ ...item }) => ({
              id: `${type}-${investment_id}-${item.date}`,
              investment_id,
              ...item,
            }))
          )
      );
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
          this.processMeta(data).then((list) => ({
            type,
            list,
            next: null,
          }))
        )
    );
  }

  async sync(data = {}, { timestamp: _fetched }: any = {}) {
    return this.processMeta(data, { _fetched }).then((list) =>
      Promise.all(list.map((item) => this.process(item, { _fetched })))
    );
  }

  async process(item = {}, { _fetched }: any = {}): Promise<any> {
    return ItemSchema.extend({
      id: z.string(),
      investment_id: z.number(),
    })
      .parseAsync(item)
      .then((item) =>
        quotesItems.findOne({ id: item.id }).then((last: any) => {
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
            return quotesItems.update({ ...last, _checked: _time });
          } else {
            this.summary.created.push(item.id);
            return quotesItems.insert({ ...item, _created: _time });
          }
        })
      );
  }
}
