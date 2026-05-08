import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#E8E0D4] bg-[#FAF7F0]">
      <div className="container-wrap py-12">
        <div className="grid gap-8 border border-[#E8E0D4] bg-[#FFFCF7] p-6 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/photo-avatar.png"
                alt="Aditya Pranav"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover object-top"
              />
              <div>
                <p className="text-base font-bold text-[#171717]">Aditya Pranav</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2F6F68]">Fractional CTO</p>
              </div>
            </div>
            <p className="annotation-line mt-4 text-sm text-[#3a3a3a]">
              Fractional CTO & CPO support for founders building scalable digital products.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact">Book a Strategy Call</CTAButton>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#245c56]">Primary Navigation</p>
            <div className="mt-3 grid gap-2 text-sm text-[#3a3a3a]">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/fractional-cto">Fractional CTO</Link>
              <Link href="/representative-work">Representative Work</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#245c56]">More</p>
            <div className="mt-3 grid gap-2 text-sm text-[#3a3a3a]">
              <Link href="/fractional-cpo">Fractional CPO</Link>
              <Link href="/advisory">Advisory</Link>
              <Link href="/experience">Experience</Link>
              <Link href="/about">About</Link>
              <Link href="/insights">Insights</Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-xs text-[#6b7280]">© {new Date().getFullYear()} Aditya Pranav. Fractional CTO for founder-led products.</p>
          <a
            href="https://www.linkedin.com/in/aditya-pranav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aditya Pranav on LinkedIn"
            className="flex items-center gap-1.5 rounded-lg border border-[#E8E0D4] bg-white px-3 py-1.5 text-xs font-semibold text-[#2F6F68] hover:border-[#2F6F68] hover:bg-[#EEF5F4] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
