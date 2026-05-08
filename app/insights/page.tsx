import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { InsightCard } from "@/components/sections/Cards";
import { insightCards } from "@/lib/data/insights";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Insights on Product, Technology, and Founder Execution | Aditya Pranav",
  description:
    "Practical insights on Fractional CTO decisions, roadmap discipline, architecture, delivery governance, and AI adoption.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Insights on Product, Technology, and Founder Execution"
        subtitle="Practical thinking for founders navigating product decisions, technology choices, engineering execution, and AI adoption."
      />
      <section className="container-wrap py-16">
        <SectionHeading title="Articles" />
        <div className="grid gap-4 md:grid-cols-2">
          {insightCards.map((item) => (
            <InsightCard key={item.title} title={item.title} description={item.description} cta={item.cta} href={"href" in item ? item.href : undefined} />
          ))}
        </div>
      </section>
    </>
  );
}
