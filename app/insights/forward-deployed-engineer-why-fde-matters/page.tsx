import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "Forward Deployed Engineers (FDE): The Role That Turns Pilots Into Product | Aditya Pranav",
  description:
    "Forward Deployed Engineers embed with customers to ship production outcomes. Here’s what FDEs do, how they differ from Solutions Engineering, and when founders should hire them.",
  path: "/insights/forward-deployed-engineer-why-fde-matters",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Forward Deployed Engineer (FDE)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Forward Deployed Engineer (FDE) is a software engineer who embeds directly with a customer to build, integrate, and deploy production solutions in the customer’s environment. They are measured on outcomes in production, not demos.",
      },
    },
    {
      "@type": "Question",
      name: "How is an FDE different from a Solutions Engineer or Sales Engineer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sales Engineers focus on pre-sales and demos. Solutions Engineers focus on solution design and implementation planning. FDEs write and ship production-grade code in the customer environment post-sale and stay involved until the system delivers value reliably.",
      },
    },
    {
      "@type": "Question",
      name: "Why did the FDE role become popular again in the AI era?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI features fail in production when data is messy, workflows are complex, and governance is weak. FDEs close the gap between a model demo and a reliable deployment by building integrations, evaluation, and guardrails inside the customer’s real constraints.",
      },
    },
    {
      "@type": "Question",
      name: "When should a startup hire its first FDE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire an FDE when deals close but implementations stall, when enterprise customers require custom integrations to reach time-to-value, or when your product needs customer-embedded engineering to generalize deployments into a repeatable platform.",
      },
    },
    {
      "@type": "Question",
      name: "Do FDEs create a services business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They can if managed incorrectly. FDEs create product leverage only when field work is treated as R&D: patterns found in deployments are turned into reusable product capabilities, not bespoke one-off custom work that never returns to the core platform.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key skills of a great FDE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strong software engineering, systems integration, SQL/data fluency, cloud fundamentals, production debugging, and customer judgment. Great FDEs can translate messy business workflows into shippable, governed systems while communicating clearly with stakeholders.",
      },
    },
    {
      "@type": "Question",
      name: "How should founders measure FDE success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Measure time-to-value, deployment stability, adoption in real workflows, and productization rate (how many customer-specific learnings become reusable product features). Avoid measuring FDEs on purely revenue metrics or ticket volume.",
      },
    },
    {
      "@type": "Question",
      name: "What role does a Fractional CTO play with an FDE function?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CTO helps set boundaries so FDEs create product leverage rather than custom services: defining architecture guardrails, governance gates, review standards, and a productization loop that feeds platform improvements back into the roadmap.",
      },
    },
  ],
};

const roleSummary = [
  {
    title: "Where they work",
    body: "Inside the customer’s environment — their data, workflows, constraints, and stakeholders.",
  },
  {
    title: "What they ship",
    body: "Production outcomes: integrations, workflows, reliability guardrails, and deployments that operate under real conditions.",
  },
  {
    title: "What they discover",
    body: "The hidden constraints that never show up in sales calls: messy schemas, permissions, processes, compliance, and edge-case behavior.",
  },
  {
    title: "What creates leverage",
    body: "Turning repeated customer patterns into reusable platform features so the next deployment is faster and more productized.",
  },
];

const fdeVsOther = [
  {
    label: "Primary phase",
    salesEngineer: "Pre-sale",
    solutionsEngineer: "Late pre-sale → early implementation",
    fde: "Post-sale → stable production value",
  },
  {
    label: "Core output",
    salesEngineer: "Demos, POCs, technical win",
    solutionsEngineer: "Blueprints, integration plans, enablement",
    fde: "Production code + deployment outcomes",
  },
  {
    label: "Success metric",
    salesEngineer: "Conversion and revenue influence",
    solutionsEngineer: "Implementation success and time-to-value",
    fde: "Adoption + reliability + real outcomes in production",
  },
  {
    label: "Writes production code?",
    salesEngineer: "Rarely",
    solutionsEngineer: "Sometimes (limited)",
    fde: "Yes (core expectation)",
  },
];

const founderSignals = [
  "Your sales cycle is winning but onboarding/implementation is the bottleneck",
  "Enterprise customers need deep integrations to see value (SSO, SCIM, data pipelines, internal tools)",
  "The same deployment issues repeat across accounts (suggesting product gaps)",
  "Your AI pilots look great in demos but break under real data and messy workflows",
  "You are losing expansions/renewals because “it never fully worked in production”",
];

