require("dotenv").config();

export const broker = () => require("./broker").broker();

export const router = () => require("./router").router();

export const worker = () => require("./worker").worker();
