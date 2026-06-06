"use client";

import { useState } from "react";

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-9 items-center justify-center rounded-md border border-emerald-400/40 bg-emerald-400/10 px-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
    >
      {copied ? "Copied" : label}
    </button>
  );
}
