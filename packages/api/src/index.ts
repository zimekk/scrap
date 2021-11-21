import { resolve } from "path";
import nedb from "nedb";

class Entities {
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

  update(i: any) {
    return new Promise((resolve, reject) =>
      this.db.update({ _id: i._id }, i, {}, (err: any, res: object) =>
        err ? reject(err) : resolve(res)
      )
    );
  }
}

export const items = new Entities(resolve(__dirname, "../temp/items.db"));

export const requests = new Entities(resolve(__dirname, "../temp/requests.db"));

export const productItems = new Entities(
  resolve(__dirname, "../temp/product-items.db")
);

export const stationItems = new Entities(
  resolve(__dirname, "../temp/station-items.db")
);

export const vehicleItems = new Entities(
  resolve(__dirname, "../temp/vehicle-items.db")
);

export const vehicle2Items = new Entities(
  resolve(__dirname, "../temp/vehicle2-items.db")
);
