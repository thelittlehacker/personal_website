const tags = [
  "VP Engineering Experience",
  "Fintech & Payments",
  "Node.js · PostgreSQL · AWS",
  "Startup Founder",
  "AI Advisory",
  "Product Roadmaps",
  "Delivery Governance",
  "MVP Planning",
  "Architecture Review",
  "Fractional CTO",
  "Scalable Products",
  "Enterprise-Scale Delivery",
];

/** Infinite-scroll credibility ticker. Duplicated list = seamless loop. */
export default function Marquee({ dark = false }: { dark?: boolean }) {
  const items = [...tags, ...tags];

  return (
    <div
      className={`relative overflow-hidden border-y py-3 ${
        dark
          ? "border-white/10 bg-black"
          : "border-[#E8E0D4] bg-[#FAF7F0]"
      }`}
      aria-hidden
    >
      {/* fade edges */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 ${
          dark
            ? "bg-gradient-to-r from-black to-transparent"
            : "bg-gradient-to-r from-[#FAF7F0] to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 ${
          dark
            ? "bg-gradient-to-l from-black to-transparent"
            : "bg-gradient-to-l from-[#FAF7F0] to-transparent"
        }`}
      />

      <div className="animate-marquee flex w-max gap-0">
        {items.map((tag, i) => (
          <span
            key={i}
            className={`flex items-center gap-6 px-6 text-[11px] font-semibold uppercase tracking-[0.14em] ${
              dark ? "text-neutral-500" : "text-[#5F5F5F]"
            }`}
          >
            {tag}
            <span className={dark ? "text-neutral-700" : "text-[#2F6F68]"}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
