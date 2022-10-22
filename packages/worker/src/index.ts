require("dotenv").config();

export const broker = () => require("./broker").broker();

export const worker = () => require("./worker").worker();
