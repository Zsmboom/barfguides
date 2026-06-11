import { hydrate } from "@tanstack/react-start";
import { createRouter } from "./router";

const router = createRouter();

hydrate(document.getElementById("root"), { router });
