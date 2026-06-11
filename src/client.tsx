import { hydrate } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();

hydrate(document.getElementById("root"), { router });
