import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/Cards";

import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Product, Engineering, and Founder Experience | Aditya Pranav",
  description:
    "Experience across VP-level engineering leadership, startup execution, backend systems, fintech, governance, and AI-assisted delivery.",
  path: "/experience",
});

const sections = [
  ["Product & Engineering Leadership", ["Roadmap alignment", "Architecture decisions", "Delivery accountability"]],
  ["Startup Founder Perspective", ["Founder-stage constraints", "Execution tradeoffs", "Practical decisioning"]],
  ["Backend and Cloud Systems", ["Node.js", "PostgreSQL", "AWS"]],
  ["Fintech, Payments, and Integrations", ["Payment systems", "API integrations", "Reliability"]],
  ["Delivery Governance", ["Estimation", "QA discipline", "Release planning"]],
  ["AI-Assisted Product Execution", ["Use case fit", "Workflow enablement", "Practical adoption"]],
  ["Working With Founders and Teams", ["Founder collaboration", "PM-engineering coordination", "Vendor alignment"]],
] as const;

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Product, Engineering, and Founder Experience"
        subtitle="My advisory work is shaped by hands-on engineering, startup building, product delivery, team leadership, and real-world execution challenges."
      />
      {sections.map((section) => (
        <section key={section[0]} className="container-wrap py-10">
          <SectionHeading title={section[0]} />
          <div className="grid gap-3 md:grid-cols-3">
            {section[1].map((item) => (
              <ExperienceCard key={item} text={item} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
