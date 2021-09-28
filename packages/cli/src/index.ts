import { items, requests } from "@dev/api";
import fetch from "isomorphic-fetch";

require("dotenv").config();

const { URL } = process.env;

const request = ({
  lat = 52.1530829,
  lng = 21.1104411,
  circle = 17498.332717026387,
  items = 20,
  page = 1,
}) => {
  const id = [lat, lng, circle, items, page].join("-");
  console.log({ id });
  return requests.findOne({ id }).then((data: any) =>
    data
      ? Promise.resolve(data.json)
      : fetch(
          `${URL}?dump=list&type=1&kind=4&id=0&lat=${lat}&lng=${lng}&circle=${circle}&page=${page}&items=${items}&sort=default&cat=4,8`
        )
          .then((response) => {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then((json: any) => requests.insert({ id, json }))
          .then(({ json }: any) => json)
  );
};

export default function () {
  request({})
    .then(({ results }: any) =>
      Promise.all(
        results.map((item: any) =>
          items
            .findOne({ id: item.id })
            .then((exists: any) => exists || items.insert(item))
        )
      )
    )
    .then(console.info)
    .then(() => items.find({}))
    .then((list: any) => console.info(list.length));

  // items.findOne({ id: 355583 }).then(console.log);
}
