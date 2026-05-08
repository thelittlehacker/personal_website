import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/Cards";
import CTAButton from "@/components/ui/CTAButton";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About Aditya Pranav | Product & Technology Advisor",
  description:
    "Founder-friendly product and technology leadership focused on roadmap clarity, architecture direction, execution governance, and practical AI adoption.",
  path: "/about",
});

export default function AboutPage() {
  const principles = [
    "Build the right thing before building fast",
    "Keep architecture aligned with business stage",
    "Make delivery visible and accountable",
    "Use AI where it creates real value",
    "Reduce founder uncertainty",
    "Connect product, technology, and business outcomes",
  ];

  return (
    <>
      <PageHero
        title="Founder-Friendly Product and Technology Leadership"
        subtitle="I help founders make better product and technology decisions before they become expensive delivery problems."
      />
      <section className="container-wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Photo */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/photo-about.png"
              alt="Aditya Pranav"
              width={520}
              height={680}
              className="w-full object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2A]/40 via-transparent to-transparent" />
          </div>
          {/* Bio */}
          <div>
            <p className="label-mono mb-3">Who I Am</p>
            <h2 className="text-2xl font-bold text-[#171717] lg:text-3xl">
              Builder, Advisor,<br />and Founder's Tech Partner
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5F5F5F]">
              Aditya Pranav is a product-engineering leader with experience across startup building,
              VP-level engineering leadership, backend systems, fintech, payments, enterprise delivery,
              and AI-assisted product execution.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5F5F5F]">
              He works with founders and growing teams as a Fractional CTO, Product & Engineering
              Advisor, and Fractional CPO support partner — helping turn founder vision into
              buildable, scalable product direction.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["VP Engineering Experience", "Startup Founder", "Fintech & Payments", "AI Advisory"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#E8E0D4] bg-[#FAF7F0] px-3 py-1 text-xs font-semibold text-[#2F6F68]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-wrap py-8">
        <SectionHeading
          title="How I Think"
          description="Clarity before build. Architecture before scale. Business priority before feature volume. Delivery governance before chaos. Practical AI before hype. Outcome over activity."
        />
      </section>

      <section className="container-wrap py-8">
        <SectionHeading title="What I Help With" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "CTO-level technology guidance",
            "Product roadmap clarity",
            "MVP planning",
            "Architecture review",
            "Engineering execution",
            "Delivery governance",
            "AI and automation advisory",
            "Vendor and team review",
          ].map((item) => (
            <ExperienceCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-8">
        <SectionHeading title="Principles" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => (
            <ExperienceCard key={item} text={item} />
          ))}
        </div>
      </section>

      <section className="container-wrap py-10">
        <CTAButton href="/contact">Book a Strategy Call</CTAButton>
      </section>
    </>
  );
}
