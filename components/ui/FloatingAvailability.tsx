"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Appears after the user scrolls 400px — a gentle reminder that you're
 * open for engagements. Dismissable. Disappears near the footer.
 */
export default function FloatingAvailability() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const nearBottom =
        scrollY + window.innerHeight >= document.body.scrollHeight - 200;
      setVisible(scrollY > 400 && !nearBottom);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="animate-fade-up fixed bottom-6 left-5 z-50 sm:left-8">
      <div className="relative">
        <Link
          href="/contact"
          className="flex items-center gap-2.5 rounded-full border border-[#c8dbd9] bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm transition-all hover:border-[#2F6F68] hover:shadow-xl"
        >
          {/* Pulsing green dot */}
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F6F68] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2F6F68]" />
          </span>
          <span className="text-xs font-semibold text-[#171717]">
            Open for new engagements
          </span>
        </Link>

        {/* Dismiss × */}
        <button
          type="button"
          aria-label="Dismiss"
          onClick={(e) => {
            e.preventDefault();
            setDismissed(true);
          }}
          className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5F5F5F] text-[10px] leading-none text-white transition-colors hover:bg-[#171717]"
        >
          ×
        </button>
      </div>
    </div>
  );
}
