import { lazy } from "react";
const BeginnerGuidePage = lazy(() => import("./page-CCXtFron.js").then((m) => ({
  default: m.default
})));
export {
  BeginnerGuidePage as component
};
