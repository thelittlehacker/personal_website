import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "How to Review an Agency-Built Product Before Scaling | Aditya Pranav",
  description:
    "Before scaling your agency-built product, review ownership, architecture, code quality, security, and release process. A practical founder checklist.",
  path: "/insights/how-to-review-an-agency-built-product-before-scaling",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it risky to scale a product built by an agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. Many strong products start with agency builds. The risk comes from scaling without understanding the architecture, ownership structure, maintainability, security posture, and delivery assumptions behind what was built. A review before scaling gives founders the visibility they need to make confident decisions.",
      },
    },
    {
      "@type": "Question",
      name: "Should I rebuild an agency-built product before scaling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. A full rebuild is often not required and can be costly and time-consuming. The goal of a technical review is to understand what is safe, what carries risk, and what must be addressed before scaling. Many founders find that targeted improvements — architecture fixes, security hardening, documentation — are enough to scale safely.",
      },
    },
    {
      "@type": "Question",
      name: "What should I check before hiring an internal team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Before hiring internally, confirm ownership of code repositories, infrastructure, and all third-party accounts. Review architecture documentation, deployment processes, and known technical debt. A new team inheriting an undocumented system without ownership clarity will spend weeks or months trying to understand rather than build.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if the code quality is good?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As a non-technical founder, focus on signal questions: Can another team read and understand the code? Is the folder structure logical? Are there tests? Is error handling present? Is there documentation? A Fractional CTO or senior technical reviewer can assess code quality directly and translate findings into business-relevant risk language.",
      },
    },
    {
      "@type": "Question",
      name: "What access should I have before scaling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You should own and control: the source code repository, cloud infrastructure accounts, database access, domain and DNS, email and analytics accounts, payment gateway accounts, CI/CD pipelines, and all third-party service credentials. If any of these sit under the agency's accounts, resolving ownership before scaling is essential.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Fractional CTO review an agency-built product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This is one of the highest-value uses of Fractional CTO engagement. A Fractional CTO reviews the architecture, code quality, security posture, scalability assumptions, release process, and ownership structure — and delivers founder-side clarity in the form of a risk register and a prioritized action plan.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a technical review usually take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A focused technical review of an agency-built MVP typically takes one to three weeks depending on product complexity, documentation availability, and access. The output is a risk register, architecture assessment, and prioritized recommendations — not an exhaustive line-by-line code audit.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a technical audit and a product review?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A technical audit focuses on code, architecture, security, and infrastructure quality. A product review also considers whether the build aligns with the business model, user workflows, roadmap direction, and operational needs. A thorough pre-scaling review should cover both — technical health and product-business alignment.",
      },
    },
  ],
};

type ChecklistSection = {
  title: string;
  icon: string;
  items: string[];
  note?: string;
};

