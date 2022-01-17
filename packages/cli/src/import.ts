import { Subject, from } from "rxjs";
import {
  mergeMap,
  // take,
  tap,
} from "rxjs/operators";
// import { headingDistanceTo } from "geolocation-utils";
// import { items, requests, requestsHtml } from "@dev/api";
// import {
//   openChromeBrowser,
//   openPage,
//   navigateAndGetPageSource,
// } from "./chrome";
// import {
//   saveProductHtml,
//   scrapOptions,
//   scrapProduct,
//   scrapPropertyList,
//   scrapPropertyList1,
//   scrapPropertyItem,
//   scrapPropertyItem1,
// } from "./utils";
import { z } from "zod";
import { VehicleItem, VehicleList } from "./services";

export default function (type?: string) {
  const summary = <Record<string, number[]>>{
    created: [],
    skipped: [],
    updated: [],
  };

  const request$ = new Subject<{ type: string; args?: object }>();
  request$
    .pipe(
      mergeMap(
        ({ type, args }) =>
          from(
            z
              .enum(["najlepszeoferty.bmw.pl"])
              .parseAsync(type.split(":")[0])
              .then(
                (type) =>
                  ({
                    ["najlepszeoferty.bmw.pl"]: VehicleList,
                  }[type])
              )
              .then((Service) => new Service())
              .then((service) => service.request(type, args))
          ).pipe(
            tap(({ type, next }) =>
              Boolean(console.log({ next })) || next
                ? request$.next({ type, args: next })
                : request$.complete()
            )
          ),
        1
      ),
      mergeMap(
        ({ type, list }) =>
          from(list).pipe(
            tap((item) => console.log([type, item.id, item.title])),
            mergeMap(
              (item) =>
                from(
                  z
                    .enum(["najlepszeoferty.bmw.pl"])
                    .parseAsync(type.split(":")[0])
                    .then(
                      (type) =>
                        ({
                          ["najlepszeoferty.bmw.pl"]: VehicleItem,
                        }[type])
                    )
                    .then((Service) => new Service())
                    .then((service) => service.process(item, summary))
                ),
              1
            )
          ),
        1
      )
    )
    .subscribe({
      // next: (item) => {
      //   console.log({item});
      // },
      complete: () => {
        console.log(summary);
      },
    });

  // from([
  //   "najlepszeoferty.bmw.pl:bmw-new",
  //   "najlepszeoferty.bmw.pl:bmw-used",
  //   "najlepszeoferty.bmw.pl:mini-new",
  // ]).subscribe(($type) => {
  //   console.log({ $type });
  //   vehicles$.next({ $type });
  // });

  from(
    type
      ? [type]
      : [
          "najlepszeoferty.bmw.pl:bmw-new",
          // "najlepszeoferty.bmw.pl:bmw-used",
          "najlepszeoferty.bmw.pl:mini-new",
        ]
  ).subscribe((type) => {
    console.log({ type });
    request$.next({ type });
  });
}
