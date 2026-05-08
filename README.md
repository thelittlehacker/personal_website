# Aditya Pranav - Personal Advisory Website

Revamped personal brand website positioned for **Fractional CTO / Fractional CPO** advisory services.

Live domain: [adityapranav.in](https://adityapranav.in)

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (subtle section/card/timeline animations)
- Netlify (hosting + form handling)
- next-sitemap (robots.txt + sitemap.xml)

## Routes

- `/` - Home
- `/services`
- `/fractional-cto`
- `/fractional-cpo`
- `/advisory`
- `/experience`
- `/about`
- `/insights`
- `/contact`

## SEO

- Per-page metadata via `lib/metadata.ts`
- Canonical URLs + Open Graph + Twitter cards
- JSON-LD (`Person` on Home, `Service` on key service pages)
- Auto-generated sitemap and robots via `next-sitemap`

## Project Structure

- `app/` - all pages and root layout
- `components/layout/` - `Header`, `Footer`
- `components/ui/` - reusable UI primitives
- `components/sections/` - reusable content section components
- `components/forms/` - `ContactForm` (Netlify form submission)
- `lib/data/` - service, insights, experience content arrays
- `public/netlify-form.html` - static form detection file for Netlify Forms

## Local Development

```bash
npm install
npm run dev
```

Build and verify:

```bash
npm run build
npm run start
```

## Netlify Deployment

This repo includes `netlify.toml` with `@netlify/plugin-nextjs`.

1. Connect repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Ensure form submissions are enabled (Netlify Forms)

## Contact Form

The contact form is implemented on `/contact` and wired for Netlify Forms using:

- runtime POST submit in `components/forms/ContactForm.tsx`
- static detection form in `public/netlify-form.html`

## Notes

The legacy static files (`index.html`, `portfolio.html`, `resume.html`, `contact.html`, old assets) are still present in the repository for reference, but the active site is now Next.js-based.
