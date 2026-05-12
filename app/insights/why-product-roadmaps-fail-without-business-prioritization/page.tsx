import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "Why Product Roadmaps Fail Without Business Prioritization | Aditya Pranav",
  description:
    "Most roadmaps fail not because teams can't build — but because everything feels equally urgent. Learn how to connect your roadmap to business outcomes.",
  path: "/insights/why-product-roadmaps-fail-without-business-prioritization",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is business prioritization in a product roadmap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Business prioritization means evaluating and ranking roadmap items based on the specific business outcome they support — revenue, retention, activation, compliance, operational efficiency, or strategic learning. Instead of building what feels most requested or most exciting, the team builds what moves the business toward its most important current goal.",
      },
    },
    {
      "@type": "Question",
      name: "Why do product roadmaps fail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Product roadmaps fail most often because they become feature lists with dates rather than business decision tools. Without clear business prioritization, every stakeholder's request carries equal weight, priorities change weekly, and the team builds a lot without making meaningful progress toward any specific business outcome.",
      },
    },
    {
      "@type": "Question",
      name: "How do I decide which product features to build first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start from business outcomes, not features. Identify what business goal needs to move — activation, revenue, retention, risk reduction. Then ask which user problem, when solved, best supports that outcome. The feature comes last. Prioritization frameworks like RICE, MoSCoW, or value vs effort matrices can then help rank candidates against each other.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a feature list and a roadmap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A feature list describes what could be built. A roadmap describes what should be built next, why it matters, and what business outcome it supports. A feature list is an inventory. A roadmap is a prioritized sequence of decisions that connects product work to business direction.",
      },
    },
    {
      "@type": "Question",
      name: "Which prioritization framework should early-stage founders use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most early-stage founders, a simple value vs effort matrix or a lightweight scoring model (business value, user impact, effort, risk, timing) is more practical than complex frameworks. The goal is not perfect scoring — it is better conversations about tradeoffs and clearer reasons for why one item goes before another.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a startup update its product roadmap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A product roadmap should be reviewed at least monthly and updated whenever significant new information arrives — a new customer segment, a change in business priority, a technical constraint, or validated learning from real usage. The goal is not a static plan. The goal is a current, honest view of priorities that the team can actually execute against.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Fractional CTO help with product roadmap prioritization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A Fractional CTO helps founders translate business priorities into a technically feasible, phased roadmap. They review what is on the roadmap, identify items that carry hidden architecture or integration risk, challenge low-value features, and align engineering capacity with the items that actually move the business.",
      },
    },
    {
      "@type": "Question",
      name: "How do I balance business priorities and technical debt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Technical debt belongs on the roadmap as a business risk item — not a developer request. When unaddressed technical debt is slowing delivery, increasing bug rate, or creating security exposure, it has a clear business cost. Frame it that way. A Fractional CTO can help quantify that cost and make the case for addressing it alongside business feature work.",
      },
    },
  ],
};

