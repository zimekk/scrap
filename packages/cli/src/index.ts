require("dotenv").config();

export const remove = (status = false) => require("./remove").remove(status);

export const status = () => {
  remove(true);
};

export const verify = () => require("./verify").verify();

export default (type?: string) => require("./import").default(type);
