import { diffString } from "json-diff";
import { vehicleItems } from "@dev/api/vehicles";
import { reduceHistory } from "./services/VehicleService/utils";

export const verify = async () => {
  console.log(["verify"]);

  const summary = {
    checked: [],
    reduced: [],
  } as Record<string, number[]>;

  await vehicleItems.find({}).then(
    async (list: any) =>
      Boolean(console.log(list.length)) ||
      (await Promise.all(
        list.slice(0, 15000).map((item: any) => {
          summary.checked.push(item.id);
          if (!item._history) {
            return null;
          }
          const history = reduceHistory(item._history);
          // console.log(item._id, item.id, Object.keys(item._history), Object.keys(history))

          if (Object.keys(item._history).length > Object.keys(history).length) {
            summary.reduced.push(item.id);
            return vehicleItems.update({
              ...item,
              _history: history,
            });
          }
        })
      ))
  );
  console.log(summary);
};

export const verify2 = () => {
  const unify = ({
    DisplaySkuAvailabilities: [
      {
        Availabilities: [
          {
            OrderManagementData: { Price },
          },
        ],
      },
    ],
    LocalizedProperties: [
      { Images, ProductDescription, ProductTitle, PublisherName },
    ],
    LastModifiedDate,
  }: any) => ({
    Images: Images.sort((a: any, b: any) => a.Width - b.Width)
      .slice(0, 1)
      .map(({ Uri }: { Uri: string }) => Uri),
    LastModifiedDate,
    Price,
    ProductDescription,
    ProductTitle,
    PublisherName,
  });

  require("@dev/api")
    .gameItems.find({})
    .then((list: any) =>
      list.map((item: any) => {
        const {
          LocalizedProperties: [{ ProductTitle }],
          _history = {},
        } = item;

        // console.log({ ProductTitle });

        [item]
          .concat(Object.values(_history))
          .map(unify)
          .filter(
            (item, i, list) =>
              i === 0 || JSON.stringify(item) !== JSON.stringify(list[i - 1])
          )
          .map((item, i, list) => i && diffString(item, list[i - 1]))
          .filter(Boolean)
          .map((diff) => console.log(diff));
      })
    );
};
