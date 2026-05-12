import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "What Founders Should Ask Before Choosing a Tech Stack | Aditya Pranav",
  description:
    "Choosing a tech stack is not a technical decision alone. These are the strategic questions every founder should ask before committing to a technology direction.",
  path: "/insights/what-founders-should-ask-before-choosing-a-tech-stack",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A tech stack is the combination of programming languages, frameworks, databases, infrastructure tools, and third-party services used to build and run a software product. Common startup tech stacks include combinations like React/Node.js/PostgreSQL/AWS or Next.js/Python/MongoDB/GCP.",
      },
    },
    {
      "@type": "Question",
      name: "How should a non-technical founder choose a tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-technical founders should focus on business-fit questions rather than technical ones: Does the stack support your hiring market? Can it handle your expected scale? Is it appropriate for your product domain? Is your development team confident in it? A Fractional CTO or technical advisor can evaluate the technical merits and translate them into business language.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a best tech stack for startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No single stack is best for all startups. The right stack depends on product type, team expertise, hiring market, expected scale, and domain requirements. A stack that is excellent for a real-time messaging product may be a poor fit for a data-heavy analytics platform. The best stack is the one your team can build reliably in, that the hiring market supports, and that fits your product's technical characteristics.",
      },
    },
    {
      "@type": "Question",
      name: "Should an MVP and a scaled product use the same tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often yes, but with deliberate design. The MVP stack should be chosen with scaling in mind — not necessarily the scale you need on day one, but the scale you expect in the next 12–18 months. Rebuilding from scratch because the MVP stack cannot scale is expensive. However, over-engineering for scale you may never reach is also wasteful.",
      },
    },
    {
      "@type": "Question",
      name: "What are the risks of choosing a technology just because it is new?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Newer technologies often have smaller hiring pools, less mature tooling, fewer community resources for debugging, and less known performance at scale. For startups, these are real risks — especially when the team is small and cannot absorb the overhead of learning and stabilising a cutting-edge stack.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Fractional CTO help with tech stack decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Fractional CTO reviews tech stack decisions in the context of your product domain, team capability, hiring market, scalability needs, and business stage. They help founders ask the right questions before committing to a direction — and identify where a proposed stack creates risk versus where it creates genuine advantage.",
      },
    },
    {
      "@type": "Question",
      name: "How important is it to use a popular tech stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Popularity matters for hiring. If your stack is widely adopted, finding engineers with existing experience is easier and onboarding is faster. Niche or novel stacks can be appropriate when they offer a genuine technical advantage for the product domain — but founders should account for the additional hiring and knowledge transfer cost.",
      },
    },
  ],
};

