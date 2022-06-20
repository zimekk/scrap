import { holidaysTuiItems as holidaysItems } from "@dev/api/holidays";
import { request } from "../../../request";
import Service from "../../Service";
import { _time, createItem, diffItem, updateItem } from "../utils";
import { ArgsSchema, ItemSchema, OffersSchema, ParamsSchema } from "./types";

const { TUI_URL: BASE_URL } = process.env;

const ERA = 1 * 3600 * 1000;
const _past = _time - ERA;

const timestamp = (mktime: number, period = ERA) => mktime - (mktime % period);

export class HolidaysTuiService extends Service {
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
    const { durationFrom, durationTo, numberOfAdults, childrenBirthdays } =
      ParamsSchema.parse(
        [...new URLSearchParams(params).entries()].reduce(
          (result, [key, value]) => Object.assign(result, { [key]: value }),
          {}
        )
      );
    // console.log({
    //   durationFrom,
    //   durationTo,
    //   numberOfAdults,
    //   childrenBirthdays,
    // });
    const { page, pageSize, sorting } = ArgsSchema.parse(args);
    // console.log({ type, params });
    return request(
      {
        id: ["tui", this.mk, type, page].join("-"),
        url: `${BASE_URL}search/offers`,
        params: {
          method: "POST",
          headers: {
            "content-type": "application/json;charset=UTF-8",
            cookie: "JSESSIONID=web5~01E069797368616A1476A50C6538A15E",
            "user-agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36",
          },
          body: JSON.stringify({
            childrenBirthdays, // : ["13.04.2010", "13.12.2012"],
            departuresCodes: ["WAW"],
            destinationsCodes: [],
            durationFrom, // : 6,
            durationTo, // : 8,
            occupancies: [
              {
                adultsCount: numberOfAdults, // 2,
                childrenBirthDates: childrenBirthdays, // ["13.04.2010", "13.12.2012"],
                participantsCount: numberOfAdults + childrenBirthdays.length, // 4,
              },
            ],
            numberOfAdults, // : 2,
            offerType: "BY_PLANE",
            site: "wypoczynek/wyniki-wyszukiwania-samolot?q=%3Aprice%3AbyPlane%3AT%3Aa%3AWAW%3AdF%3A6%3AdT%3A8%3ActAdult%3A2%3ActChild%3A2%3AbirthDate%3A13.04.2010%3AbirthDate%3A13.12.2012%3Aroom%3A2-13.04.2010-13.12.2012%3AtripType%3AWS&fullPrice=false",
            filters: [
              {
                filterId: "priceSelector",
                selectedValues: [],
              },
              {
                filterId: "board",
                selectedValues: [],
              },
              {
                filterId: "amountRange",
                selectedValues: [],
              },
              {
                filterId: "minHotelCategory",
                selectedValues: ["defaultHotelCategory"],
              },
              {
                filterId: "tripAdvisorRating",
                selectedValues: ["defaultTripAdvisorRating"],
              },
              {
                filterId: "beach_distance",
                selectedValues: ["defaultBeachDistance"],
              },
              {
                filterId: "facilities",
                selectedValues: [],
              },
              {
                filterId: "WIFI",
                selectedValues: [],
              },
              {
                filterId: "sport_and_wellness",
                selectedValues: [],
              },
              {
                filterId: "room_type",
                selectedValues: [],
              },
              {
                filterId: "room_attributes",
                selectedValues: [],
              },
              {
                filterId: "airport_distance",
                selectedValues: [],
              },
              {
                filterId: "flight_category",
                selectedValues: [],
              },
            ],
            metaData: {
              page,
              pageSize,
              sorting,
            },
          }),
        },
      },
      this.summary
    )
      .then((result) =>
        // Boolean(console.log({ result })) ? Promise.reject() :
        OffersSchema.parseAsync(result)
      )
      .then(({ offers, pagination }) => {
        // console.log({ offers, pagination });
        return {
          type,
          list: offers,
          next:
            pagination.pagesCount > pagination.page
              ? {
                  page: page + 1,
                }
              : null,
        };
      });
  }

  async process(item = {}): Promise<any> {
    return ItemSchema.parseAsync(item)
      .then((item) => Object.assign(item, { id: item.offerCode }))
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
