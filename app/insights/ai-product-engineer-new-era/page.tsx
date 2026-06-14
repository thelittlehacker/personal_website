import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "AI Product Engineers: The New Era of Shipping with Judgment | Aditya Pranav",
  description:
    "AI product engineering is becoming a distinct role: product sense + software execution + evaluation discipline. Here’s what it is, why it matters, and how to adopt it safely.",
  path: "/insights/ai-product-engineer-new-era",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI product engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI product engineer is a product-minded software engineer who ships AI-powered features end-to-end. They combine product judgment, full-stack execution, and evaluation engineering to make probabilistic AI systems reliable in production.",
      },
    },
    {
      "@type": "Question",
      name: "How is an AI product engineer different from an ML engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ML engineers typically focus on training, fine-tuning, and serving models. AI product engineers focus on building customer-facing features using existing model providers, designing workflows and guardrails, and owning quality, latency, and cost trade-offs.",
      },
    },
    {
      "@type": "Question",
      name: "Why is this role emerging now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LLM capabilities became accessible via APIs, so the bottleneck moved from model research to product execution: defining the right workflow, handling failure modes, building evaluation, and shipping reliably under real cost and latency constraints.",
      },
    },
    {
      "@type": "Question",
      name: "Do AI product engineers replace product managers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. In small teams, the role can reduce handoffs by combining product and engineering judgment for a feature. In larger teams, AI product engineers still partner with PMs and designers — they just own more of the build-and-verify loop.",
      },
    },
    {
      "@type": "Question",
      name: "What is evaluation engineering and why is it important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evaluation engineering is the discipline of measuring AI feature quality with test sets, scenarios, and metrics. It matters because AI behavior is probabilistic — you need evidence that it works across real user inputs, not just a demo prompt.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest risks when teams build AI features fast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common risks are shipping the wrong workflow, missing edge cases, leaking data, weak access control, hidden costs from token usage, and reliability issues that appear only under real user behavior. Governance and evals reduce these risks.",
      },
    },
    {
      "@type": "Question",
      name: "What should founders ask before hiring for AI product engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask for shipped examples, how they measured quality, how they handled failures, what trade-offs they made on latency and cost, how they designed prompts/tools/agents, and how they kept ownership and security strong in production.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Fractional CTO help with AI product engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CTO can define architecture boundaries, evaluation standards, and delivery governance so AI features ship safely. They help teams choose the right AI approach, avoid AI-driven technical debt, and align build speed with business outcomes.",
      },
    },
  ],
};

const whatChanges = [
  {
    title: "Implementation is cheaper",
    body: "AI reduces the cost of producing code, scaffolding, tests, and docs. This compresses iteration cycles — but it also increases how much can be built incorrectly before the team notices.",
  },
  {
    title: "Reliability becomes a product feature",
    body: "For AI-powered UX, user trust depends on behavior under messy inputs, not the best-case demo. Reliability needs evaluation harnesses, fallback behavior, and clear constraints.",
  },
  {
    title: "Shipping requires governance",
    body: "When a workflow is probabilistic, you need a stronger definition of done: acceptance criteria, risk checks, access control review, and production monitoring.",
  },
];

const aiProductEngineerResponsibilities = [
  "Translate a user problem into an AI-enabled workflow (not just a chatbot)",
  "Choose the right approach: prompt-only vs RAG vs tools vs agents vs non-AI solution",
  "Design the interaction: context boundaries, UI affordances, and failure states",
  "Implement end-to-end: frontend + backend + AI orchestration",
  "Build evaluation: scenarios, test sets, regression checks, and quality metrics",
  "Own cost/latency/quality trade-offs and improve them over time",
  "Ship with guardrails: permissions, red-teaming, PII policies, logging and monitoring",
];

const competenceAreas = [
  {
    title: "Product sense",
    body: "Can they define the right workflow, scope a v1, and reject unnecessary AI? The best AI feature is often a smaller, clearer workflow — not a bigger model.",
  },
  {
    title: "Engineering execution",
    body: "Can they ship full-stack changes safely? AI features still rely on data models, APIs, auth, caching, background jobs, and stable UX.",
  },
  {
    title: "Evaluation discipline",
    body: "Can they measure quality and prevent regressions? Without evals, reliability becomes subjective and teams argue instead of learning.",
  },
  {
    title: "Governance mindset",
    body: "Do they think in failure modes, security boundaries, and ownership? AI features touch data access and trust — governance is part of the job.",
  },
];

