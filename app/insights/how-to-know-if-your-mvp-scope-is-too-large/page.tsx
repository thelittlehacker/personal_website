import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "How to Know If Your MVP Scope Is Too Large | Aditya Pranav",
  description:
    "8 practical signs your MVP has grown beyond a learning tool — and a simple checklist to cut scope, reduce risk, and ship version one faster.",
  path: "/insights/how-to-know-if-your-mvp-scope-is-too-large",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many features should an MVP have?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no fixed number. An MVP should include exactly the features required to validate your riskiest business assumption through one primary user journey. If a feature does not directly support that validation, it is probably not version-one scope.",
      },
    },
    {
      "@type": "Question",
      name: "How long should an MVP take to build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A well-scoped MVP for most early-stage products should take between 6 and 16 weeks, depending on complexity, team size, and stack choices. If your timeline is consistently expanding beyond three months without a launch, scope is likely the root cause.",
      },
    },
    {
      "@type": "Question",
      name: "Should an MVP include an admin panel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A minimal admin panel is often necessary, but most MVP admin panels are significantly overbuilt. Workflows like user verification, refunds, content updates, and report generation can often be handled manually in version one. Build only what cannot be done manually without a serious operational risk.",
      },
    },
    {
      "@type": "Question",
      name: "Should an MVP include payment integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only if collecting payment is part of the core assumption being validated. If your MVP needs to prove that users will pay for the product, a payment integration is necessary. If it is validating whether users engage with the product at all, payment can often wait for version two.",
      },
    },
    {
      "@type": "Question",
      name: "How do I decide what goes into version one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start from your riskiest assumption. Define the one user journey that validates it. List only the features required for that journey to work end-to-end. Everything else — dashboards, integrations, edge cases, admin tools, secondary user types — should be evaluated against a simple question: does removing this prevent us from validating the core assumption?",
      },
    },
    {
      "@type": "Question",
      name: "Can a Fractional CTO help reduce MVP scope?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Fractional CTO helps founders separate what must be built properly in version one from what can be simplified, deferred, or handled manually. They review technical scope, architecture decisions, integration choices, and delivery timelines — and help the team build the right version one, not the most complete one.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between MVP scope and product roadmap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MVP scope defines what is built in version one to validate a specific assumption. The product roadmap defines what gets built after that — the sequence of features, improvements, and expansions based on real learning. A common mistake is treating the product roadmap as the MVP scope.",
      },
    },
    {
      "@type": "Question",
      name: "Is it okay to handle some MVP workflows manually?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and often it is the right decision. Many workflows that feel like they need automation — user onboarding, support, data correction, reporting — can be handled manually at early stage without affecting the user experience. This reduces build time significantly and lets you learn before you automate.",
      },
    },
  ],
};