const checklistSections: ChecklistSection[] = [
  {
    title: "Ownership & Access",
    icon: "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
    items: [
      "You own the source code repository (not the agency)",
      "You control all cloud infrastructure accounts",
      "You have direct database access",
      "You own domain, DNS, and email accounts",
      "You own analytics, payment, and third-party service accounts",
      "You have admin access to CI/CD pipelines",
      "Secrets and credentials are stored securely and not with the agency",
      "Production and staging environments are separated",
      "No hard dependency on the agency's internal tools or accounts",
    ],
  },
  {
    title: "Architecture",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    items: [
      "Frontend, backend, database, and integrations are clearly separated",
      "The system is modular rather than tightly coupled",
      "Backend is structured around business domains",
      "APIs are documented",
      "Background jobs, queues, and notifications are handled cleanly",
      "Database schema is understandable",
      "Clear distinction between MVP shortcuts and long-term foundations",
      "No critical business logic buried in unreadable or undocumented layers",
    ],
    note: "A product can look polished on the frontend while the backend is difficult to extend. Architecture is what determines whether future development gets faster or slower.",
  },
  {
    title: "Code Quality & Maintainability",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    items: [
      "Folder structure is logical and consistent",
      "Naming is consistent across files, functions, and variables",
      "Components and services are reusable where appropriate",
      "Error handling is present and intentional",
      "Logging is in place for critical operations",
      "Test coverage exists for key flows",
      "Dependencies are up to date and documented",
      "No significant dead or commented-out code",
      "No hardcoded values in logic that should be configurable",
      "Environment configuration is handled correctly",
    ],
    note: "The question is not whether the code is perfect. The question is whether another team could understand it, maintain it, and build safely on top of it.",
  },
  {
    title: "Security & Data Protection",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    items: [
      "Authentication and authorisation are correctly implemented",
      "Role-based access control is in place where needed",
      "APIs are protected appropriately",
      "User input is validated and sanitised",
      "Passwords and tokens are handled securely",
      "Secrets are not exposed in code repositories or logs",
      "Sensitive data is stored appropriately",
      "Audit logs are in place where compliance or business risk requires them",
      "Common web security risks (injection, XSS, broken auth) have been considered",
      "Payment and data compliance requirements are identified",
    ],
    note: "Security should be designed into the product early. Retrofitting it after the product becomes business-critical is significantly more expensive and disruptive.",
  },
  {
    title: "Scalability & Performance",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    items: [
      "Database queries are performant and indexed appropriately",
      "Caching is used where applicable",
      "API response times are acceptable under normal load",
      "File uploads and storage are handled efficiently",
      "Background processing and queues are in place for heavy operations",
      "Pagination is implemented for large data sets",
      "Rate limiting is in place for public APIs",
      "Monitoring and alerting are configured",
      "Cloud infrastructure costs are visible and understandable",
    ],
    note: "Scaling does not always mean millions of users. It can mean more concurrent sessions, more database records, more integrations, or more admin operations. The product should not collapse under normal business growth.",
  },
  {
    title: "Testing, QA & Release Process",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    items: [
      "A staging environment exists separate from production",
      "Automated tests exist for critical user flows",
      "Manual QA process is documented",
      "Releases are tracked with version history",
      "Rollback is possible if a release causes issues",
      "Bugs are tracked in a structured system",
      "Critical flows are tested before each deployment",
      "Production deployment does not depend solely on one person",
      "Release notes or changelogs are maintained",
    ],
  },
  {
    title: "Documentation & Knowledge Transfer",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    items: [
      "Architecture is documented at a high level",
      "APIs are documented for internal and external consumers",
      "Database schema is documented",
      "Local setup and deployment instructions exist",
      "Third-party integration notes are captured",
      "Known technical debt is listed",
      "Pending risks and open decisions are documented",
      "Roadmap assumptions are clearly stated",
    ],
    note: "If the agency remains the only team that fully understands the system, your dependency on them remains high — regardless of whether you own the code. Documentation is what makes knowledge transferable.",
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
          <span className="text-[#171717]">How to Review an Agency-Built Product Before Scaling</span>
        </nav>

        <p className="label-mono mb-4 text-[#2F6F68]">Architecture Review · Vendor Oversight · Founder Guidance</p>
        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          How to Review an Agency-Built Product Before Scaling
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor</p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        {/* Intro */}
        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          Many founders reach a point where the product works, early users are engaged, and the next question becomes: can we safely build more on top of what the agency delivered?
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          It is a reasonable question to have. Agencies help founders move fast. They can deliver functional MVPs within weeks, remove the need for full-time hiring early on, and handle technical execution while founders focus on product and market direction. None of that is inherently problematic.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The challenge is not that an agency built the product. The challenge is that founders often lack the technical visibility to know what they actually have — and whether scaling on top of it is safe, slow, or risky.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before scaling, founders need clarity — not blame, not panic, and not a full rebuild by default.
        </p>

        {/* Section 1 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">An Agency-Built Product Is Not a Problem by Itself</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The concern is not where the product came from. The concern is whether the technical decisions made during the build — under time pressure, scope constraints, and commercial incentives — are well understood by the founders who now own the product and plan to scale it.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Agencies are incentivised to deliver within scope and timeline. That is appropriate. But it means architecture decisions, security patterns, testing depth, and documentation quality can vary significantly depending on the agency, the brief, and the delivery conditions.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A review before scaling gives founders the visibility to make an informed decision about what to build next, what to fix first, and where the real risks are.
        </p>

        {/* Section 2 */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">When You Should Review Before Scaling</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A pre-scaling technical review is particularly valuable at any of these inflection points:
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {[
            "Adding significantly more users",
            "Building major new features on the existing codebase",
            "Raising investment or preparing for due diligence",
            "Hiring an internal engineering team",
            "Transitioning from MVP to full product",
            "Selling to enterprise customers",
            "Adding payment processing or sensitive data handling",
            "Building AI or automation features",
            "Migrating infrastructure or changing cloud providers",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-[#E8E0D4] bg-[#FAF7F0] px-4 py-3">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6F68]" />
              <p className="text-sm text-[#3a3a3a]">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A product that handles early users well may still have hidden vulnerabilities when usage, data volume, integrations, or business dependency increases. The time to find these is before the scale, not during it.
        </p>

        {/* Checklists */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Pre-Scaling Review Checklist</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A thorough review covers seven dimensions. Work through each before committing to significant new investment or development on top of the agency build.
        </p>

        <div className="mt-8 space-y-8">
          {checklistSections.map((section, si) => (
            <div key={section.title} className="rounded-xl border border-[#E8E0D4] bg-white overflow-hidden">
              <div className="flex items-center gap-3 border-b border-[#E8E0D4] bg-[#FAF7F0] px-5 py-4">
                <span className="label-mono text-[#2F6F68]">0{si + 1}</span>
                <h3 className="font-bold text-[#171717]">{section.title}</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border border-[#2F6F68]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2F6F68]" />
                      </span>
                      <span className="text-sm leading-relaxed text-[#3a3a3a]">{item}</span>
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p className="mt-4 rounded-lg bg-[#FAF7F0] px-4 py-3 text-sm italic leading-relaxed text-[#5F5F5F]">
                    {section.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Product alignment */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Review Product and Business Alignment</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A technical review should not happen in isolation from the product strategy. Before scaling, ask whether the existing build supports the next phase of the business:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Does the current build support the next 6–12 months of product direction?",
            "Are we building on the right foundation for the next phase?",
            "Are there features that should be simplified before more is added on top?",
            "Are workflows aligned with actual user behaviour or with assumptions?",
            "Are admin tools appropriately scoped — not overbuilt, not missing critical controls?",
            "Are manual workarounds acceptable for now, or do they create operational risk at scale?",
            "Does the product support the business model at the scale you are planning for?",
          ].map((q) => (
            <li key={q} className="flex gap-3 text-[17px] leading-relaxed text-[#3a3a3a]">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2F6F68]" />
              {q}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If the product cannot answer most of these questions clearly, the gap is not just technical — it is strategic. That is something worth understanding before allocating the next development budget.
        </p>

        {/* Risk register */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Create a Risk Register Before Scaling</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          When I conduct these reviews, the output is never a list of complaints about the agency. It is an actionable risk register that helps you decide what to fix now, what to fix later, and what to accept.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-[#E8E0D4]">
          <table className="w-full text-sm">
            <thead className="bg-[#FAF7F0]">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">Risk Level</th>
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">Definition</th>
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E0D4] bg-white">
              {[
                ["Critical", "Blocks safe scaling or creates immediate business/security risk", "Fix before scaling"],
                ["High", "Will create significant problems under normal growth", "Fix before major new development"],
                ["Medium", "Creates friction or technical debt at scale", "Plan into the roadmap"],
                ["Low", "Minor quality or consistency issues", "Monitor and address opportunistically"],
              ].map(([level, def, action]) => (
                <tr key={level as string}>
                  <td className="px-4 py-3 font-semibold text-[#2F6F68]">{level}</td>
                  <td className="px-4 py-3 text-[#3a3a3a]">{def}</td>
                  <td className="px-4 py-3 text-[#5F5F5F]">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          For each identified risk, capture the issue, business impact, probability of it becoming a problem, recommended action, owner, and target timeline. This turns a technical review into a decision-making document the founder can actually act on.
        </p>

        {/* Fractional CTO section */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How a Fractional CTO Helps Review an Agency-Built Product</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          I don't expect non-technical founders to conduct this review themselves. The value isn't in reading the code anyway — it's in interpreting what that code means for your business risk, future development cost, and hiring plans.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Having worked across fintech, SaaS, and founder-led product companies — reviewing backends built on Node.js, PostgreSQL, and AWS, assessing payment integrations, vendor builds, and delivery governance — the patterns I encounter most often are not catastrophic failures. They are accumulated small decisions that become expensive constraints when the product starts to grow.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          <Link href="/fractional-cto" className="font-semibold text-[#2F6F68] hover:underline">Fractional CTO services</Link> for an agency-built product review typically cover:
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Architecture and code quality review", "Assessing what was built and what the implications are for future development"],
            ["Ownership and access audit", "Confirming you control everything you need to control before the agency relationship ends"],
            ["Security and scalability risk identification", "Finding the gaps that will matter at scale before they become live problems"],
            ["Vendor dependency reduction", "Identifying where the product relies too heavily on agency knowledge or accounts"],
            ["Internal hiring preparation", "Making the codebase and documentation ready for a new engineering team to inherit"],
            ["Scale-readiness roadmap", "Producing a prioritised list of what to fix, what to build, and what to defer"],
          ].map(([title, desc]) => (
            <div key={title as string} className="rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-4">
              <p className="text-sm font-semibold text-[#171717]">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-[#5F5F5F]">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The role is founder-side clarity, not agency criticism. The goal is to understand what you have, make informed decisions about what to do next, and scale with confidence rather than assumption.
        </p>

        {/* Final */}
        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Bottom Line</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before scaling an agency-built product, review ownership, architecture, code quality, security, scalability, release process, documentation, and product-business alignment. The goal is not to find fault. The goal is to know what is safe, what carries risk, and what must be addressed before the product becomes harder and more expensive to change.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The cost of a thorough review before scaling is a fraction of the cost of discovering architectural or security problems at scale — when users, investors, or enterprise customers are already depending on the product.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          If you are considering this review alongside broader product direction, you may also find it useful to read about <Link href="/insights/why-product-roadmaps-fail-without-business-prioritization" className="font-semibold text-[#2F6F68] hover:underline">why product roadmaps fail without business prioritization</Link> and whether your <Link href="/insights/how-to-know-if-your-mvp-scope-is-too-large" className="font-semibold text-[#2F6F68] hover:underline">MVP scope is already too large</Link> before adding more on top of the current build.
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
            <Link href="/insights/why-product-roadmaps-fail-without-business-prioritization" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Why Product Roadmaps Fail Without Business Prioritization
            </Link>
            <Link href="/insights/how-to-know-if-your-mvp-scope-is-too-large" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → How to Know If Your MVP Scope Is Too Large
            </Link>
            <Link href="/insights/fractional-cto-vs-full-time-cto" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Fractional CTO vs Full-Time CTO: What Early Teams Should Know
            </Link>
            <Link href="/advisory" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              → Product &amp; Engineering Advisory
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

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-[#1C2B2A] p-8 text-center">
          <p className="label-mono text-[#6fccc4]">Ready to Talk</p>
          <h3 className="mt-3 text-xl font-bold text-white lg:text-2xl">
            Unsure Whether Your Agency-Built Product Is Ready to Scale?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to review your architecture, code quality, delivery risks, vendor dependency, and scale-readiness roadmap. No pressure — just a focused conversation about what you have and what it needs.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>

      </article>
    </>
  );
}
