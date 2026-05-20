import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import CTAButton from "@/components/ui/CTAButton";
import ArticleAuthor from "@/components/sections/ArticleAuthor";

export const metadata: Metadata = createPageMetadata({
  title: "AI Agents Are Reshaping the SDLC (And Why Governance Matters) | Aditya Pranav",
  description:
    "The software development lifecycle is being restructured by AI coding agents. Here is what changes, what humans must own, and how engineering teams should adapt.",
  path: "/insights/human-engineers-ai-engineers-new-sdlc",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is the SDLC changing because of AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is shifting the SDLC by automating implementation work — code generation, test writing, documentation, refactoring — while elevating the importance of human judgment in architecture, product decisions, review, and governance.",
      },
    },
    {
      "@type": "Question",
      name: "What should human engineers own in an AI-augmented team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Human engineers should own architecture decisions, product judgment, acceptance review, security assessment, deployment governance, and anything requiring business context or accountability that an AI agent cannot carry.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI replace software engineers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI agents replace repetitive implementation tasks, not engineering judgment. Senior engineering skills — system design, product thinking, trade-off analysis, delivery ownership — become more valuable, not less.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest risk of using AI agents in software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The biggest risks are accumulating architectural debt from unreviewed AI-generated code, drifting from the intended product design, security gaps from unvalidated output, and teams losing ownership of their own codebase.",
      },
    },
    {
      "@type": "Question",
      name: "How should engineering teams govern AI coding agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teams should enforce human review on all AI-generated output, define architecture boundaries AI agents must not cross without approval, run security checks on generated code, maintain test coverage requirements, and keep a human owner for every module.",
      },
    },
    {
      "@type": "Question",
      name: "Does the SDLC need to change when using AI coding tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The SDLC needs stronger upfront requirement definition, clearer architecture documentation, more structured review cycles, and explicit governance policies for AI-generated code before it reaches production.",
      },
    },
    {
      "@type": "Question",
      name: "How do AI coding agents affect team structure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI coding agents reduce the need for large teams doing purely implementation work. Teams shift toward a smaller group of high-judgment engineers who define, review, govern, and own delivery rather than primarily writing boilerplate code.",
      },
    },
    {
      "@type": "Question",
      name: "What role does a Fractional CTO play in AI-augmented engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Fractional CTO helps founders and teams define the architecture guardrails AI agents must operate within, set governance policies for AI-generated code, structure review processes, and ensure AI-assisted delivery stays aligned with business and product direction.",
      },
    },
  ],
};

const sdlcPhases = [
  {
    phase: "Requirements",
    human: "Define user problems, business rules, acceptance criteria, and scope boundaries",
    ai: "Summarise input, generate draft user stories, flag ambiguity in specs",
    humanOwns: true,
  },
  {
    phase: "Architecture",
    human: "Design system structure, data models, API contracts, and integration boundaries",
    ai: "Suggest patterns, generate boilerplate scaffolding, document existing structure",
    humanOwns: true,
  },
  {
    phase: "Implementation",
    human: "Review output, maintain architecture fit, handle complex logic and edge cases",
    ai: "Write functions, components, migrations, tests, and documentation from clear specs",
    humanOwns: false,
  },
  {
    phase: "Code Review",
    human: "Review architecture alignment, security, business logic correctness, and ownership",
    ai: "Flag style issues, suggest refactors, identify obvious bugs, generate review summaries",
    humanOwns: true,
  },
  {
    phase: "Testing",
    human: "Define test strategy, validate critical path coverage, review edge case handling",
    ai: "Generate unit tests, integration test stubs, fixture data, and test documentation",
    humanOwns: false,
  },
  {
    phase: "Deployment",
    human: "Own release decisions, rollback strategy, environment config, and incident response",
    ai: "Generate CI/CD config drafts, deployment checklists, runbooks from templates",
    humanOwns: true,
  },
  {
    phase: "Maintenance",
    human: "Prioritise technical debt, own module accountability, handle production incidents",
    ai: "Explain legacy code, suggest refactor paths, generate documentation updates",
    humanOwns: false,
  },
];

