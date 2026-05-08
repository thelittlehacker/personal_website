import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Product & Engineering Advisory | Aditya Pranav",
  description:
    "Independent advisory across roadmap, architecture, delivery process, team ownership, and practical AI opportunities.",
  path: "/advisory",
});

const coverage = [
  {
    title: "Product roadmap review",
    review: "Roadmap quality, sequence, and business alignment",
    receive: "Sharper priority structure and decision clarity",
  },
  {
    title: "Architecture and code review",
    review: "Backend patterns, integrations, and maintainability risk",
    receive: "Architecture guidance and risk priorities",
  },
  {
    title: "Delivery process review",
    review: "Sprint rhythm, estimation quality, QA, and release discipline",
    receive: "Practical delivery governance model",
  },
  {
    title: "Team structure and ownership review",
    review: "Role clarity, decision boundaries, and coordination flow",
    receive: "Cleaner operating model with accountable ownership",
  },
  {
    title: "AI and automation opportunity review",
    review: "Use-case fit, feasibility, and workflow impact",
    receive: "Prioritized opportunities and adoption direction",
  },
  {
    title: "Advisory sprint model",
    review: "Focused review across product, tech, and execution",
    receive: "Findings, recommendations, and next steps",
  },
] as const;

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        title="Product & Engineering Advisory for Better Execution"
        subtitle="Independent advisory for founders and teams that need clarity across product direction, technical decisions, delivery governance, and execution."
      />
      <section className="container-wrap py-16">
        <SectionHeading title="Advisory Coverage" />
        <p className="mb-4 text-xs font-medium text-slate-500">
          How to read this: each card shows the review scope and the concrete output you receive.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coverage.map((item) => (
            <article key={item.title} className="glass-panel rounded-xl p-5">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-500">What I review</p>
              <p className="text-sm text-slate-600">{item.review}</p>
              <p className="mt-2 text-xs text-slate-500">What you receive</p>
              <p className="text-sm text-slate-700">{item.receive}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton href="/contact">Get Product & Tech Clarity</CTAButton>
        </div>
      </section>
    </>
  );
}