const adoptionChecklist = [
  "Start with one workflow where AI clearly reduces user effort (not a generic chatbot)",
  "Write a short spec: user outcome, workflow, edge cases, and acceptance criteria",
  "Define data access rules and permission boundaries before prompting anything",
  "Create a small eval set of real-ish inputs and run it on every iteration",
  "Add fallbacks: citations, verification steps, and graceful failure UX",
  "Instrument cost and latency per request (tokens, time, retries)",
  "Ship behind a flag, watch real usage, then expand scope deliberately",
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
          <span className="text-[#171717]">AI Product Engineers</span>
        </nav>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="pin-label inline-block">AI &amp; Automation</span>
          <span className="inline-flex rounded-full border border-[#B46A3C]/30 bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A4A25]">
            New
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          AI Product Engineers: The New Era of Shipping with Judgment
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">
          By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor
        </p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI is changing how software gets built — but the biggest shift is not “faster code.” It is the emergence of a role that combines product judgment, engineering execution, and evaluation discipline into one loop.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Call it “AI product engineer,” “applied AI engineer,” or “AI product engineering.” The label varies, but the demand is clear: teams need builders who can turn model capability into a reliable product workflow — and own the outcome in production.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          In this new era, code is cheaper. Judgment becomes the bottleneck.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why This Role Exists</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Once LLMs became accessible through APIs, the work shifted away from building the model and toward building the product. That product work is not just “prompting.” It is workflow design, data access boundaries, evaluation, latency and cost management, and governance.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {whatChanges.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What an AI Product Engineer Actually Does</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          An AI product engineer is not a research scientist, and not a “demo engineer.” The job is shipping. That means building the full system around the model: context, tools, constraints, evaluation, and a UX that stays trustworthy under real inputs.
        </p>
        <div className="mt-5 space-y-2">
          {aiProductEngineerResponsibilities.map((check, index) => (
            <div
              key={check}
              className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {index + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{check}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Four Competencies That Matter Most</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This role is hard to hire for because it requires breadth and taste. Most teams can find “AI curiosity.” Fewer teams can find someone who ships reliably with governance.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {competenceAreas.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Trap: Shipping “AI Features” Without Product Engineering</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Many teams bolt on a chat UI and call it an AI feature. The result is predictable: vague value, inconsistent behavior, unclear data access boundaries, and support tickets when the system behaves unexpectedly.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The AI product engineer mindset flips the approach. Start with a user workflow where AI removes real effort. Constrain it. Measure it. Add guardrails. Then scale.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">A Founder Checklist to Start AI Product Engineering Safely</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If you want to adopt this discipline without chaos, use this checklist as your minimum operating standard.
        </p>
        <div className="mt-5 space-y-2">
          {adoptionChecklist.map((check, index) => (
            <div
              key={check}
              className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {index + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{check}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Final Recommendation</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The new era is not “AI replaces engineers.” The new era is that teams can build more than ever — and the winners are the ones who keep judgment, evaluation, and governance strong while shipping faster.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If you want AI features to become a durable product advantage, treat AI product engineering as a discipline: define workflows, constrain context, build evals, own cost and latency, and ship behind governance gates.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqSchema.mainEntity.map((item) => (
            <details key={item.name} className="group rounded-xl border border-[#E8E0D4] bg-white">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-semibold text-[#171717] marker:hidden">
                {item.name}
                <span className="ml-4 flex-shrink-0 text-[#2F6F68] transition-transform group-open:rotate-45">
                  +
                </span>
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
            <Link href="/insights/human-engineers-ai-engineers-new-sdlc" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI Agents Are Reshaping the SDLC (And Why Governance Matters)
            </Link>
            <Link href="/insights/ai-generated-code-engineering-governance" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI-Generated Code Is Not the Problem. Lack of Engineering Governance Is.
            </Link>
            <Link href="/insights/spec-driven-delivery-missing-layer-in-agile" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Spec-Driven Delivery: The Missing Layer in Agile Teams
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
            Building AI Features and Want to Avoid Rework?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to define the workflow, evaluation approach, and governance guardrails that help you ship AI features reliably — not just quickly.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}