const humanMustOwn = [
  {
    title: "Architecture decisions",
    body: "What the system is made of, how it grows, and what constraints it operates within. AI can suggest patterns. It cannot evaluate whether a pattern fits your product trajectory, team skill, and operational reality.",
  },
  {
    title: "Product judgment",
    body: "Whether the right thing is being built at all. AI agents implement what they are told. They do not ask whether this feature belongs in version one, whether it solves the actual problem, or whether it creates downstream scope risk.",
  },
  {
    title: "Security review",
    body: "AI-generated code can introduce injection vulnerabilities, broken access control, weak cryptography, or over-permissioned database queries. Human engineers must own security sign-off before production deployment.",
  },
  {
    title: "Delivery ownership",
    body: "When something breaks in production, an AI agent does not carry accountability. Every module, service, and workflow needs a named human owner who is responsible for its behaviour under real conditions.",
  },
  {
    title: "Business context",
    body: "Why a feature exists, which regulation applies, what the commercial model requires, which customer segment it affects. This context cannot be prompted. It has to be embedded by a person who understands the business.",
  },
  {
    title: "Trade-off decisions",
    body: "Whether to build or integrate. Whether to use a managed service or run it yourself. Whether to optimise now or accrue debt. These are engineering and product trade-offs that require business awareness, not pattern matching.",
  },
];

const governanceChecklist = [
  "Every AI-generated pull request reviewed by a named engineer before merge",
  "Architecture decision records (ADRs) written for system-level changes",
  "Security review required for auth, payments, data access, and third-party integrations",
  "Test coverage thresholds enforced regardless of how code was written",
  "Database schema changes approved by a senior engineer before execution",
  "Module ownership documented — every service has a named human owner",
  "AI agent scope limited to defined files, layers, and boundaries per task",
  "No AI-generated code deployed directly to production without human review",
  "Dependency additions reviewed for license, security, and maintenance status",
  "Weekly architecture review to check for drift from intended system design",
];

