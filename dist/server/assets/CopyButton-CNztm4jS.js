import { jsx } from "react/jsx-runtime";
import { useState } from "react";
function CopyButton({ value, label = "Copy" }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: copy,
      className: "inline-flex h-9 items-center justify-center rounded-md border border-emerald-400/40 bg-emerald-400/10 px-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20",
      children: copied ? "Copied" : label
    }
  );
}
export {
  CopyButton as C
};
