import { holidaysItems } from "@dev/api/holidays";
import { request } from "../../request";
import Service from "../Service";
import { OfferItem } from "./types";
import { _time, createItem, diffItem, updateItem } from "./utils";

const { GRECOS_URL: BASE_URL } = process.env;

const ERA = 1 * 3600 * 1000;
const _past = _time - ERA;

const timestamp = (mktime: number, period = ERA) => mktime - (mktime % period);

export class HolidaysGrecosService extends Service {
  mk = timestamp(_time);

  async request(
    type: string,
    args = {}
  ): Promise<{
    type: string;
    list: any[];
    next: any;
  }> {
    const [_, params] = type.split("?");
    // console.log({type,params})
    return request(
      {
        id: ["grecos", this.mk, type].join("-"),
        url: `${BASE_URL}api/sitecore/OffersList/LoadMoreOffers?${params}`,
      },
      this.summary
    ).then((list) => {
      // console.log({list})
      return {
        type,
        list,
        next: null,
      };
    });
  }

  async process(item = {}): Promise<any> {
    return OfferItem.parseAsync(item)
      .then((item) => Object.assign(item, { id: item.Merlin_Id }))
      .then((item) =>
        holidaysItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffItem(last, item);
            if (diff || last._removed) {
              console.log(`[${last.id}]`, diff);
              delete last._removed;
              this.summary.updated.push(item.id);
              return holidaysItems.update({
                ...updateItem(last, item),
                _checked: _time,
              });
            } else if (last._checked < _past) {
              this.summary.checked.push(item.id);
              return holidaysItems.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return holidaysItems.insert(createItem(item));
          }
        })
      )
      .catch((e) => console.log(e, item));
  }
}