const teamShifts = [
  {
    before: "Large team writing boilerplate and implementation",
    after: "Smaller team of high-judgment engineers reviewing, governing, and owning delivery",
  },
  {
    before: "Senior engineers bottlenecked writing routine code",
    after: "Senior engineers focused on architecture, review, and product alignment",
  },
  {
    before: "Documentation written last or skipped",
    after: "Specifications written first — they become the prompts that drive AI output",
  },
  {
    before: "Testing added after delivery pressure",
    after: "Test coverage enforced as a governance gate regardless of who wrote the code",
  },
  {
    before: "Code ownership unclear after team turnover",
    after: "Explicit module ownership recorded — AI agents do not dilute accountability",
  },
  {
    before: "Requirements captured loosely in Slack and emails",
    after: "Structured requirements written to be precise enough for both humans and AI agents",
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
          <span className="text-[#171717]">AI Agents Are Reshaping the SDLC</span>
        </nav>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="pin-label inline-block">AI &amp; Automation</span>
          <span className="inline-flex rounded-full border border-[#B46A3C]/30 bg-[#FFF2E8] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8A4A25]">
            New
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-[#171717] lg:text-4xl">
          AI Agents Are Reshaping the SDLC (And Why Governance Matters)
        </h1>
        <p className="mt-3 text-sm text-[#5F5F5F]">
          By Aditya Pranav · Fractional CTO &amp; Product Engineering Advisor
        </p>
        <div className="mt-2 h-px w-16 bg-[#2F6F68]" />

        <p className="mt-8 text-[17px] leading-relaxed text-[#3a3a3a]">
          For decades, the software development lifecycle followed a recognisable shape: requirements gathered by analysts, architecture designed by senior engineers, implementation written by development teams, testing handed to QA, and deployment managed by operations or DevOps. The roles were distinct. The handoffs were clear.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI coding agents are restructuring that shape. Not because they are replacing the people involved, but because they are absorbing the parts of the SDLC that were always about producing output — writing functions, generating tests, scaffolding components, documenting APIs, refactoring files — and shifting human attention toward the parts that require judgment, accountability, and business context.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The question for engineering leaders and founders is not whether AI changes the way teams build software. It already does. The more important question is: what does a well-structured AI-augmented SDLC actually look like, and what governance does it require?
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The SDLC Has Not Disappeared. It Has Been Redistributed.</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Every phase of the traditional SDLC still exists. Requirements still need to be gathered. Architecture still needs to be designed. Code still needs to be reviewed. Deployments still need to be governed. None of those things went away.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          What changed is who — or what — is doing each part. AI coding agents can now meaningfully participate in several phases. But meaningful participation is not the same as ownership. The distinction matters.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A team that treats AI agents as owners of implementation — rather than participants under human governance — will find itself with fast-moving technical debt, architectural drift, security gaps, and a codebase that no individual engineer truly understands or feels accountable for.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Phase-by-Phase: Where AI Participates and Where Humans Must Own</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This is not about AI doing the easy work and humans doing the hard work. The split is about judgment versus execution. Humans set the frame. AI agents operate inside it.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#E8E0D4]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E8E0D4] bg-[#FAF7F0]">
                <th className="px-4 py-3 text-left font-semibold text-[#171717]">SDLC Phase</th>
                <th className="px-4 py-3 text-left font-semibold text-[#2F6F68]">Human Owns</th>
                <th className="px-4 py-3 text-left font-semibold text-[#B46A3C]">AI Participates</th>
              </tr>
            </thead>
            <tbody>
              {sdlcPhases.map((row, i) => (
                <tr key={row.phase} className={`border-b border-[#E8E0D4] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F0]/40"}`}>
                  <td className="px-4 py-3 font-semibold text-[#171717]">{row.phase}</td>
                  <td className="px-4 py-3 text-[#3a3a3a]">{row.human}</td>
                  <td className="px-4 py-3 text-[#5F5F5F]">{row.ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-[#5F5F5F]">
          The column headings reflect accountability, not effort. AI can do significant implementation work during phases humans own. But humans carry the decision and the outcome.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Six Things Human Engineers Must Never Delegate to AI</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {humanMustOwn.map((item) => (
            <div key={item.title} className="rounded-xl border border-[#E8E0D4] bg-white p-5">
              <h3 className="text-base font-bold text-[#171717]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5F5F5F]">{item.body}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Silent Risk: AI Makes Architectural Drift Fast and Invisible</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          In a traditional team, architectural drift accumulates slowly. One engineer makes a shortcut. Another follows it. Over months, the system diverges from its intended design. The team eventually notices because delivery slows, bugs cluster, and new features become disproportionately expensive.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI coding agents change this dynamic. They can generate dozens of files, hundreds of functions, and multiple new abstractions in a single session. If those outputs are not reviewed against the architecture, the drift accumulates at the same speed as the implementation.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A team that ships AI-generated code without an architecture review cycle is not building fast. It is building debt quickly.
        </p>
        <div className="mt-6 rounded-xl border border-[#E8E0D4] bg-[#FAF7F0] p-5">
          <p className="font-semibold text-[#171717]">What architectural drift looks like in AI-augmented teams</p>
          <ul className="mt-3 space-y-2 text-[15px] text-[#3a3a3a]">
            {[
              "New database tables created without reviewing the existing schema design",
              "Duplicate API endpoints added because the AI was not given the full route list",
              "Business logic split across frontend and backend inconsistently",
              "New dependencies added that conflict with or duplicate existing ones",
              "Inconsistent error handling patterns across AI-generated and human-written modules",
              "Authentication logic reimplemented in new flows rather than reusing the existing pattern",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#B46A3C]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Requirement Definition Problem Gets Worse, Not Better</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          One of the most counterintuitive effects of AI coding agents is that requirement quality matters more than it did before.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          In a traditional team, a developer with unclear requirements would slow down, ask questions, and produce partial output while clarity was established. The friction itself signalled that the requirement was not ready.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          AI agents do not pause. They generate a complete-looking implementation from an incomplete requirement. The output can appear polished and functional while being built on a misunderstood problem. By the time the team discovers the gap, there is significant implementation to unwind.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          This means the SDLC's requirement phase needs to become more structured and rigorous as AI tool use increases, not less. The clearer the specification, the more accurately the AI output can be evaluated.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">How Team Structure Shifts in an AI-Augmented Engineering Organisation</h2>
        <div className="mt-6 space-y-3">
          {teamShifts.map((item) => (
            <div key={item.before} className="grid gap-2 rounded-xl border border-[#E8E0D4] bg-white p-4 sm:grid-cols-2">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#B46A3C]">Before</p>
                <p className="text-sm text-[#5F5F5F]">{item.before}</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#2F6F68]">After</p>
                <p className="text-sm text-[#3a3a3a]">{item.after}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What the New Engineering Career Looks Like</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Engineers who built their value on implementation volume — writing a lot of code quickly — face the most disruption. AI agents are better at implementation volume than any individual developer, and they do not get tired.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Engineers who built their value on judgment — knowing what to build, how the system should behave under load, where the edge cases live, which trade-offs are safe, how to read a requirement for what is missing — become more valuable, not less.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The new engineering career is defined by ownership, not output. The question shifts from "how much did you write?" to "what are you accountable for, and how well does it work?"
        </p>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">Governance Checklist for the AI-Augmented SDLC</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Governance is not bureaucracy. In an AI-augmented SDLC, governance is what prevents AI-assisted delivery from becoming AI-generated technical debt.
        </p>
        <div className="mt-5 space-y-2">
          {governanceChecklist.map((check, index) => (
            <div key={check} className="flex items-start gap-3 rounded-lg border border-[#E8E0D4] bg-white px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-[#2F6F68] text-[10px] font-bold text-[#2F6F68]">
                {index + 1}
              </span>
              <p className="text-sm text-[#3a3a3a]">{check}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">What Founders and CTOs Should Set Up Before Scaling AI-Assisted Development</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The most common mistake is adopting AI coding tools at the team level without setting any governance at the engineering leadership level. Each developer starts using tools individually. Workflows diverge. Review standards vary. Architecture consistency breaks down.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Before scaling AI-assisted development across a team, the following should be in place:
        </p>
        <ul className="mt-5 space-y-4">
          {[
            { title: "Architecture documentation", body: "A written record of the system design, module boundaries, data flow, and integration contracts. AI agents need this as context. Without it, they will invent their own patterns." },
            { title: "Requirement standards", body: "A consistent format for defining features — user outcome, workflow, acceptance criteria, edge cases, out-of-scope items. This becomes the input quality standard for AI-assisted implementation." },
            { title: "Review process definition", body: "Clear expectations for what every pull request requires — architecture alignment check, security review, test coverage, business logic validation. Applied equally to AI-generated and human-written code." },
            { title: "Module ownership map", body: "A document or system that records which engineer is accountable for each part of the product. AI agents do not carry accountability. Humans must." },
            { title: "Deployment governance policy", body: "Who approves production deployments, what constitutes a release, how rollbacks work, and what monitoring is required. This does not change because AI wrote the code." },
          ].map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#B46A3C]" />
              <div>
                <p className="font-semibold text-[#171717]">{item.title}</p>
                <p className="mt-0.5 text-[16px] leading-relaxed text-[#5F5F5F]">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold text-[#171717]">The Right Mental Model: AI as a Skilled Executor, Not a Decision Maker</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          The most useful way to think about AI coding agents in the SDLC is as skilled executors operating inside a structure that humans define and own.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          A skilled executor can do significant, high-quality work. But they need clear direction, defined scope, established standards, and someone with accountability to review and accept the output. That is not a limitation. It is how reliable software has always been built.
        </p>
        <p className="mt-4 text-[17px] leading-relaxed text-[#3a3a3a]">
          Teams that understand this model use AI agents to move faster without losing control. Teams that misunderstand it discover, usually after shipping to production, that speed without structure is not an advantage.
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
            <Link href="/insights/ai-generated-code-engineering-governance" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; AI-Generated Code Is Not the Problem. Lack of Engineering Governance Is.
            </Link>
            <Link href="/insights/ai-coding-agents-product-requirements" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; Why AI Coding Agents Need Product Requirements Before They Write Code
            </Link>
            <Link href="/insights/how-to-use-cursor-without-codebase-mess" className="flex items-center gap-2 text-[#2F6F68] hover:underline">
              &rarr; How to Use Cursor Without Turning Your Codebase Into a Mess
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
            Setting Up an AI-Augmented Engineering Team?
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#a8c5c2]">
            Book a strategy call to define the governance, architecture boundaries, and review processes your team needs to use AI agents without losing delivery control.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          </div>
        </div>
      </article>
    </>
  );
}
