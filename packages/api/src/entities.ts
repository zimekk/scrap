import nedb from "nedb";

export class Entities {
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

  find(c: any): Promise<object[]> {
    return new Promise((resolve, reject) =>
      this.db
        .find(c)
        .exec((err: any, res: object[]) => (err ? reject(err) : resolve(res)))
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

  remove(c: any, o = {}): Promise<number> {
    return new Promise((resolve, reject) =>
      this.db.remove(c, o, (err: any, res: number) =>
        err ? reject(err) : resolve(res)
      )
    );
  }

  count(c = {}): Promise<number> {
    return new Promise((resolve, reject) =>
      this.db.count(c, (err: any, res: number) =>
        err ? reject(err) : resolve(res)
      )
    );
  }
}