const antiConsultingGuardrails = [
  {
    title: "Define the productization loop",
    body: "Every deployment should produce reusable capabilities: connectors, templates, workflows, permission models, eval harnesses, and runbooks.",
  },
  {
    title: "Set boundaries on bespoke work",
    body: "FDEs can build custom glue, but anything repeatable should become platform work. Otherwise you become a services company with a software logo.",
  },
  {
    title: "Measure reusable outcomes",
    body: "Track what gets upstreamed into the product: new features, reusable integrations, standardized deployment patterns, and reduced time-to-value in future accounts.",
  },
  {
    title: "Keep engineering quality high",
    body: "Field code must still meet standards: reviews, tests, security gates, dependency discipline. “It worked on the customer’s laptop” is not a release criterion.",
  },
  {
    title: "Assign ownership like a product team",
    body: "FDE work touches core workflows. Treat it like product engineering with ownership, not like ticketed support.",
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
          <span className="text-[#171717]">Forward Deployed Engineers</span>
        </nav>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="pin-label inline-block">Product Engineering</span>
          <span className="inline-flex rounded-full border border-[#B46A3C]/30 bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A4A25]">
            New
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          Forward Deployed Engineers (FDE): The Role That Turns Pilots Into Product
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">
          By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor
        </p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          If you build for enterprises, you eventually learn an uncomfortable truth: the product that works in your demo environment is not the product your customer is trying to run. Their systems are messy. Their workflows are institutional. Their data is inconsistent. Their permissions are complex. Their success criteria are political as much as technical.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A Forward Deployed Engineer (FDE) exists to close that gap. This is not support. This is not a consultant with a slide deck. FDEs are engineers who embed with customers, ship production outcomes in the customer’s reality, and feed what they learn back into the product so the next deployment is faster and more repeatable.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What an FDE Actually Does</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The simplest definition: an FDE is a product-grade engineer deployed forward — into the customer environment — to make the product work where it matters: in production.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {roleSummary.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">FDE vs Solutions Engineer vs Sales Engineer</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Titles blur in startups. Use lifecycle timing and ownership to tell these roles apart: who sells, who designs, and who is accountable for production outcomes.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#E8E0D4]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E8E0D4] bg-[#FAF7F0]">
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold text-[#B46A3C]">Sales Engineer</th>
                <th className="px-4 py-3 text-left font-semibold text-[#2F6F68]">Solutions Engineer</th>
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">FDE</th>
              </tr>
            </thead>
            <tbody>
              {fdeVsOther.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-[#E8E0D4] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F0]/40"}`}
                >
                  <td className="px-4 py-3 font-semibold text-[#171717]">{row.label}</td>
                  <td className="px-4 py-3 text-[#3a3a3a]">{row.salesEngineer}</td>
                  <td className="px-4 py-3 text-[#3a3a3a]">{row.solutionsEngineer}</td>
                  <td className="px-4 py-3 text-[#5F5F5F]">{row.fde}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why FDEs Matter More in the AI Era</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI made prototypes cheap. It did not make deployments easy. The enterprise “AI pilot” problem is rarely model capability. It is integration and governance: data access, permissions, evaluation, monitoring, and workflow fit under real constraints.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          That is exactly the environment where FDEs thrive. They see the real data, the real failure modes, and the real operational constraints. They build the missing glue and create a repeatable pattern your product team can turn into a platform.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Signals You Need Your First FDE</h2>
        <div className="mt-5 space-y-2">
          {founderSignals.map((check, index) => (
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

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Founder Trap: Accidentally Building a Services Company</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          FDEs create leverage only when their work becomes reusable. If every customer gets a bespoke mini-product, you will grow revenue but not product velocity. You will have a consulting business with a SaaS wrapper.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          To prevent that, you need a clear operating model: what is allowed to be bespoke, what must be upstreamed into the product, and what standards field code must meet.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {antiConsultingGuardrails.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Final Recommendation</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If you sell into complex environments, you cannot product-manage from behind a roadmap alone. You need an engineering function that learns from real deployments, ships production outcomes, and turns repeated pain into platform capabilities.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          That is the point of the Forward Deployed Engineer. Hire it deliberately, govern it tightly, and measure it on product leverage — not just custom delivery.
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
            <Link href="/insights/ai-product-engineer-new-era" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI Product Engineers: The New Era of Shipping with Judgment
            </Link>
            <Link href="/insights/spec-driven-delivery-missing-layer-in-agile" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Spec-Driven Delivery: The Missing Layer in Agile Teams
            </Link>
            <Link href="/insights/human-engineers-ai-engineers-new-sdlc" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI Agents Are Reshaping the SDLC (And Why Governance Matters)
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
            Need to Turn Enterprise Pilots Into Production?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to set up the productization loop, governance gates, and delivery structure that helps enterprise deployments become reusable product leverage.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}

