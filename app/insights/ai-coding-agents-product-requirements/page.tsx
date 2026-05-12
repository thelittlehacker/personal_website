import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "Why AI Coding Agents Need Product Requirements Before They Write Code | Aditya Pranav",
  description:
    "AI coding agents can build faster, but unclear product requirements create faster rework, scope creep, and technical debt.",
  path: "/insights/ai-coding-agents-product-requirements",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do AI coding agents still need product requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AI coding agents need clear requirements, workflows, acceptance criteria, edge cases, and technical boundaries to produce useful code. Without them, they can generate faster rework.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI coding tools build an MVP without a PRD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can generate code without a PRD, but that does not mean they will build the right MVP. A lightweight PRD helps protect scope, clarify assumptions, and reduce rework.",
      },
    },
    {
      "@type": "Question",
      name: "What should founders document before using AI coding tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Founders should document the user problem, primary user, happy path, edge cases, business rules, data needs, integrations, acceptance criteria, and what should not be built yet.",
      },
    },
    {
      "@type": "Question",
      name: "Why does AI-generated code often need rework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-generated code often needs rework because the original requirement was incomplete, the workflow was unclear, edge cases were missing, or the generated solution did not fit the product architecture.",
      },
    },
    {
      "@type": "Question",
      name: "How do acceptance criteria help AI-assisted development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Acceptance criteria give both humans and AI coding tools a clear definition of done. They reduce ambiguity and make review, testing, and delivery governance easier.",
      },
    },
    {
      "@type": "Question",
      name: "Can Cursor or Copilot replace a developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Cursor, Copilot, and similar tools can speed up implementation, but developers still need to own architecture fit, code quality, testing, security, and production behavior.",
      },
    },
    {
      "@type": "Question",
      name: "How can founders prevent AI-generated technical debt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Founders can prevent AI-generated technical debt by defining requirements clearly, keeping scope tight, requiring human review, testing critical flows, and reviewing architecture and database changes.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Fractional CTO help with AI-assisted development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CTO can convert business ideas into build-ready requirements, define architecture direction, review AI-generated code quality, and set delivery guardrails for AI-assisted teams.",
      },
    },
  ],
};

const requirementChecklist = [
  "What user problem does this feature solve?",
  "Who is the primary user?",
  "What is the happy path?",
  "What are the edge cases?",
  "What should not be built in this version?",
  "What are the business rules?",
  "What data is required?",
  "What integrations are involved?",
  "What are the acceptance criteria?",
  "What should happen if the AI-generated output fails review?",
  "Who owns final approval?",
  "How will this feature be tested?",
];

const requirementParts = [
  {
    title: "User outcome",
    body: "Define what the user should be able to do and why it matters to the business. This keeps the AI coding task tied to value, not just output.",
  },
  {
    title: "Workflow",
    body: "Describe the happy path, alternate paths, and where the feature starts and ends. AI tools perform better when the flow is explicit.",
  },
  {
    title: "Business rules",
    body: "Document eligibility, pricing, roles, limits, approvals, payment states, notifications, and any rules that affect product behavior.",
  },
  {
    title: "Acceptance criteria",
    body: "Define what must be true before the feature is accepted. This makes review and testing practical instead of subjective.",
  },
  {
    title: "Technical boundaries",
    body: "Clarify which systems, APIs, tables, integrations, and architecture layers should be touched, and which should be avoided.",
  },
  {
    title: "Out-of-scope items",
    body: "State what should not be built yet. This is especially important for MVPs where AI can make overbuilding feel inexpensive.",
  },
];

