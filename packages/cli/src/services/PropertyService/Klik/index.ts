import { z } from "zod";
import { request } from "../../../request";
import PropertyService from "../PropertyService";
// import { saveProductHtml } from "../../utils";
import { scrapPropertyKlikItem } from "./utils";

const {
  NEARBY_LAT = "52.1530829",
  NEARBY_LNG = "21.1104411",
  KLIK_URL,
} = process.env as {
  NEARBY_LAT: string;
  NEARBY_LNG: string;
  KLIK_URL: string;
};

export class PropertyKlikService extends PropertyService {
  async fetcher({
    $type = "",
    lat = Number(NEARBY_LAT),
    lng = Number(NEARBY_LNG),
    circle = 25014.985524846034,
    items = 20,
    page = 1,
  }) {
    const [_site, type, kind] = $type.split(":");
    return (({
      $type: type = 1,
      $kind: kind = 4,
      // kind = 4, type = 1, // dzialki/do-sprzedania
      // kind = 2, type = 1, // domy/do-sprzedania
      // kind = 1, type = 2, // mieszkania/do-wynajecia
    }) =>
      request(
        {
          id: ["klik", this.mk, lat, lng, circle, kind, type, items, page].join(
            "-"
          ),
          url: `${KLIK_URL}?dump=list&type=${type}&kind=${kind}&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`,
        },
        this.summary
      ))({ $type: type, $kind: kind });
  }

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
      .then(({ $type, page }) => {
        const items = 20;
        return this.fetcher({ $type, items, page })
          .then((data) =>
            z
              .object({
                results: z.array(z.object({}).passthrough()),
                total_found: z.string().transform(Number),
              })
              .parse(data)
          )
          .then(({ results, total_found }) => ({
            type,
            list: results,
            next:
              Math.ceil(total_found / items) > page
                ? {
                    type,
                    page: page + 1,
                  }
                : null,
          }));
      });
  }

  async process(item: any): Promise<any> {
    return Promise.resolve(scrapPropertyKlikItem(item)).then((item) =>
      this.commit(item)
    );
  }
}
