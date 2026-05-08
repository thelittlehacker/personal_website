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

        <p className="mt-6 text-xs text-[#6b7280]">© {new Date().getFullYear()} Aditya Pranav. Fractional CTO for founder-led products.</p>
      </div>
    </footer>
  );
}
