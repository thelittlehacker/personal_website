export type InsightCategory =
  | "Founder Guides"
  | "Product Engineering"
  | "Architecture & Scaling"
  | "AI & Automation"
  | "Technical Debt & Delivery Governance";

export const INSIGHT_CATEGORIES: InsightCategory[] = [
  "Founder Guides",
  "Product Engineering",
  "Architecture & Scaling",
  "AI & Automation",
  "Technical Debt & Delivery Governance",
];

export interface InsightItem {
  title: string;
  description: string;
  cta: string;
  href: string;
  category: InsightCategory;
  badge?: "New" | "Trending";
}

export const insightCards: InsightItem[] = [
  {
    title: "AI Agents Are Reshaping the SDLC (And Why Governance Matters)",
    description:
      "How the software development lifecycle is being restructured by AI coding agents, and what human engineers must continue to own.",
    cta: "Read article",
    href: "/insights/human-engineers-ai-engineers-new-sdlc",
    category: "AI & Automation",
    badge: "New",
  },
  {
    title: "Why API Sprawl Quietly Slows Startup Growth",
    description:
      "How duplicated endpoints and integration exceptions consume engineering time that should be spent on growth.",
    cta: "Read article",
    href: "/insights/api-sprawl-slows-startup-growth",
    category: "Technical Debt & Delivery Governance",
    badge: "Trending",
  },
  {
    title: "Why AI Coding Agents Need Product Requirements Before They Write Code",
    description:
      "Why clear PRDs, user flows, acceptance criteria, and scope boundaries matter even more with AI-assisted delivery.",
    cta: "Read article",
    href: "/insights/ai-coding-agents-product-requirements",
    category: "Product Engineering",
    badge: "Trending",
  },
  {
    title: "How Founders Should Think About Agentic AI Before Adding It to Their Product",
    description:
      "A practical founder guide to evaluating AI agents, workflow readiness, architecture risk, and implementation fit.",
    cta: "Read article",
    href: "/insights/agentic-ai-for-startups",
    category: "AI & Automation",
    badge: "Trending",
  },
  {
    title: "How to Use Cursor Without Turning Your Codebase Into a Mess",
    description:
      "A practical governance guide for founders and teams using AI coding tools without losing codebase control.",
    cta: "Read article",
    href: "/insights/how-to-use-cursor-without-codebase-mess",
    category: "AI & Automation",
    badge: "Trending",
  },
  {
    title: "AI-Assisted Development Checklist for Startup Founders",
    description:
      "A founder-friendly checklist for using AI coding tools safely across scope, architecture, testing, and delivery.",
    cta: "Read article",
    href: "/insights/ai-assisted-development-checklist-startup-founders",
    category: "AI & Automation",
    badge: "Trending",
  },
  {
    title: "Why AI Can Build Features Faster but Cannot Replace Product Engineering Judgment",
    description:
      "Why faster implementation still needs product clarity, architecture thinking, and engineering ownership.",
    cta: "Read article",
    href: "/insights/ai-builds-features-faster-product-engineering-judgment",
    category: "Product Engineering",
    badge: "Trending",
  },
  {
    title: "When Should a Founder Hire a Fractional CTO?",
    description:
      "Stage signals and decision triggers that indicate when CTO-level guidance becomes essential.",
    cta: "Read article",
    href: "/insights/when-should-a-founder-hire-a-fractional-cto",
    category: "Founder Guides",
  },
  {
    title: "Fractional CTO vs Full-Time CTO: What Early Teams Should Know",
    description:
      "A practical comparison based on stage, complexity, and execution risk.",
    cta: "Read article",
    href: "/insights/fractional-cto-vs-full-time-cto",
    category: "Founder Guides",
  },
  {
    title: "How to Know If Your MVP Scope Is Too Large",
    description:
      "Indicators that your MVP needs restructuring before development spend increases.",
    cta: "Read article",
    href: "/insights/how-to-know-if-your-mvp-scope-is-too-large",
    category: "Founder Guides",
  },
  {
    title: "Why Product Roadmaps Fail Without Business Prioritization",
    description:
      "Why feature-heavy planning breaks execution and what to do instead.",
    cta: "Read article",
    href: "/insights/why-product-roadmaps-fail-without-business-prioritization",
    category: "Product Engineering",
  },
  {
    title: "How to Review an Agency-Built Product Before Scaling",
    description:
      "A founder-side checklist for architecture quality, maintainability, and ownership.",
    cta: "Read article",
    href: "/insights/how-to-review-an-agency-built-product-before-scaling",
    category: "Technical Debt & Delivery Governance",
  },
  {
    title: "Technical Debt Signals Founders Should Not Ignore",
    description:
      "Early warning signs that affect delivery speed, scalability, and system reliability.",
    cta: "Read article",
    href: "/insights/technical-debt-signals-founders-should-not-ignore",
    category: "Technical Debt & Delivery Governance",
  },
  {
    title: "Practical AI Use Cases for Early-Stage Products",
    description:
      "Where AI can create value without adding unnecessary product complexity.",
    cta: "Read article",
    href: "/insights/practical-ai-use-cases-for-early-stage-products",
    category: "AI & Automation",
  },
  {
    title: "AI-Generated Code Is Not the Problem. Lack of Engineering Governance Is.",
    description:
      "How founders can use AI coding tools without creating uncontrolled technical debt, security risk, or delivery instability.",
    cta: "Read article",
    href: "/insights/ai-generated-code-engineering-governance",
    category: "AI & Automation",
    badge: "Trending",
  },
  {
    title: "How to Create Engineering Accountability Without Micromanagement",
    description:
      "Delivery governance patterns that improve ownership while preserving team autonomy.",
    cta: "Read article",
    href: "/insights/how-to-create-engineering-accountability-without-micromanagement",
    category: "Technical Debt & Delivery Governance",
  },
  {
    title: "What Founders Should Ask Before Choosing a Tech Stack",
    description:
      "Strategic stack questions that reduce rework risk and improve long-term fit.",
    cta: "Read article",
    href: "/insights/what-founders-should-ask-before-choosing-a-tech-stack",
    category: "Architecture & Scaling",
  },
  {
    title: "When Does a Startup Need Fractional CPO Support?",
    description:
      "Product clarity triggers that justify part-time product leadership.",
    cta: "Read article",
    href: "/insights/when-does-a-startup-need-fractional-cpo-support",
    category: "Founder Guides",
  },
];
