"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { InsightCard } from "./Cards";
import {
  insightCards,
  INSIGHT_CATEGORIES,
  type InsightCategory,
} from "@/lib/data/insights";

type FilterValue = InsightCategory | "All";

const ALL_FILTERS: FilterValue[] = ["All", ...INSIGHT_CATEGORIES];

const CATEGORY_TO_SLUG: Record<InsightCategory, string> = {
  "Founder Guides": "founder-guides",
  "Product Engineering": "product-engineering",
  "Architecture & Scaling": "architecture-scaling",
  "AI & Automation": "ai-automation",
  "Technical Debt & Delivery Governance": "technical-debt-delivery",
};

const SLUG_TO_CATEGORY: Partial<Record<string, InsightCategory>> = Object.fromEntries(
  Object.entries(CATEGORY_TO_SLUG).map(([cat, slug]) => [slug, cat as InsightCategory])
);

export default function InsightsGrid() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const slug = searchParams.get("category") ?? "";
  const active: FilterValue = SLUG_TO_CATEGORY[slug] ?? "All";

  const setFilter = useCallback(
    (cat: FilterValue) => {
      const params = new URLSearchParams(searchParams.toString());
      if (cat === "All") {
        params.delete("category");
      } else {
        params.set("category", CATEGORY_TO_SLUG[cat]);
      }
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  const filtered =
    active === "All"
      ? insightCards
      : insightCards.filter((item) => item.category === active);

  return (
    <>
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by category"
      >
        {ALL_FILTERS.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                isActive
                  ? "border-[#2F6F68] bg-[#2F6F68] text-white"
                  : "border-[#E8E0D4] bg-white text-slate-600 hover:border-[#2F6F68] hover:text-[#2F6F68]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <InsightCard
            key={item.title}
            title={item.title}
            description={item.description}
            cta={item.cta}
            href={item.href}
            category={item.category}
            badge={item.badge}
          />
        ))}
      </div>
    </>
  );
}
