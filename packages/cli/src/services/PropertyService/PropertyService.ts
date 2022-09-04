import { z } from "zod";
import { propertyItems } from "@dev/api";
import Service from "../Service";
import { diffPropertyItem, updatePropertyItem } from "./utils";

const _time = Date.now();

export default class PropertyService extends Service {
  async commit(item = {}): Promise<any> {
    return z
      .object({
        id: z.string(),
        canonical: z.string(),
      })
      .passthrough()
      .parseAsync(item)
      .then((item) => {
        propertyItems.findOne({ id: item.id }).then((last: any) => {
          if (last) {
            const diff = diffPropertyItem(last, item);
            if (diff) {
              console.log(`[${last.id}]`, diff);
              this.summary.updated.push(item.id);
              return propertyItems.update(updatePropertyItem(last, item));
            } else {
              this.summary.checked.push(item.id);
              return propertyItems.update({
                ...last,
                _checked: _time,
              });
            }
          } else {
            this.summary.created.push(item.id);
            return propertyItems.insert({
              ...item,
              _created: _time,
            });
          }
        });
      });
  }
}
