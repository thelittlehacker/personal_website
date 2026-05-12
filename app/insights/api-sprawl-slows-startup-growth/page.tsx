import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "Why API Sprawl Quietly Slows Startup Growth | Aditya Pranav",
  description:
    "API sprawl is not just a code problem. It consumes engineering time that should be spent on growth, product quality, and customer-facing delivery.",
  path: "/insights/api-sprawl-slows-startup-growth",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is API sprawl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "API sprawl happens when a product accumulates too many overlapping, inconsistent, or custom endpoints over time. Each endpoint may work individually, but the system becomes harder to maintain and evolve.",
      },
    },
    {
      "@type": "Question",
      name: "Why is API sprawl a problem for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "API sprawl slows delivery because engineers spend more time maintaining duplicate logic, inconsistent response formats, custom integrations, security patches, and edge cases instead of building growth-driving features.",
      },
    },
    {
      "@type": "Question",
      name: "How does API sprawl create technical debt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It creates technical debt by spreading similar business logic across many endpoints, making every data model change, permission update, performance fix, or security patch more expensive.",
      },
    },
    {
      "@type": "Question",
      name: "Should startups consolidate all API endpoints?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Consolidation should be deliberate. Some endpoints deserve separation for security, performance, compliance, or product clarity. The goal is to remove avoidable duplication, not force everything into one generic endpoint.",
      },
    },
    {
      "@type": "Question",
      name: "How can founders identify API maintenance debt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Founders can ask where engineering time goes each sprint, which endpoints break often, where custom partner logic exists, and how many places must change when the core data model changes.",
      },
    },
    {
      "@type": "Question",
      name: "How can a Fractional CTO help with API sprawl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CTO can review API structure, identify duplicated logic, prioritize consolidation, define integration standards, and help shift engineering time from maintenance to growth work.",
      },
    },
  ],
};

const auditQuestions = [
  "How many endpoints serve nearly the same data?",
  "How many response formats exist for similar objects?",
  "How many endpoints have custom authentication or permission logic?",
  "How many partner integrations depend on undocumented behavior?",
  "How many places must change when the core data model changes?",
  "Which endpoints consume the most maintenance time each sprint?",
  "Which endpoints are difficult for new developers to understand?",
  "Which APIs lack tests, documentation, or ownership?",
  "Which endpoints exist because of old sales promises or one-off customer requests?",
  "Which features are delayed because engineers are maintaining avoidable complexity?",
];

const sprawlSignals = [
  {
    title: "Partner-specific endpoints keep multiplying",
    body: "Each custom integration looks reasonable in isolation. Over time, the product accumulates slightly different payloads, auth rules, pagination behavior, and error handling for similar workflows.",
  },
  {
    title: "Core data changes require too many updates",
    body: "When one business concept changes, engineers must inspect many endpoints instead of one clean abstraction. This slows delivery and increases regression risk.",
  },
  {
    title: "Security patches become repetitive work",
    body: "If permission logic is duplicated across endpoints, every security update becomes a coordination problem. One missed endpoint can become a real product risk.",
  },
  {
    title: "Engineers spend sprint time on API maintenance",
    body: "The business sees slower roadmap delivery, but the root cause is often engineering time being consumed by avoidable integration and endpoint maintenance.",
  },
];