const signs = [
  {
    n: "01",
    title: "You Are Trying to Serve Too Many User Types",
    body: "If your MVP has user flows for founders, admins, customers, vendors, internal teams, partners, and managers — all in version one — the scope has already grown beyond a learning tool.",
    detail: "For version one, pick the primary user. Build one journey deeply enough to validate whether that user actually wants what you are building. Secondary user types, roles, and permission systems belong in version two — after you have confirmed core demand.",
  },
  {
    n: "02",
    title: "Every Feature Feels Important",
    body: "When founders struggle to cut anything from the feature list, it usually means prioritisation has not happened yet — not that everything is truly essential.",
    detail: null,
    list: [
      "Must validate now — directly tests the core assumption",
      "Needed for first users — required for the journey to complete",
      "Can be manual for now — real but can be done without code",
      "Can wait for version two — useful but not launch-blocking",
      "Only useful at scale — irrelevant until you have the problem",
    ],
  },
  {
    n: "03",
    title: "You Are Building for Scale Before Validating Demand",
    body: "Dashboards, advanced analytics, automation, AI-assisted features, multi-tenant architecture, enterprise workflows, and admin controls all feel important. But if the core product has not been validated with real users, building for scale is building before you have learned what to scale.",
    detail: "Some technical foundations genuinely matter from day one — data structure, security basics, clean API design. But feature-level scalability tooling almost always belongs in a later version. The risk of over-engineering version one is not technical debt — it is delayed learning.",
  },
  {
    n: "04",
    title: "Your MVP Needs Too Many Integrations",
    body: "Integrations are valuable but expensive. Each one adds build time, testing complexity, dependency risk, and potential delays.",
    detail: "For MVP, integrate only what is required to validate the core user journey. Payment gateways, CRMs, ERPs, WhatsApp, email platforms, analytics APIs, AI services, and third-party authentication systems can all wait — unless the specific integration is the assumption being tested. Simulate or manually handle everything else in version one.",
  },
  {
    n: "05",
    title: "You Cannot Explain the MVP in One User Journey",
    body: "This is the clearest signal of scope creep. If explaining your MVP requires multiple flows, multiple dashboards, multiple user roles, approval paths, exception handling, and edge cases — the scope has grown beyond version one.",
    detail: "Try this test. Can you complete this sentence clearly and specifically?",
    quote: "When [specific user] wants to [specific goal], they can [core action] and receive [clear value].",
    detail2: "If you cannot, or if the answer requires several sentences and qualifications, the MVP is probably too broad.",
  },
  {
    n: "06",
    title: "The Timeline Keeps Expanding",
    body: "A consistently expanding timeline is almost always a symptom of hidden scope, not just technical complexity. Common causes include small feature additions that feel trivial but compound, undefined edge cases that surface mid-build, changing user journeys, design scope expansion, integration dependencies, and admin panel overbuild.",
    detail: "If your three-month MVP is now a six-month build, review the scope before extending the timeline. The problem is rarely execution speed.",
  },
  {
    n: "07",
    title: "The Admin Panel Is Bigger Than the Product",
    body: "Admin panels are consistently overbuilt in MVPs. Founders want full visibility and control from day one — but most admin workflows can be handled manually at early stage without meaningfully affecting the user experience.",
    detail: "Manual user verification, manual refunds, manual data corrections, manual report exports, manual content updates — these are all legitimate at MVP stage. Build only the admin controls that cannot be done manually without a serious operational risk.",
  },
  {
    n: "08",
    title: "You Are Solving Future Problems Too Early",
    body: "Planning for a million users before you have ten is a recognisable pattern. Questions like \"what happens when we need multi-region support\" or \"how do we handle enterprise billing\" are worth thinking about — but the MVP should first answer whether early users care about the product at all.",
    detail: "Build thoughtfully, not carelessly. But there is a difference between making sensible foundational choices and building the infrastructure of the company you intend to become before the first version has been validated.",
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

        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-[#5F5F5F]">
          <Link href="/" className="hover:text-[#2F6F68]">Home</Link>
          <span>/</span>
          <Link href="/insights" className="hover:text-[#2F6F68]">Insights</Link>
          <span>/</span>
          <span className="text-[#171717]">How to Know If Your MVP Scope Is Too Large</span>
        </nav>

        <p className="label-mono mb-4 text-[#2F6F68]">MVP Planning · Product Scope · Founder Guidance</p>
        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          How to Know If Your MVP Scope Is Too Large
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor</p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        {/* Intro */}
        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          Most MVPs do not become expensive because founders lack ideas. They become expensive because every useful idea gets treated as version-one scope.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The product grows quietly. A feature gets added because it feels essential. An integration gets included because it will definitely be needed. The admin panel expands because the team wants full control from day one. The timeline slips. The budget stretches. And by the time development is complete, the original purpose of the MVP — to learn something quickly with minimum investment — has been entirely replaced by the goal of building something complete.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          How do you know whether your MVP is still an MVP — or whether it has quietly become a full product build?
        </p>

        {/* Section 1 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What an MVP Is Actually Supposed to Do</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          An MVP is not a mini version of the final product. It is a learning tool.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Eric Ries, who coined the term in <em>The Lean Startup</em>, defines it as "the version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort." The emphasis is on learning — not on features, polish, or completeness.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Atlassian describes an MVP as the simplest version of a product that lets teams validate ideas and gather real feedback quickly. Y Combinator's consistent advice to founders is to launch earlier than feels comfortable, reach real users, and learn from actual behaviour rather than waiting for a polished product.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The purpose of an MVP is to reduce uncertainty before larger investment. Every feature in scope should serve that purpose. If it does not, it is product roadmap — not MVP.
        </p>

        {/* 8 Signs */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">8 Signs Your MVP Scope Has Grown Too Large</h2>

        <div className="mt-6 space-y-6">
          {signs.map((s) => (
            <div key={s.n} className="rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
              <div className="flex items-start gap-3">
                <span className="label-mono mt-0.5 text-[#2F6F68]">{s.n}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#171717]">{s.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-[#3a3a3a]">{s.body}</p>
                  {s.list && (
                    <ul className="mt-3 space-y-1.5">
                      {s.list.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#5F5F5F]">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6F68]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.detail && <p className="mt-3 text-[16px] leading-relaxed text-[#5F5F5F]">{s.detail}</p>}
                  {s.quote && (
                    <blockquote className="mt-3 rounded-lg border-l-4 border-[#2F6F68] bg-white pl-4 py-2 text-sm italic text-[#3a3a3a]">
                      {s.quote}
                    </blockquote>
                  )}
                  {s.detail2 && <p className="mt-3 text-[16px] leading-relaxed text-[#5F5F5F]">{s.detail2}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">A Simple MVP Scope Test</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before locking your version-one scope, run through these questions honestly. Every feature should be able to pass this filter.
        </p>
        <div className="mt-6 space-y-2">
          {[
            "What is the riskiest assumption we need to validate?",
            "Which user journey proves that assumption?",
            "Which features are required to complete that journey?",
            "What can be handled manually instead of being built?",
            "What can be safely delayed to version two?",
            "What can be replaced with a simpler workflow?",
            "What happens if this feature is removed?",
            "Does this feature help us learn faster?",
            "Does this feature reduce a launch blocker — or only improve polish?",
            "Can we launch without it and add it based on real feedback?",
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {i + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{q}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[16px] leading-relaxed text-[#5F5F5F]">
          If a feature cannot clearly answer questions 8, 9, or 10 in its favour, it is a strong candidate for deferral.
        </p>

        {/* Fractional CTO section */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How a Fractional CTO Helps Reduce MVP Scope</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Scope decisions are not just product decisions — they are technical decisions. Which features require proper architecture from day one? Which integrations introduce real risk? Which workflows can safely be manual? These questions sit at the intersection of product intent and technical reality, and they benefit from senior judgment.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A <Link href="/fractional-cto" className="font-semibold text-[#2F6F68] hover:underline">Fractional CTO</Link> helps founders separate what must be built properly in version one from what can be simplified, deferred, or handled manually. Working across <Link href="/fractional-cpo" className="font-semibold text-[#2F6F68] hover:underline">MVP planning</Link>, architecture guardrails, vendor review, and delivery governance, the role is not to say "build less" arbitrarily — it is to help the team make better decisions about what version one actually needs to accomplish.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["MVP technical scope review", "Separating essential build from premature optimisation"],
            ["Architecture guardrails", "Foundations that matter now without overbuilding"],
            ["Integration decisions", "What to integrate, what to simulate, what to defer"],
            ["Build vs manual decisions", "Identifying what does not need to be coded in version one"],
            ["Vendor and agency review", "Ensuring external teams are scoping appropriately"],
            ["Delivery risk identification", "Catching scope creep before it compounds into timeline risk"],
          ].map(([title, desc]) => (
            <div key={title as string} className="rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-4">
              <p className="text-sm font-semibold text-[#171717]">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Final */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Bottom Line</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If your MVP is taking too long, trying to satisfy too many users, requiring too many integrations, or becoming difficult to explain — the scope is probably too large.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The right MVP should be small enough to launch, useful enough to validate, and structured enough to evolve. Its job is not to impress — it is to learn. Every week spent building features that were not required to validate the core assumption is a week of delayed learning.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Scope the MVP around one assumption, one user journey, and the minimum feature set required to test it. Build the rest after you have learned something real.
        </p>

        {/* FAQ */}
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

        {/* Related */}
        <div className="mt-10 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="text-sm font-semibold text-[#171717]">Related Reading</p>
          <div className="mt-3 space-y-2 text-sm">
            <Link href="/insights/when-should-a-founder-hire-a-fractional-cto" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → When Should a Founder Hire a Fractional CTO?
            </Link>
            <Link href="/insights/fractional-cto-vs-full-time-cto" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Fractional CTO vs Full-Time CTO: What Early Teams Should Know
            </Link>
            <Link href="/fractional-cpo" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → MVP Planning &amp; Fractional CPO Support
            </Link>
            <Link href="/advisory" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Product &amp; Engineering Advisory
            </Link>
            <Link href="/insights" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → All Insights
            </Link>
          </div>
        </div>

        <ArticleAuthor />

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-[#1C2B2A] p-8 text-center">
          <p className="label-mono text-[#6fccc4]">Ready to Talk</p>
          <h3 className="mt-3 text-xl font-bold text-white lg:text-2xl">
            Unsure Whether Your MVP Scope Is Too Large?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to review your MVP scope, technical roadmap, and version-one build plan. No pressure — just a focused conversation about what version one actually needs to accomplish.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>

      </article>
    </>
  );
}
