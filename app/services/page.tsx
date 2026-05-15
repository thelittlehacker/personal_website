import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Product & Technology Advisory Services | Aditya Pranav",
  description:
    "Fractional CTO, architecture review, delivery governance, MVP planning, Fractional CPO support, AI advisory, and technical due diligence.",
  path: "/services",
});

const services = [
  {
    title: "Fractional CTO",
    summary: "CTO-level direction across roadmap, architecture, and delivery governance.",
    tags: ["Roadmap", "Architecture", "Execution"],
    cta: "Explore Fractional CTO Support",
  },
  {
    title: "Architecture & Technical Review",
    summary: "Independent review of systems, integrations, scalability, and maintainability risk.",
    tags: ["Backend", "APIs", "Scale"],
    cta: "Review Your Architecture",
  },
  {
    title: "Engineering Delivery Governance",
    summary: "Execution discipline through planning, ownership, QA, and release rhythm.",
    tags: ["Sprint", "QA", "Release"],
    cta: "Improve Delivery",
  },
  {
    title: "MVP Planning & Product Strategy",
    summary: "Practical MVP scope and phased roadmap aligned to business priorities.",
    tags: ["Scope", "Priorities", "Launch"],
    cta: "Plan Your MVP",
  },
  {
    title: "Fractional CPO Support",
    summary: "Product clarity support for prioritization, PRD structure, and roadmap alignment.",
    tags: ["PRD", "Prioritization", "Roadmap"],
    cta: "Discuss Your Product",
  },
  {
    title: "AI & Automation Advisory",
    summary: "Practical AI opportunities for product experience and internal workflows.",
    tags: ["Use Cases", "Workflow", "Adoption"],
    cta: "Explore AI Opportunities",
  },
  {
    title: "Vendor / Agency Review",
    summary: "Founder-side technical oversight for quality, delivery, and risk visibility.",
    tags: ["Vendor", "Risk", "Visibility"],
    cta: "Review Vendor Delivery",
  },
  {
    title: "Hiring & Team Structuring Support",
    summary: "Clear team design, role ownership, and execution interfaces for scaling teams.",
    tags: ["Hiring", "Ownership", "Team Design"],
    cta: "Structure Your Team",
  },
  {
    title: "Technical Due Diligence Support",
    summary: "Risk and readiness review before scale, funding, or major product decisions.",
    tags: ["Diligence", "Risk", "Readiness"],
    cta: "Review Your Tech Roadmap",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Fractional CTO, Product Strategy, and Engineering Advisory Services"
        subtitle="Product-engineering led advisory for founders who need clarity across technology, product decisions, team execution, and scalable delivery."
      />
      <section className="container-wrap py-16">
        <SectionHeading title="Services" description="CTO-first support with complementary product and engineering advisory coverage." />
        <p className="mb-4 text-xs font-medium text-slate-500">
          How to read this: each card shows offer, focus tags, and engagement CTA.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="glass-panel rounded-xl p-5">
              <h3 className="text-sm font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold text-indigo-600">{service.cta}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href="/fractional-cto">Explore Fractional CTO Support</CTAButton>
          <CTAButton href="/contact" secondary>
            Discuss Your Product
          </CTAButton>
        </div>
      </section>
    </>
  );
}
