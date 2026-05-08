import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExperienceCard, EngagementModelCard } from "@/components/sections/Cards";
import CTAButton from "@/components/ui/CTAButton";
import { createPageMetadata } from "@/lib/metadata";
import { VisionToExecutionFlow } from "@/components/visual/HomeVisuals";

export const metadata: Metadata = createPageMetadata({
  title: "Fractional CTO Services for Startups | Aditya Pranav",
  description:
    "Senior technology leadership for startups and growing teams. Architecture review, technical roadmap, engineering governance, vendor review, and scaling guidance.",
  path: "/fractional-cto",
});

const supportCards = [
  "MVP build needs technical direction",
  "Developers in place but no senior technology owner",
  "Agency-led build needs independent oversight",
  "Architecture becoming difficult to scale",
  "Delivery is slow or unpredictable",
  "Hiring and team structure need guidance",
  "Preparing for funding or technical diligence",
  "Need practical AI and integration direction",
];

const reviewGrid = [
  "Technology roadmap",
  "Architecture review board",
  "Backend and database design",
  "Cloud and infrastructure planning",
  "API and integration strategy",
  "Vendor and agency review",
  "Engineering delivery governance",
  "Security and scalability checks",
  "AI integration advisory",
  "Technical due diligence support",
];

const deliverables = [
  "Technical roadmap",
  "Architecture recommendations",
  "System design notes",
  "Risk and gap analysis",
  "Delivery governance model",
  "Vendor review notes",
  "Team structure recommendations",
  "Execution roadmap",
];

const models = [
  ["CTO Advisory Sprint", "Focused architecture and execution review", "Risk map + action plan"],
  ["Monthly Fractional CTO", "Ongoing leadership support", "Roadmap, governance, and review cadence"],
  ["Architecture Review Sprint", "System-level validation", "Architecture recommendations"],
  ["Vendor Oversight", "Founder-side technical control", "Visibility and escalation framework"],
];

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fractional CTO Services",
    provider: { "@type": "Person", name: "Aditya Pranav" },
  };

  return (
    <>
      <Script id="cto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        title="Fractional CTO for Founders and Growing Product Teams"
        subtitle="Senior technology leadership to help you make better architecture, roadmap, team, vendor, and scaling decisions without hiring a full-time CTO too early."
        ctaText="Book a Fractional CTO Discussion"
      />

      <section className="container-wrap py-14">
        <SectionHeading title="Architecture Review Board" description="Visual decision layer across roadmap, architecture, execution, and risk." />
        <VisionToExecutionFlow />
      </section>

      <section className="container-wrap py-14">
        <SectionHeading title="When You Need CTO Support" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {supportCards.map((item) => (
            <ExperienceCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <SectionHeading title="What I Review" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {reviewGrid.map((item) => (
            <ExperienceCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <SectionHeading title="Deliverables" />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <ExperienceCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <SectionHeading title="Engagement Models" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {models.map(([title, bestFor, output]) => (
            <EngagementModelCard key={title} title={title} bestFor={bestFor} output={output} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-14">
        <div className="section-shell p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">Need a CTO-Level View Before You Build Further?</h2>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Fractional CTO Discussion</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
