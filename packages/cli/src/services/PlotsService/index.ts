import { diffString } from "json-diff";
import { plots as items } from "@dev/api";
import Service, { _time, updateItem } from "../Service";
import { DiffSchema, JsonSchema, type ItemType, ItemSchema } from "./types";

export class PlotsService extends Service {
  async sync(json = {}, { timestamp: _fetched }: any = {}) {
    return JsonSchema.transform(({ listing }) =>
      (listing ? Object.values(listing.listing.ads) : []).reduce<Promise<any>>(
        (promise, item) => promise.then(() => this.commit(item, { _fetched })),
        Promise.resolve(),
      ),
    ).parseAsync(json);
  }

  async commit(item = {}, { _fetched }: any = {}) {
    // console.log(item);
    return ItemSchema.parseAsync(item).then((item) =>
      items
        .findOne({ id: item.id })
        .then((last) => last as ItemType)
        .then((last) => {
          if (last) {
            if (
              _fetched &&
              (_fetched < last._checked ||
                _fetched < last._updated ||
                _fetched < last._created)
            ) {
              return;
            }
            const diff = diffString(
              DiffSchema.parse(last),
              DiffSchema.parse(item),
            );
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return items.update(updateItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return items.update({ ...last, _checked: _time });
            }
          } else {
            this.summary.created.push(item.id);
            return items.insert({
              ...item,
              _created: _time,
            });
          }
        }),
    );
  }
}
