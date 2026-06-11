import { jsxs, jsx } from "react/jsx-runtime";
import { j as jsonLd } from "./router-BBbJzgjh.js";
function Section({
  eyebrow,
  title,
  children,
  level
}) {
  const Heading = level === 1 ? "h1" : "h2";
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-4 py-10", children: [
    eyebrow ? /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-300", children: eyebrow }) : null,
    /* @__PURE__ */ jsx(Heading, { className: "text-2xl font-black text-white md:text-3xl", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children })
  ] });
}
function StatCard({ label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-white/10 bg-white/[0.04] p-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-amber-300", children: value }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm text-slate-400", children: label })
  ] });
}
function InfoCard({ title, children }) {
  return /* @__PURE__ */ jsxs("article", { className: "rounded-lg border border-white/10 bg-slate-900/70 p-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-lg font-black text-white", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-sm leading-6 text-slate-300", children })
  ] });
}
function JsonLd({ data }) {
  return /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: jsonLd(data) } });
}
export {
  InfoCard as I,
  JsonLd as J,
  Section as S,
  StatCard as a
};