const consolidationPrinciples = [
  "Consolidate behavior that is truly the same, not behavior that only looks similar.",
  "Keep separate endpoints when security, compliance, performance, or product clarity requires it.",
  "Define consistent authentication, error handling, pagination, filtering, and response formats.",
  "Document partner-facing API behavior before migrating integrations.",
  "Migrate in batches instead of rewriting every integration at once.",
  "Measure engineering time recovered, not only the number of endpoints removed.",
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
          <span className="text-[#171717]">Why API Sprawl Quietly Slows Startup Growth</span>
        </nav>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="pin-label inline-block">Technical Debt &amp; Delivery Governance</span>
          <span className="inline-flex rounded-full border border-[#B46A3C]/30 bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A4A25]">
            New
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          Why API Sprawl Quietly Slows Startup Growth
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">
          By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor
        </p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          API sprawl rarely looks like an urgent business problem. The endpoints work. Integrations keep running. Customers get the data they asked for. On the surface, nothing looks broken.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          But inside the engineering team, time starts disappearing. Every data model change touches too many places. Every security update needs extra checking. Every new integration feels slower than it should. Features that could support sales, retention, or onboarding stay in the backlog because engineers are maintaining old API decisions.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This is why API sprawl is not just a backend architecture problem. For a startup, it is a growth allocation problem. It decides whether engineering time is spent maintaining yesterday's complexity or building tomorrow's leverage.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How API Sprawl Usually Happens</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          API sprawl does not usually begin with bad engineering. It often begins with good intentions: a new enterprise customer needs a slightly different export, an integration partner asks for a custom response format, sales promises a dedicated workflow, or an internal team needs a quick reporting endpoint.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          One custom endpoint is rarely a problem. The problem is repetition without a system. Over time, a product ends up with many endpoints that are mostly doing the same thing, but with small differences in filters, fields, auth rules, pagination, rate limits, or error handling.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Each endpoint may be defensible on the day it is created. The technical debt appears when the team has to maintain all of them together.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Real Cost Is Engineering Time</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Founders often hear technical debt described as "the codebase is messy" or "the system is hard to scale." Those statements may be true, but they are not specific enough.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The more useful question is: where is engineering time going?
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If engineers spend a meaningful part of each sprint maintaining duplicated API behavior, patching old integration quirks, updating similar endpoints, or debugging inconsistent partner flows, that time is not available for product work that could improve conversion, reduce churn, support enterprise sales, or unlock new revenue.
        </p>
        <div className="mt-6 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="font-semibold text-[#171717]">Founder lens</p>
          <p className="mt-2 text-[16px] leading-relaxed text-[#3a3a3a]">
            The cost of API sprawl is not only slower engineering. It is the roadmap work that does not happen because maintenance keeps winning.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Signals Your API Layer Is Becoming Technical Debt</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sprawlSignals.map((signal) => (
            <div key={signal.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{signal.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{signal.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why More Endpoints Do Not Always Mean More Flexibility</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Teams sometimes defend endpoint growth as flexibility. But too many custom endpoints can create the opposite effect. The product becomes harder to change because every new product decision needs to account for too many old API shapes.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Good API design gives flexibility through clear patterns: field selection, filtering, pagination, versioning, consistent auth, predictable errors, and well-documented contracts. Poor API growth gives flexibility through exceptions.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Exceptions are easy to add and expensive to own.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How to Audit API Sprawl</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          An API audit should not start with "how many endpoints do we have?" It should start with how much avoidable maintenance those endpoints create.
        </p>
        <div className="mt-5 space-y-2">
          {auditQuestions.map((question, index) => (
            <div key={question} className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {index + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{question}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Consolidation Should Be Deliberate, Not Cosmetic</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The goal is not to reduce endpoint count for the sake of a cleaner diagram. Some endpoints should remain separate because they protect security boundaries, improve performance, clarify product behavior, or serve genuinely different workflows.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The goal is to remove avoidable duplication and create API patterns the team can maintain confidently.
        </p>
        <ul className="mt-5 space-y-3">
          {consolidationPrinciples.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#B46A3C]" />
              <span className="text-[16px] leading-relaxed text-[#3a3a3a]">{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How a Fractional CTO Looks at This Problem</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          In an architecture review, the question is not only whether the API code is clean. The better question is whether the API layer helps or blocks product progress.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A Fractional CTO or Product-Engineering Advisor will look at endpoint duplication, partner-specific logic, auth consistency, data model coupling, documentation quality, test coverage, migration risk, and the amount of engineering time tied up in maintenance.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The outcome is not always a rewrite. Often the practical answer is a phased consolidation plan: standardize patterns, document API behavior, migrate high-risk integrations first, and free the team from maintenance work that is no longer creating business value.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Final Recommendation</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          API sprawl does not hurt growth because endpoints are inherently bad. It hurts growth because avoidable complexity consumes engineering attention.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If your team is slow, do not only ask whether engineers are working hard enough. Ask how much of their week is being spent maintaining old API decisions. The answer may explain why important product work keeps slipping.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Need CTO-level clarity on whether your API layer is helping or slowing growth? Book a strategy call to review your architecture, integration patterns, technical debt, and delivery risks.
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
            <Link href="/insights/technical-debt-signals-founders-should-not-ignore" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Technical Debt Signals Founders Should Not Ignore
            </Link>
            <Link href="/insights/how-to-review-an-agency-built-product-before-scaling" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; How to Review an Agency-Built Product Before Scaling
            </Link>
            <Link href="/insights/what-founders-should-ask-before-choosing-a-tech-stack" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; What Founders Should Ask Before Choosing a Tech Stack
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
            Is API Complexity Slowing Your Product Roadmap?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to review your API architecture, integration maintenance, technical debt, and delivery bottlenecks.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}