const questions = [
  {
    q: "What does the team already know well?",
    why: "The best stack is usually the one your team is most confident building in. A team with deep Node.js and PostgreSQL experience will build a more reliable product faster in that stack than in a more fashionable alternative they are learning mid-project.",
    signal: "If a vendor or agency is proposing a stack your team has no experience with, ask why — and what the hiring plan looks like when you want to extend the team.",
  },
  {
    q: "What does the local hiring market support?",
    why: "Your tech stack choice is also a hiring decision. If you plan to build an internal team, you will need to hire engineers with experience in your stack. Some technologies have deep talent pools; others are niche enough that hiring becomes genuinely difficult at scale.",
    signal: "Before committing to a backend language or framework, check how many job postings and candidates exist in your target hiring location.",
  },
  {
    q: "What are the scaling characteristics of this product?",
    why: "Different products have fundamentally different technical demands. A product with millions of concurrent real-time connections has different needs than a data-heavy reporting platform or a transactional fintech product. The stack should match the product's dominant technical characteristic, not just be a general-purpose choice.",
    signal: "Identify your product's primary technical challenge — concurrency, data volume, real-time, compute, or transactional complexity — and validate that the proposed stack handles it well.",
  },
  {
    q: "What are the third-party integration requirements?",
    why: "Most products depend on third-party services — payment gateways, communication APIs, CRMs, ERP systems, authentication providers. Some integrations have strong SDKs and community support for specific languages. Others require more custom work. Knowing your integration requirements before choosing the stack reduces mid-build surprises.",
    signal: "List your top five integrations and check SDK quality and community support for each in the proposed stack.",
  },
  {
    q: "What is the long-term ownership and maintenance cost?",
    why: "The cheapest stack to build on initially may not be the cheapest to maintain. Frameworks that require specialist knowledge, dependencies that become unmaintained, or infrastructure choices that are difficult to migrate create long-term costs that compound as the product grows.",
    signal: "Check how active the framework's community is, how frequently security updates are released, and whether the ecosystem is growing or declining.",
  },
  {
    q: "Does this stack support the regulatory or compliance requirements of the domain?",
    why: "Fintech, healthcare, education, and enterprise products often have regulatory requirements that affect database design, data residency, encryption, audit logging, and access control. Some stacks and infrastructure choices make compliance easier; others add friction.",
    signal: "If your product handles payments, personal data, health records, or enterprise customer data, get a view on compliance requirements before making infrastructure choices.",
  },
  {
    q: "Is the proposed stack appropriate for the MVP, the next 12 months, or the five-year vision?",
    why: "Tech stack decisions should be grounded in a specific time horizon. Building for the five-year product vision on day one usually means over-engineering the MVP. Building purely for speed without considering the next 12 months can create a rebuild that is expensive and disruptive.",
    signal: "Ask the team to scope the stack for the next 12–18 months explicitly, not for the eventual product.",
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
          <span className="text-[#171717]">What Founders Should Ask Before Choosing a Tech Stack</span>
        </nav>

        <span className="pin-label mb-4 inline-block">Architecture &amp; Scaling</span>
        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          What Founders Should Ask Before Choosing a Tech Stack
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor</p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          Choosing a tech stack gets treated as a purely technical decision — something for the engineering team to decide among themselves. But it is also a business decision, a hiring decision, and a maintenance decision. The stack you commit to affects how fast you can build, who you can hire, what integrations are easy or difficult, and how expensive the product is to own over time.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Founders do not need to be the ones making the technical choice. But they should be asking the right questions before the choice gets made — and understanding the business implications of the answer.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">There Is No Universally Best Tech Stack</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The best stack for a real-time gaming platform is different from the best stack for a payment processing system, which is different again from the best stack for a content platform or an enterprise data product.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          What makes a stack right for your product is not whether it is trending or whether a large company uses it. It is whether it fits your product's technical characteristics, your team's existing capability, your hiring market, your integration requirements, and your expected scale over the next 12 to 18 months.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A stack that is well-matched to all of these factors, chosen by a capable team, will almost always outperform a theoretically superior stack chosen without that context.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">7 Questions Founders Should Ask Before Committing</h2>

        <div className="mt-6 space-y-5">
          {questions.map((item, i) => (
            <div key={i} className="rounded-xl border border-[#E8E0D4] bg-white overflow-hidden">
              <div className="flex items-start gap-3 border-b border-[#E8E0D4] bg-[#FAF7F0] px-5 py-4">
                <span className="label-mono mt-0.5 text-[#2F6F68]">0{i + 1}</span>
                <h3 className="font-bold text-[#171717]">{item.q}</h3>
              </div>
              <div className="p-5">
                <p className="text-[16px] leading-relaxed text-[#3a3a3a]">{item.why}</p>
                <div className="mt-3 flex items-start gap-2 rounded-lg border border-[#2F6F68]/20 bg-[#EEF5F4] px-4 py-3">
                  <span className="mt-0.5 text-[#2F6F68] font-semibold text-sm">Signal:</span>
                  <p className="text-sm leading-relaxed text-[#2F6F68]">{item.signal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Common Tech Stack Mistakes Founders Make</h2>
        <ul className="mt-5 space-y-3">
          {[
            ["Choosing based on what the agency or developer prefers, not what fits the product", "Agencies build in stacks they know. That is reasonable — but it does not mean their preferred stack is the right one for your business context and hiring plan."],
            ["Picking a cutting-edge stack because it is exciting", "Novel technologies come with smaller hiring pools, less mature tooling, and fewer community resources. For an early-stage startup, the cost of learning and stabilising a new stack mid-product is significant."],
            ["Underestimating the cost of future migration", "Changing a core database or backend framework mid-product is expensive and disruptive. Stack decisions made early tend to persist longer than expected."],
            ["Ignoring what scaling the product actually requires", "Over-engineering for theoretical scale that never arrives is wasteful. Under-engineering for growth that arrives sooner than expected creates a painful rebuild. Both come from not being specific about the next 12–18 months."],
            ["Letting the MVP stack decision be made without business context", "The MVP stack should be chosen by someone who understands both the technical characteristics and the business trajectory — not just by the first developer hired or the agency who won the project."],
          ].map(([title, body]) => (
            <li key={title as string} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#B46A3C]" />
              <div>
                <p className="font-semibold text-[#171717]">{title}</p>
                <p className="mt-0.5 text-[16px] leading-relaxed text-[#5F5F5F]">{body}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How a Fractional CTO Approaches Stack Decisions</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A tech stack decision informed by product domain, team capability, hiring market, and business stage produces meaningfully better outcomes than one made on technical preference alone. Having worked across Node.js, PostgreSQL, and AWS in fintech, SaaS, and delivery-governance-intensive products, the stack choices that age best are almost always the ones that were deliberately matched to the product's dominant technical challenge — not the most technically interesting option available at the time.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          <Link href="/fractional-cto" className="font-semibold text-[#2F6F68] hover:underline">Fractional CTO services</Link> for stack review typically include evaluating the proposed stack against product requirements, assessing fit for the hiring market, identifying integration risks, and framing the decision in terms the founder can act on confidently. See also <Link href="/advisory" className="font-semibold text-[#2F6F68] hover:underline">product and engineering advisory</Link> for broader architecture guidance.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Bottom Line</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Tech stack decisions are easier to get right the first time than to correct after the product is built. The questions in this article are not about second-guessing the engineering team — they are about ensuring the choice is made with the full business context in view.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A well-matched stack, chosen deliberately, is one fewer constraint as the product grows. A poorly matched one — chosen for convenience or novelty — tends to show up in hiring difficulties, migration costs, and delivery friction at exactly the point when the team can least afford it.
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
            <Link href="/insights/how-to-review-an-agency-built-product-before-scaling" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → How to Review an Agency-Built Product Before Scaling
            </Link>
            <Link href="/insights/technical-debt-signals-founders-should-not-ignore" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Technical Debt Signals Founders Should Not Ignore
            </Link>
            <Link href="/insights/how-to-know-if-your-mvp-scope-is-too-large" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → How to Know If Your MVP Scope Is Too Large
            </Link>
            <Link href="/fractional-cto" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Fractional CTO Services
            </Link>
            <Link href="/insights" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → All Insights
            </Link>
          </div>
        </div>

        <ArticleAuthor />

        <div className="mt-12 rounded-2xl bg-[#1C2B2A] p-8 text-center">
          <p className="label-mono text-[#6fccc4]">Ready to Talk</p>
          <h3 className="mt-3 text-xl font-bold text-white lg:text-2xl">
            Want a Second Opinion on Your Tech Stack Before You Build?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to review your stack choice, architecture direction, integration requirements, and technical fit for your product stage.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>

      </article>
    </>
  );
}
