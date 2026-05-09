"use client";

import { useState } from "react";

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 4v12a2 2 0 002 2h8a2 2 0 002-2V7.242a2 2 0 00-.602-1.43L16.083 2.598A2 2 0 0014.85 2H10a2 2 0 00-2 2z" />
      <path d="M16 18v2a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2" />
    </svg>
  );
}

/** Reference-style: label, then value + copy icon on one row */
export function FooterCopyField({
  label,
  value,
  copyValue,
}: {
  label: string;
  value: string;
  copyValue?: string;
}) {
  const [copied, setCopied] = useState(false);
  const toCopy = copyValue ?? value;

  async function copy() {
    try {
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="border-b border-neutral-800 py-7 first:pt-2">
      <p className="text-[12px] font-medium text-neutral-300">{label}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <span className="text-[17px] text-white sm:text-lg">{value}</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center justify-center rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
          aria-label={copied ? "Copied" : `Copy ${label}`}
          title={copied ? "Copied" : "Copy"}
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  );
}