const frameworks = [
  {
    name: "RICE",
    full: "Reach · Impact · Confidence · Effort",
    helps: "Quantifying the relative value of features across different user segments and confidence levels.",
    when: "When you have multiple features competing and want a consistent scoring baseline.",
    limit: "Confidence scoring can be subjective. Works best when you have real user data to draw from.",
  },
  {
    name: "MoSCoW",
    full: "Must-have · Should-have · Could-have · Won't-have",
    helps: "Cutting scope and communicating priorities clearly to stakeholders.",
    when: "Before a release or when a roadmap is getting overloaded. Forces hard decisions.",
    limit: "Teams often over-classify items as Must-have. Needs discipline to keep the Must-have list short.",
  },
  {
    name: "Value vs Effort",
    full: "Business value plotted against delivery effort",
    helps: "Quickly identifying high-value, low-effort items versus expensive, low-value ones.",
    when: "Early-stage roadmap reviews when you need a fast, visual prioritization pass.",
    limit: "Value and effort are both estimates. Useful for direction, not precision.",
  },
  {
    name: "Cost of Delay",
    full: "What does waiting to build this cost the business per week or month?",
    helps: "Forcing prioritization by quantifying the business impact of not building something.",
    when: "When you need to justify urgency to stakeholders or make sequencing decisions.",
    limit: "Requires clear thinking about business impact, which many early teams find hard to quantify.",
  },
  {
    name: "Strategic Fit Score",
    full: "How well does this item align with the current stage goal?",
    helps: "Filtering out features that are valid but not relevant to the current business phase.",
    when: "When the roadmap contains a mix of MVP, growth, and scale items that need separation.",
    limit: "Requires a clearly stated stage goal to score against. Without it, everything looks aligned.",
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
          <span className="text-[#171717]">Why Product Roadmaps Fail Without Business Prioritization</span>
        </nav>

        <span className="pin-label mb-4 inline-block">Product Engineering</span>
        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          Why Product Roadmaps Fail Without Business Prioritization
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor</p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        {/* Intro */}
        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          Most product roadmaps do not fail because teams cannot build. They fail because everything on the roadmap starts looking equally important.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Sales needs a feature for the next deal. Engineering wants to address a performance bottleneck. A founder has a strategic vision. Support is fielding the same complaint repeatedly. And somewhere in the middle of all of this, the team is trying to decide what to ship next week.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Without business prioritization, the roadmap becomes a negotiation table rather than a decision-making tool. The team builds constantly but often cannot explain clearly why one thing went before another — or whether it moved anything that actually mattered to the business.
        </p>

        {/* Section 1 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">A Roadmap Is Not a Feature List</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          One of the most common issues in early-stage product teams is treating the roadmap as a backlog with approximate dates. A feature list describes what could be built. A roadmap should describe what should be built next and why it matters more than everything else right now.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A useful roadmap answers four questions for every item on it:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "What are we building?",
            "Why does it matter now, not later?",
            "Which business outcome does it support?",
            "What are we choosing not to build in order to do this?",
          ].map((q) => (
            <li key={q} className="flex gap-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6F68]" />
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If the roadmap cannot answer those questions, it is not prioritized — it is just listed.
        </p>

        {/* Section 2 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why Roadmaps Fail Without Business Prioritization</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Every function inside a company sees the product differently. Sales sees feature gaps that are losing deals. Engineering sees reliability and maintainability risks. Support sees repeated user frustrations. Founders see strategic opportunities. Investors want traction metrics to move.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          All of these perspectives are legitimate. None of them is automatically the right basis for what gets built next.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          When there is no shared framework for evaluating business value, the roadmap defaults to the loudest voice or the most recent request. The team stays busy. But busy is not the same as aligned.
        </p>

        {/* Section 3 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Problem With "Everything Is Important"</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          When every feature is marked urgent, none of them actually is. The team loses the ability to make real tradeoffs, and the symptoms show up quickly:
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Sprint priorities shift mid-cycle",
            "Developers switch context constantly",
            "Releases get delayed or incomplete",
            "Product quality drops under pressure",
            "MVP scope keeps expanding",
            "Stakeholders lose confidence in delivery",
          ].map((s) => (
            <div key={s} className="flex items-center gap-3 rounded-lg border border-[#E8E0D4] bg-[#FAF7F0] px-4 py-3">
              <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#B46A3C]" />
              <p className="text-sm text-[#3a3a3a]">{s}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          These are not delivery problems. They are prioritization problems that manifest in delivery.
        </p>

        {/* Section 4 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Business Prioritization Means Choosing Outcomes First</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before choosing features, founders should be clear about the business outcome they are trying to move. Not broadly — specifically. "Improve the product" is not an outcome. "Reduce drop-off at user onboarding step three" is an outcome. "Reduce manual support tickets for refund processing" is an outcome.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Common business outcomes that should drive <Link href="/fractional-cpo" className="font-semibold text-[#2F6F68] hover:underline">product roadmap</Link> decisions:
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-3">
          {[
            "Increase activation",
            "Improve retention",
            "Reduce churn",
            "Increase revenue",
            "Reduce manual operations",
            "Improve onboarding",
            "Reduce support load",
            "Unlock enterprise sales",
            "Reduce compliance risk",
          ].map((o) => (
            <div key={o} className="rounded-lg border border-[#E8E0D4] bg-white px-3 py-2 text-center text-sm font-medium text-[#2F6F68]">
              {o}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The roadmap should serve these outcomes. Every item on it should be traceable back to at least one of them. If it cannot, the item may still be worth building eventually — but it should not be competing for time in the current sprint or release cycle.
        </p>

        {/* Section 5 — Business Priority Test */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Business Priority Test for Roadmap Items</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          For every item under consideration for the roadmap, run it through these questions before committing to it:
        </p>
        <div className="mt-6 space-y-2">
          {[
            "Which business goal does this support?",
            "Which customer problem does this solve?",
            "What happens if we do not build it now?",
            "Is this needed for revenue, retention, activation, compliance, or operational efficiency?",
            "Is this a must-have for the current stage or a later-stage enhancement?",
            "What is the effort and delivery risk?",
            "Is there a simpler version that achieves the same outcome?",
            "Can this be handled manually for now?",
            "Does this help us learn something important?",
            "Does this create technical complexity we are not ready to own?",
          ].map((q, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {i + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{q}</p>
            </div>
          ))}
        </div>

        {/* Section 6 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Why Founders and Engineering Teams See Roadmaps Differently</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Founders think in terms of business urgency — a sales opportunity, a market timing window, a competitive pressure, a customer promise. Engineering teams think in terms of feasibility — what depends on what, what creates debt, what will break under scale, what is safe to ship quickly.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Both views are valid. Roadmaps fail when these views are never reconciled — when business urgency overrides technical risk, or when engineering caution delays business-critical decisions indefinitely.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This is one of the more practical places where <Link href="/fractional-cto" className="font-semibold text-[#2F6F68] hover:underline">Fractional CTO services</Link> or <Link href="/advisory" className="font-semibold text-[#2F6F68] hover:underline">product and engineering advisory</Link> add direct value — translating business urgency into technically feasible, phased delivery without losing either perspective entirely.
        </p>

        {/* Section 7 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Common Roadmap Prioritization Mistakes</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          When I review roadmaps for early-stage teams, the same prioritisation anti-patterns show up repeatedly. Here is what they look like in practice:
        </p>
        <ul className="mt-5 space-y-3">
          {[
            ["Prioritizing the biggest client request without checking product strategy", "Client requests matter. But one client's workflow is not always the right basis for the product roadmap. Build for the segment, not the loudest account."],
            ["Building features before validating the core workflow", "If the foundational user journey is not yet confirmed to work, adding features on top of it is building on uncertain ground."],
            ["Treating nice-to-have features as launch blockers", "Polish, advanced filtering, export options, and secondary workflows are valuable — but they are rarely launch blockers. Confusing them with must-haves delays everything."],
            ["Ignoring technical debt until it slows delivery", "Technical debt belongs on the roadmap as a business risk item. When it starts affecting delivery speed or reliability, it has a measurable business cost."],
            ["Mixing MVP scope with long-term product vision", "Version-one scope and three-year product vision are different conversations. Keeping them separate is essential for maintaining roadmap clarity. On the topic of <Link href='/insights/how-to-know-if-your-mvp-scope-is-too-large' class='font-semibold text-[#2F6F68] hover:underline'>MVP scope that is too large</Link>, this overlap is one of the most common causes."],
            ["Changing priorities every week", "Constant reprioritization destroys engineering rhythm. Teams need enough stability to build well."],
            ["Prioritizing what is easy instead of what matters", "Completing easy items creates the illusion of progress. The measure is business outcome, not task count."],
            ["Prioritizing what is exciting instead of what moves the business", "Technically interesting features are worth exploring — but not at the cost of the items that affect revenue, retention, or risk."],
          ].map(([title, body]) => (
            <li key={title as string} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#B46A3C]" />
              <div>
                <p className="font-semibold text-[#171717]">{title}</p>
                <p className="mt-0.5 text-[16px] leading-relaxed text-[#5F5F5F]" dangerouslySetInnerHTML={{ __html: body as string }} />
              </div>
            </li>
          ))}
        </ul>

        {/* Section 8 — Frameworks */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Useful Prioritization Frameworks for Founders</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          I don't believe in following frameworks blindly, but they are incredibly useful for one specific reason: they force you to replace subjective arguments ("I think we need this") with structured criteria. Here are the ones I see work best for early teams:
        </p>
        <div className="mt-6 space-y-4">
          {frameworks.map((f) => (
            <div key={f.name} className="rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-[#171717]">{f.name}</p>
                  <p className="text-xs text-[#5F5F5F]">{f.full}</p>
                </div>
              </div>
              <div className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#2F6F68]">Helps with</p>
                  <p className="mt-1 leading-relaxed text-[#3a3a3a]">{f.helps}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#2F6F68]">Best when</p>
                  <p className="mt-1 leading-relaxed text-[#3a3a3a]">{f.when}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#B46A3C]">Limitation</p>
                  <p className="mt-1 leading-relaxed text-[#5F5F5F]">{f.limit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 9 — Aditya framework */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">A Simple Roadmap Prioritization Model for Early Teams</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          For founders who do not want to spend time learning a formal framework, a lightweight scoring model works well. Score each roadmap item from 1–5 on these dimensions:
        </p>
        <div className="mt-5 overflow-hidden rounded-xl border border-[#E8E0D4]">
          <table className="w-full text-sm">
            <thead className="bg-[#FAF7F0]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold text-[#2F6F68]">Score 1 (Low) → 5 (High)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E0D4] bg-white">
              {[
                ["Business value", "How directly does this move a current business goal?"],
                ["User impact", "How meaningfully does this improve the experience for the primary user?"],
                ["Revenue / retention impact", "Does this affect whether users pay, stay, or leave?"],
                ["Technical effort", "How complex is the build? (5 = very low effort, 1 = very high)"],
                ["Delivery risk", "Does this introduce dependencies or integration risk? (5 = low risk, 1 = high)"],
                ["Strategic timing", "Is now the right moment, or is this better in a later stage?"],
              ].map(([dim, desc]) => (
                <tr key={dim as string}>
                  <td className="px-4 py-3 font-medium text-[#171717]">{dim}</td>
                  <td className="px-4 py-3 text-[#5F5F5F]">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Once scored, categorize each item:
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-5">
          {[
            ["Build Now", "High value, feasible, timely", "#2F6F68"],
            ["Validate First", "High potential, uncertain demand", "#4a8b84"],
            ["Simplify", "Worth doing, but overscoped", "#6b9e98"],
            ["Defer", "Valid but not current priority", "#9ca3af"],
            ["Remove", "Low value or wrong timing", "#B46A3C"],
          ].map(([cat, desc, color]) => (
            <div key={cat as string} className="rounded-xl border border-[#E8E0D4] bg-white p-3 text-center">
              <p className="text-sm font-bold" style={{ color: color as string }}>{cat}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The goal is not a perfect score. The goal is a structured conversation about tradeoffs that the whole team can participate in — and a roadmap the team can defend when priorities get challenged.
        </p>

        {/* Section 10 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How a Fractional CTO or Product-Engineering Advisor Helps</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Roadmap prioritization problems are not always visible from inside the team. When everyone is close to the work, everything feels urgent. An outside perspective — specifically a senior one with both business and technical context — helps the team see the roadmap differently.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Working as a Fractional CTO and product-engineering advisor across fintech, SaaS, and founder-led product companies — building on Node.js, PostgreSQL, and AWS, navigating payment integrations, delivery governance, and architecture decisions — the pattern I see most often is not teams that cannot build. It is teams that are building the wrong things in the wrong order.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Convert priorities to a practical roadmap", "Translate business goals into sequenced, technically feasible delivery phases"],
            ["Separate MVP scope from future roadmap", "Prevent version-one overbuilding by drawing a clear line between now and later"],
            ["Review technical feasibility", "Identify which roadmap items carry hidden architecture or integration risk"],
            ["Challenge low-value features", "Push back on scope that does not move a business outcome"],
            ["Align engineering effort with outcomes", "Ensure the team is spending time on what actually matters to the business"],
            ["Create phased delivery plans", "Break large ambitions into executable stages without losing strategic direction"],
          ].map(([title, desc]) => (
            <div key={title as string} className="rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-4">
              <p className="text-sm font-semibold text-[#171717]">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Section 11 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Bottom Line</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If your roadmap keeps changing, every feature feels urgent, and the team cannot explain clearly why one item matters more than another — the problem is probably not how the roadmap is formatted. It is that business prioritization has not been applied consistently.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A good roadmap should be able to answer five questions for every item on it:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "What are we building?",
            "Why now and not later?",
            "What business outcome does it support?",
            "What can wait?",
            "What tradeoff are we making?",
          ].map((q) => (
            <li key={q} className="flex gap-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6F68]" />
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Teams that can answer those questions consistently build less, ship more deliberately, and make faster progress toward the outcomes that actually matter.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If you are working through <Link href="/fractional-cto" className="font-semibold text-[#2F6F68] hover:underline">Fractional CTO services</Link> or thinking about whether your roadmap is aligned with your business priorities, the place to start is not a new framework. It is a clear conversation about what your business needs to achieve in the next 60 to 90 days — and whether what is currently on the roadmap actually serves that.
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
            <Link href="/insights/how-to-know-if-your-mvp-scope-is-too-large" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → How to Know If Your MVP Scope Is Too Large
            </Link>
            <Link href="/insights/fractional-cto-vs-full-time-cto" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Fractional CTO vs Full-Time CTO: What Early Teams Should Know
            </Link>
            <Link href="/insights/when-should-a-founder-hire-a-fractional-cto" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → When Should a Founder Hire a Fractional CTO?
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
            Unsure Whether Your Roadmap Is Aligned With Your Business Priorities?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to review your product roadmap, MVP scope, technical feasibility, and delivery risks. No pressure — just a focused conversation about what should be built next and why.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>

      </article>
    </>
  );
}
