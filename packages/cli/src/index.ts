import { items } from "@dev/api";

export default function () {
  const { results } = require("@dev/api/data");

  Promise.all(
    results.map((item: any) =>
      items
        .findOne({ id: item.id })
        .then((exists: any) => exists || items.insert(item))
    )
  )
    .then(console.info)
    .then(() => items.find({}))
    .then((list: any) => console.info(list.length));

  items.findOne({ id: 355583 }).then(console.log);
}
