import { resolve } from "path";
import nedb from "nedb";

class Items {
  public db: any;

  constructor(filename: string) {
    this.db = new nedb({
      filename,
      autoload: true,
    });
    this.db.ensureIndex({ fieldName: "id", unique: true }, (err: any) =>
      err ? console.error(err) : null
    );
  }

  find(c: any) {
    return new Promise((resolve, reject) =>
      this.db
        .find(c)
        .exec((err: any, res: object) => (err ? reject(err) : resolve(res)))
    );
  }

  findOne(c: any) {
    return new Promise((resolve, reject) =>
      this.db.findOne(c, (err: any, res: object) =>
        err ? reject(err) : resolve(res)
      )
    );
  }

  insert(i: any) {
    return new Promise((resolve, reject) =>
      this.db.insert(i, (err: any, res: object) =>
        err ? reject(err) : resolve(res)
      )
    );
  }
}

export const items = new Items(resolve(__dirname, "../temp/items.db"));
