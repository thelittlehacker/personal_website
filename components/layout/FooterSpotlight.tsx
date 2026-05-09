"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function FooterSpotlight() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [inside, setInside] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mqFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    setFinePointer(mqFine.matches);
    setReduceMotion(mqReduce.matches);
    const onFine = () => setFinePointer(mqFine.matches);
    const onReduce = () => setReduceMotion(mqReduce.matches);
    mqFine.addEventListener("change", onFine);
    mqReduce.addEventListener("change", onReduce);
    return () => {
      mqFine.removeEventListener("change", onFine);
      mqReduce.removeEventListener("change", onReduce);
    };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  const canInteract = finePointer && !reduceMotion;

  const overlayBg = !canInteract
    ? "transparent"
    : inside
    ? `radial-gradient(circle 240px at ${pos.x}px ${pos.y}px, transparent 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.92) 80%)`
    : "rgba(0,0,0,0.82)";

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "clamp(280px, 50vh, 520px)" }}
      onMouseMove={canInteract ? onMouseMove : undefined}
      onMouseEnter={(e) => {
        if (!canInteract) return;
        const r = wrapRef.current!.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        setInside(true);
      }}
      onMouseLeave={() => {
        setInside(false);
        setPos({ x: -999, y: -999 });
      }}
    >
      {/* ── z-0: Content layer ── */}
      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center px-8 text-center">
        {/* Corner labels */}
        <p className="absolute left-4 top-4 max-w-[9rem] text-left text-[9px] font-medium uppercase leading-relaxed tracking-[0.2em] text-neutral-600">
          Fractional CTO · Product Engineering · AI Advisory
        </p>
        <p className="absolute bottom-8 right-4 max-w-[9rem] text-right text-[9px] font-medium uppercase leading-relaxed tracking-[0.2em] text-neutral-600">
          Available for new engagements — from anywhere.
        </p>

        {/* Decorative "A" — faint, behind text */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-bold leading-none"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            fontSize: "clamp(8rem, 28vw, 16rem)",
            color: "#1d4ed8",
            opacity: 0.3,
          }}
        >
          A
        </span>

        {/* Main headline */}
        <p
          className="relative max-w-[16ch] text-[1.75rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-[2.5rem]"
          style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
        >
          Let&apos;s talk about your next startup.
        </p>
        <p className="relative mt-6 text-[13px] text-neutral-500">
          or{" "}
          <Link
            href="/contact"
            className="text-neutral-300 underline decoration-neutral-600 underline-offset-[6px] transition-colors hover:text-white hover:decoration-white"
          >
            book a strategy call
          </Link>
        </p>
      </div>

      {/* ── z-10: Dark overlay with spotlight hole ── */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: overlayBg,
          transition: "background 60ms linear",
        }}
      />
    </div>
  );
}
