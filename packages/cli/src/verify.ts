import { diffString } from "json-diff";

export const verify = () => {
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
