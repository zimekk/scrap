require("dotenv").config();

export const remove = (status = false) => require("./remove").remove(status);

export const schema = () => require("./schema").schema();

export const status = () => {
  remove(true);
};

export const sync = (type?: string) => require("./sync").sync(type);

export const verify = () => require("./verify").verify();

export default (type?: string) => require("./import").default(type);
