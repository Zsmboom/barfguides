import { jsxs, jsx } from "react/jsx-runtime";
import { c as site } from "./router-BBbJzgjh.js";
function DataDisclaimer({ dataType }) {
  return /* @__PURE__ */ jsxs("div", { className: "mt-10 rounded-lg border border-amber-400/20 bg-amber-950/15 p-5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold uppercase tracking-[0.15em] text-amber-300", children: "📋 About This Data" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-3 leading-7 text-slate-300", children: [
      "The ",
      dataType,
      " on this page are based on community testing, YouTube creator coverage, and in-game observation. They are ",
      /* @__PURE__ */ jsx("strong", { className: "text-white", children: "not official" }),
      " values published by Gamecreates. We",
      " ",
      /* @__PURE__ */ jsx("strong", { className: "text-white", children: "continuously update" }),
      " this page as",
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-amber-200 font-semibold", children: "Build A Ring Farm" }),
      " evolves with new patches and community discoveries."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-400", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "🎮 Official:",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `https://www.roblox.com/games/${site.robloxGameId}/`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "font-semibold text-emerald-300 hover:text-emerald-200",
            children: "Roblox Game Page"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("span", { children: [
        "📺 Key sources:",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.youtube.com/@Foltyn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "font-semibold text-emerald-300 hover:text-emerald-200",
            children: "Foltyn"
          }
        ),
        " · ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.youtube.com/@MeEnyu",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "font-semibold text-emerald-300 hover:text-emerald-200",
            children: "MeEnyu"
          }
        ),
        " · ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.youtube.com/@CoralBlox2",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "font-semibold text-emerald-300 hover:text-emerald-200",
            children: "CoralBlox2"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("span", { children: "🔄 Last updated: June 2026" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-slate-500", children: "Found something inaccurate? The game may have been updated since this page was last reviewed. Check the official Roblox page for the latest changes." })
  ] });
}
export {
  DataDisclaimer as D
};
