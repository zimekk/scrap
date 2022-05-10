import { Subject, of } from "rxjs";
import { delay, mergeMap, take, tap } from "rxjs/operators";
import { VehicleService } from "./services";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

export const remove = async (status = false) => {
  let counter = 0;
  const check$ = new Subject<{
    id: number;
    isNew: boolean;
  }>();
  const summary = {
    checked: [],
    removed: [],
  };

  // await require("./request").cleanup();

  check$
    .pipe(
      take(1000),
      mergeMap(
        (item) =>
          of(item).pipe(
            mergeMap((item) => {
              const service = new VehicleService({ summary });
              return service.inspect(item, summary);
            }),
            delay(100)
          ),
        1
      )
    )
    .subscribe({
      next: (item: { id: number; _removed?: number }) => {
        console.log({ i: counter--, item });
      },
      complete: () => {
        console.log(summary);
      },
    });

  require("@dev/api/vehicles")
    .vehicleItems.find({})
    .then((list: any) => {
      const notRemoved = list
        .filter(({ _removed = 0 }: { _removed: number }) => _removed === 0)
        .sort((a: any, b: any) => a._checked - b._checked);

      const getOptions = notRemoved.filter(
        ({ options }: { options: any }) => options === undefined
      );

      const getRemoved = notRemoved.filter(
        ({ options, _checked = 0 }: { options: any; _checked: number }) =>
          options !== undefined && _checked < _past
      );

      console.log({
        records: list.length,
        notRemoved: notRemoved.length,
        getOptions: getOptions.length,
        getRemoved: getRemoved.length,
      });

      if (status) {
        return;
      }

      const filtered = getOptions.concat(getRemoved.slice(0, 500));

      counter = filtered.length;

      filtered.map((item: any, i: number, list: any[]) => {
        // console.log(`${i + 1}/${list.length} checked: ${item._checked ? new Date(item._checked) : '-'}`);
        check$.next(item);
      });
      check$.complete();
    });
};
