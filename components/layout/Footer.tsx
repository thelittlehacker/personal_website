import Link from "next/link";
import FooterSpotlight from "@/components/layout/FooterSpotlight";
import FooterBackToTop from "@/components/layout/FooterBackToTop";
import { FooterCopyField } from "@/components/layout/FooterCopyField";
import { siteContact, siteContactLinks } from "@/lib/site-contact";

const indexLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Work", "/representative-work"],
  ["Insights", "/insights"],
  ["Contact", "/contact"],
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-black text-white">
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Top meta — reference: section label + availability */}
        <div className="flex flex-col justify-between gap-3 border-b border-neutral-800 pb-6 pt-12 sm:flex-row sm:items-baseline sm:gap-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
            Let&apos;s talk
          </p>
          <p className="ml-0 max-w-md text-[11px] leading-relaxed text-neutral-500 sm:ml-auto sm:text-right">
            Open to new engagements — founders, startups, and scaling teams.
          </p>
        </div>

        {/* Main block */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-stretch lg:gap-6 lg:py-4 xl:gap-10">
          <div className="pt-10 lg:pr-8 lg:pt-16 xl:pr-12">
            <h2
              className="text-[clamp(2.25rem,6.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white"
              style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
            >
              Let&apos;s work together.
            </h2>

            <div className="mt-12 lg:mt-16">
              <FooterCopyField label="E-mail" value={siteContact.email} />
              <FooterCopyField label="Phone" value={siteContact.phoneDisplay} copyValue={siteContact.phoneTel} />
              <div className="border-b border-neutral-800 py-7">
                <p className="text-[12px] font-medium text-neutral-300">Connect</p>
                <div className="mt-3 flex flex-wrap gap-x-7 gap-y-2 text-[14px] lowercase text-neutral-500">
                  <a href={siteContactLinks.tel} className="transition-colors hover:text-white">
                    call
                  </a>
                  <a
                    href={siteContactLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    whatsapp
                  </a>
                  <a href={siteContactLinks.mailto} className="transition-colors hover:text-white">
                    email
                  </a>
                  <a
                    href={siteContactLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:border-neutral-800 lg:pl-6 xl:pl-10">
            <FooterSpotlight />
          </div>
        </div>

        {/* Slim bottom: nav + legal + back to top (still useful for site UX) */}
        <div className="relative mt-12 flex flex-col gap-8 border-t border-neutral-800 py-10 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:py-12">
          <p className="text-[11px] tracking-wide text-neutral-600">© {year} Aditya Pranav</p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-neutral-500 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            aria-label="Footer"
          >
            {indexLinks.map(([label, href]) => (
              <Link key={href} href={href} className="transition-colors hover:text-neutral-300">
                {label}
              </Link>
            ))}
          </nav>
          <FooterBackToTop />
        </div>
      </div>
    </footer>
  );
}
