import { Router } from "express";
import { router } from "@dev/worker";

require("dotenv").config();

export const middleware = () => Router().use(router());
