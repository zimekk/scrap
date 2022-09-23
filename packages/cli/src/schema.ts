import { EMPTY, Subject, from } from "rxjs";
import { expand, filter, map, mergeMap, tap } from "rxjs/operators";
import Service from "./services/Service";
import { request } from "./request";

const { toJson } = require("microdata-node");

const { MORELE_URL } = process.env;

class ProductService extends Service {
  async fetcher(name: string) {
    return request(
      {
        id: ["morele", this.mk, name].join("-"),
        url: `${MORELE_URL}${name}/`,
        html: true,
      },
      this.summary
    );
  }

  async request(name: string): Promise<{
    html: string;
  }> {
    return this.fetcher(name)
      .then((html) => toJson(html))
      .then(({ items }) => items[0].properties);
  }
}

export const schema = () => {
  console.log(["schema"]);

  const summary = {
    created: [],
    checked: [],
    updated: [],
    request: {},
  };

  const service = new ProductService({ summary });

  const request$ = new Subject<{ name: string; args?: object }>();
  request$
    .pipe(
      mergeMap(
        ({ name }) =>
          from(service.request(name)).pipe(map((html) => ({ name, html }))),
        1
      )
    )
    .subscribe({
      next: (item) => {
        console.log(item);
      },
      complete: () => {
        console.log({ summary });
      },
    });

  from([
    "obudowa-nzxt-h510-flow-czarno-biala-ca-h52fw-01-9557345",
    "karta-graficzna-asus-dual-geforce-rtx-2060-evo-12gb-gddr6-dual-rtx2060-12g-evo-9992361",
    "karta-graficzna-asus-dual-geforce-rtx-2060-gaming-evo-oc-6gb-gddr6-dual-rtx2060-o6g-evo-6130161",
    "karta-graficzna-asus-dual-geforce-rtx-2060-gaming-evo-oc-6gb-gddr6-dual-rtx2060-6g-evo-6130163",
  ]).subscribe((name) => {
    request$.next({ name });
  });

  async function test4(s: string) {
    const e = /\n(Wysokość|Szerokość|Głębokość)\n(\d+) mm/g;
    const m = s.match(e);

    // console.log({ m });
    const r = m
      ?.map((i) => i.match(/\n(Wysokość|Szerokość|Głębokość)\n(\d+) mm/))
      .reduce(
        (result, [_, p, v]: any) => Object.assign(result, { [p]: Number(v) }),
        {}
      );
    // console.log({ r });
    if (r) {
      const l = Object.values(r).reduce(
        (result: number, v: any) => (result * v) / 100,
        1
      );
      console.log({ l });
    }
  }

  test4(`
Dołączone akcesoria
Komplet śrubek i elementów montażowych
Wysokość
370 mm
Szerokość
201 mm
Głębokość
381 mm
Waga
2,8 kg
`);

  test4(`
Wysokość
460 mm
Szerokość
210 mm
Głębokość
428 mm
Waga
6,6 kg
`);

  test4(`
Wysokość
490 mm
Szerokość
186 mm
Głębokość
274 mm
Waga
4,9 kg
`);

  test4(`
Wysokość
431 mm
Szerokość
225 mm
Głębokość
400 mm
Waga
6,2 kg
`);

  test4(`
Wysokość
393 mm
Szerokość
215 mm
Głębokość
432 mm
Waga
6 kg
`);

  test4(`
Wysokość
349 mm
Szerokość
210 mm
Głębokość
372 mm
Waga
5,9 kg`);
};
