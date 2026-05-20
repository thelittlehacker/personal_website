# Insights Article Template (AdityaPranav.in)

Use this as the **single source of truth** for writing + publishing new Insight articles in this repo (Next.js App Router + JSX articles).

---

## 0) Decide basics (before writing)

- **Slug**: `kebab-case-like-this`
  - Article route will be: `/insights/<slug>`
  - File path will be: `app/insights/<slug>/page.tsx`
- **Category** (must match `lib/data/insights.ts`):
  - `Founder Guides`
  - `Product Engineering`
  - `Architecture & Scaling`
  - `AI & Automation`
  - `Technical Debt & Delivery Governance`
- **Badge rule**:
  - Newest article: `badge: "New"`
  - Previously “New” becomes `badge: "Trending"` (only one “New” at a time)
- **SEO title**: aim ~50–65 chars (include “Aditya Pranav”)
- **Meta description**: aim ~140–160 chars (clear value statement)

---

## 1) Metadata template (per article page)

Copy into `app/insights/<slug>/page.tsx`:

```ts
export const metadata: Metadata = createPageMetadata({
  title: "<Article Title> | Aditya Pranav",
  description:
    "<1–2 sentence description. Keep it specific. Mention founders/startups if applicable.>",
  path: "/insights/<slug>",
});
```

---

## 2) FAQ schema template (recommended for every Insight article)

Keep 6–10 questions. Make them **high-intent** and directly answerable.

```ts
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "<Question 1>",
      acceptedAnswer: { "@type": "Answer", text: "<Answer 1>" },
    },
    // ...
  ],
};
```

In JSX:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
/>
```

---

## 3) Article page structure template (recommended)

### Header block

- Breadcrumb nav: `Home / Insights / <short title>`
- Badges row:
  - Category badge (`pin-label`)
  - Optional “New/Trending” badge
- H1 (strong, specific)
- Byline: “By Aditya Pranav · Fractional CTO & Product Engineering Advisor”
- Small divider line

### Body blocks (mix 5–8 sections)

Recommended section types:
- **Problem framing**: what’s happening + why it matters now
- **Founder/CTO interpretation**: what this means in decisions, cost, risk
- **Model / framework**: phases, checklists, “before vs after”, decision tree
- **Risks / failure modes**: what goes wrong and why
- **Governance / guardrails**: practical controls, review rules, ownership
- **Actionable checklist**: concrete steps (numbered checklist is best)
- **Final recommendation**: a crisp summary + call to action

### Footer blocks

- FAQ accordion (render from `faqSchema.mainEntity`)
- Related Reading (3–4 internal links + “Book a Strategy Call”)
- `ArticleAuthor`
- Dark CTA block with `CTAButton` to `/contact`

---

## 4) Publishing checklist (do this every time)

### Code changes

- [ ] Create `app/insights/<slug>/page.tsx`
- [ ] Add the article to `lib/data/insights.ts`:
  - [ ] Insert at top of `insightCards`
  - [ ] Set category
  - [ ] Set `badge: "New"`
  - [ ] Demote previous `New` to `Trending`
- [ ] Ensure “Related Reading” links use `&rarr;` (not `->`)

### Quality gates

- [ ] `npm run build` passes
- [ ] Sitemap regenerates (via `next-sitemap` in postbuild)

### Deploy / index

- [ ] Commit + push
- [ ] After deploy, submit URL in:
  - [ ] Google Search Console (URL inspection → request indexing)
  - [ ] Bing Webmaster Tools (URL submission)

