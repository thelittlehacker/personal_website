import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import InsightsGrid from "@/components/sections/InsightsGrid";
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
        <Suspense>
          <InsightsGrid />
        </Suspense>
      </section>
    </>
  );
}
