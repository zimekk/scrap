import { from } from "rxjs";
import { mergeMap, take, tap } from "rxjs/operators";
import { VehicleService } from "./services";

const ERA = 24 * 3600 * 1000;
const _time = Date.now();
const _past = _time - ERA;

type Item = {
  id: number;
  isNew: boolean;
  options: any;
  _created: number;
  _updated: number;
  _removed: number;
  _checked: number;
};

export const remove = async (status = false) => {
  const summary = {
    checked: [],
    removed: [],
  };

  // await require("./request").cleanup();

  require("@dev/api/vehicles")
    .vehicleItems.find({})
    .then((list: Item[]) => {
      const notRemoved = list
        .filter(({ _removed = 0 }: { _removed: number }) => _removed === 0)
        .sort((a: any, b: any) => a._checked - b._checked);

      const getOptions = notRemoved.filter(
        ({ options }) => options === undefined
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

      console.log(getRemoved.map((item) => item.id));

      if (status) {
        return;
      }

      const filtered = getOptions.concat(getRemoved.slice(0, 500));

      let counter = filtered.length;

      from(filtered)
        .pipe(
          take(500),
          mergeMap((item) => {
            const service = new VehicleService({ summary });
            return from(service.inspect(item));
          }, 1),
          tap(({ id, _created, _updated, _checked }) =>
            console.log({ i: counter--, id, _created, _updated, _checked })
          )
        )
        .subscribe({
          next: (item) => {
            console.log(item);
          },
          complete: () => {
            console.log(summary);
          },
        });
    });
};
