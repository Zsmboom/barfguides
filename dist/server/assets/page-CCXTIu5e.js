import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { J as JsonLd, S as Section } from "./JsonLd-BnxbqAWn.js";
import { b as breadcrumbSchema, v as videoGameSchema } from "./router-BBbJzgjh.js";
import "@tanstack/react-router";
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(JsonLd, { data: [breadcrumbSchema("/about", "About"), videoGameSchema()] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 pt-10", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-xl border border-white/10", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/images/game-screenshot.jpg",
        alt: "Build A Ring Farm on Roblox",
        className: "h-40 w-full object-cover md:h-56",
        loading: "eager"
      }
    ) }) }),
    /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-7xl px-4 py-10", children: /* @__PURE__ */ jsx(Section, { eyebrow: "ABOUT", level: 1, title: "About BARF Guides", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl space-y-6 text-slate-300", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "BARF Guides is an independent fan-made resource for Build A Ring Farm on Roblox, hosted at ",
        /* @__PURE__ */ jsx("strong", { children: "www.buildaringfarmguides.com" }),
        ". We provide tools, calculators, and strategy guides to help players maximize their farm efficiency."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Our profit calculator is the only tool on the web that calculates profit per minute and ROI for Build A Ring Farm seed setups." }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Not affiliated with Roblox Corporation or Gamecreates." }),
        " This is a fan project created by the community, for the community."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Game: ",
        /* @__PURE__ */ jsx("a", { href: "https://www.roblox.com/games/107646426076756/Build-A-Ring-Farm", className: "text-emerald-400 hover:underline", children: "Build A Ring Farm on Roblox" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Developer: Gamecreates" })
    ] }) }) })
  ] });
}
export {
  AboutPage,
  AboutPage as default
};
