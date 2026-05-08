import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/Cards";
import CTAButton from "@/components/ui/CTAButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Fractional CPO Services for Founders | Aditya Pranav",
  description:
    "Product leadership for founders building digital products. MVP planning, roadmap prioritization, user journeys, PRD structure, and product execution guidance.",
  path: "/fractional-cpo",
});

const matrix = [
  "Scope clarity",
  "Priority sequencing",
  "User journey quality",
  "PRD readiness",
  "Build feasibility",
  "Release discipline",
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fractional CPO Services",
    provider: { "@type": "Person", name: "Aditya Pranav" },
  };

  return (
    <>
      <Script id="cpo-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        title="Fractional CPO for Founders Building Product Clarity"
        subtitle="Product leadership to help you define the right roadmap, prioritize features, validate user needs, and align product execution with business goals."
        ctaText="Book a Fractional CPO Discussion"
      />

      <section className="container-wrap py-14">
        <SectionHeading title="MVP Scope Matrix" description="Product strategy support as a secondary offer to CTO-led engagement." />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {matrix.map((item) => (
            <ExperienceCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <SectionHeading title="Prioritization Grid" />
        <div className="section-shell grid gap-3 p-6 md:grid-cols-4">
          {[
            "Business value",
            "User need",
            "Effort",
            "Risk",
            "Timing",
            "Dependencies",
            "Validation confidence",
            "Release fit",
          ].map((item) => (
            <span key={item} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <div className="section-shell p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Need Product Clarity Before You Build More?</h2>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Fractional CPO Discussion</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