const commonMistakes = [
  {
    title: "Asking AI to build before the feature is understood",
    body: "If the founder, product owner, and developer cannot explain the workflow clearly, an AI agent will likely generate a polished version of the confusion.",
  },
  {
    title: "Using AI speed to expand MVP scope",
    body: "When implementation feels cheap, teams add dashboards, roles, settings, integrations, and admin controls before validating the core user journey.",
  },
  {
    title: "Skipping acceptance criteria",
    body: "Without acceptance criteria, review becomes opinion-based. The team cannot easily tell whether the AI-generated feature is correct or merely functional.",
  },
  {
    title: "Ignoring edge cases",
    body: "Edge cases around failed payments, duplicate records, permissions, refunds, retries, and incomplete data often define whether a product feels reliable.",
  },
  {
    title: "Treating generated code as the requirement",
    body: "Code should implement the requirement. It should not become the source of truth for what the product is supposed to do.",
  },
];

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="container-wrap max-w-3xl py-14 lg:py-20">
        <nav className="mb-6 flex items-center gap-2 text-xs text-[#5F5F5F]">
          <Link href="/" className="hover:text-[#2F6F68]">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[#2F6F68]">Insights</Link>
          <span>/</span>
          <span className="text-[#171717]">AI Coding Agents and Product Requirements</span>
        </nav>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="pin-label inline-block">Product Engineering</span>
          <span className="inline-flex rounded-full border border-[#2F6F68]/25 bg-[#EEF5F4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1f5953]">
            Trending
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          Why AI Coding Agents Need Product Requirements Before They Write Code
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">
          By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor
        </p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI coding agents can now do more than generate small snippets. They can navigate codebases, write tests, debug errors, create documentation, and implement larger chunks of product functionality. For founders, this creates an appealing promise: faster delivery with less friction.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          But there is a practical problem. AI coding agents can write code faster, but they cannot fix unclear product thinking. If the requirement is vague, incomplete, or changing every few days, AI will not remove the confusion. It will often turn that confusion into code faster.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before asking AI to build a feature, founders should first define what the feature is supposed to achieve, who it is for, what the workflow is, which edge cases matter, what success means, and what should not be built yet.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">AI Coding Agents Are Changing Software Delivery</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI-assisted development is changing how teams move from idea to implementation. A developer can ask an agent to inspect files, propose changes, write tests, update UI, refactor logic, or explain unfamiliar code. In a focused engineering workflow, this can save real time.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The shift is not only about faster typing. It changes the shape of delivery. Engineers spend more time defining tasks, reviewing output, validating behavior, and deciding whether the implementation fits the product and architecture.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          That makes product requirements more important, not less. The clearer the input, the more useful the AI-assisted output.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Problem Is Not AI-Generated Code. It Is Unclear Direction.</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Many teams blame AI-generated code when a feature misses expectations. Sometimes the code is the issue. But often the deeper problem is that nobody gave the tool a clear product requirement.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If a founder says, "Build a user dashboard," the AI can produce a dashboard. But which user is it for? What data should it show? What actions should be available? Which metrics matter? What should happen when data is missing? Which roles can access it? What should be out of scope for version one?
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Without those answers, the agent may still build something that looks complete. That is the risk. The output can feel like progress while creating rework.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why Vague Requirements Become More Expensive With AI</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Vague requirements have always caused rework. AI increases the impact because it allows teams to produce more implementation before the thinking is settled.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A manually built feature might expose confusion slowly. An AI-assisted feature can turn the same confusion into multiple screens, API changes, database fields, test files, and documentation within a short time. When the team later realizes the workflow was wrong, there is more to unwind.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This is how AI-assisted delivery can create product debt: not because the code was generated, but because the requirement was not ready.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What Founders Should Define Before Using AI Coding Tools</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A product requirement does not need to be a heavy corporate document. For a startup, it can be a clear one- or two-page working brief that gives the team enough context to build and review properly.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {requirementParts.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Role of PRDs, User Flows, and Acceptance Criteria</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A PRD, user flow, or acceptance criteria list is not paperwork for its own sake. It is a translation layer between business intent and engineering execution.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          For AI-assisted development, that translation layer becomes even more valuable. The agent needs context, the developer needs review criteria, and the founder needs confidence that the feature matches the business expectation.
        </p>
        <div className="mt-6 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="font-semibold text-[#171717]">Simple acceptance criteria example</p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#3a3a3a]">
            "When a paid user uploads a valid invoice PDF, the system extracts vendor name, invoice date, total amount, and tax amount; flags missing values for review; stores the original file securely; and prevents unpaid users from using the workflow."
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How Unclear Requirements Create Technical Debt</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Technical debt does not only come from poor code quality. It also comes from unclear product decisions that get embedded into the system.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A vague requirement can lead to duplicated business logic, inconsistent API behavior, unnecessary database fields, confusing permissions, weak test coverage, and features that need to be rebuilt after users interact with them.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          In products involving Node.js backends, PostgreSQL databases, AWS infrastructure, payment integrations, APIs, or vendor-built modules, these decisions affect more than the immediate feature. They affect maintainability, delivery speed, and scaling risk.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">A Founder Checklist for AI-Ready Product Requirements</h2>
        <div className="mt-5 space-y-2">
          {requirementChecklist.map((check, index) => (
            <div key={check} className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {index + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{check}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Common Mistakes Founders Make With AI-Assisted Development</h2>
        <ul className="mt-5 space-y-4">
          {commonMistakes.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#B46A3C]" />
              <div>
                <p className="font-semibold text-[#171717]">{item.title}</p>
                <p className="mt-0.5 text-[16px] leading-relaxed text-[#5F5F5F]">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How a Fractional CTO Turns Business Ideas Into Build-Ready Requirements</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A Fractional CTO or Product-Engineering Advisor helps convert a founder's business idea into requirements that developers and AI coding agents can actually execute against.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          That usually means clarifying MVP scope, identifying the primary user journey, writing acceptance criteria, reviewing PRD or SRS quality, defining architecture boundaries, checking integration complexity, and setting delivery governance before implementation starts.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The goal is not to slow the team down. It is to make AI-assisted development faster in the right direction.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Final Recommendation</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI coding agents can help startups build faster. But founders should not treat faster code generation as a replacement for product clarity.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before asking AI to build, define the requirement. Clarify the user, workflow, edge cases, business rules, technical boundaries, acceptance criteria, and ownership. Then use AI to accelerate implementation inside that structure.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Need CTO-level clarity before using AI coding tools for your product? Book a strategy call to convert your idea into clear requirements, architecture direction, delivery guardrails, and an AI-ready execution plan.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqSchema.mainEntity.map((item) => (
            <details key={item.name} className="group rounded-xl border border-[#E8E0D4] bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-[#171717] marker:hidden">
                {item.name}
                <span className="ml-4 flex-shrink-0 text-[#2F6F68] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="border-t border-[#E8E0D4] px-5 py-4 text-sm leading-relaxed text-[#5F5F5F]">
                {item.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="text-sm font-semibold text-[#171717]">Related Reading</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/insights/how-to-use-cursor-without-codebase-mess" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; How to Use Cursor Without Turning Your Codebase Into a Mess
            </Link>
            <Link href="/insights/ai-assisted-development-checklist-startup-founders" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI-Assisted Development Checklist for Startup Founders
            </Link>
            <Link href="/insights/why-product-roadmaps-fail-without-business-prioritization" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Why Product Roadmaps Fail Without Business Prioritization
            </Link>
            <Link href="/contact" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Book a Strategy Call
            </Link>
          </div>
        </div>

        <ArticleAuthor />

        <div className="mt-12 rounded-2xl bg-[#1C2B2A] p-8 text-center">
          <p className="label-mono text-[#6fccc4]">Ready to Talk</p>
          <h3 className="mt-3 text-xl font-bold text-white lg:text-2xl">
            Need AI-Ready Product Requirements Before Development Starts?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to turn your product idea into clear requirements, architecture direction, delivery guardrails, and an AI-ready execution plan.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}
