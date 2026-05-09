"use client";

export default function FooterBackToTop() {
  return (
    <button
      type="button"
      className="flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full border border-white/15 text-neutral-400 transition-colors hover:border-white/30 hover:text-white sm:self-auto"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
