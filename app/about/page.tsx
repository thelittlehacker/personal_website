import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aditya Pranav",
    url: "https://adityapranav.in/about",
    jobTitle: "Fractional CTO and Product Engineering Advisor",
    description:
      "Fractional CTO and Product Engineering Advisor with experience across startup building, VP-level engineering leadership, backend systems, fintech, payments, enterprise delivery, and AI-assisted product execution.",
    image: "https://adityapranav.in/photo-about.png",
    knowsAbout: [
      "Fractional CTO",
      "Product engineering",
      "Software architecture",
      "Engineering governance",
      "MVP planning",
      "Technical roadmap",
      "AI adoption for startups",
      "Startup advisory",
      "Fintech",
      "Payments",
      "Engineering delivery",
    ],
    sameAs: [
      "https://www.linkedin.com/in/aditya-pranav",
      "https://adityapranav.in",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Aditya Pranav Advisory",
      url: "https://adityapranav.in",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

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
      <Script
        id="about-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
              Builder, Product Engineer,<br />and Founder's Tech Partner
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-[#5F5F5F]">
              Aditya Pranav is a product-engineering leader with experience across startup building,
              VP-level engineering leadership, backend systems, fintech, payments, enterprise delivery,
              and AI-assisted product execution.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5F5F5F]">
              The working approach is product-engineering first — understanding what should be built, why, and how it should be structured before asking how fast it can be delivered.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-[#5F5F5F]">
              He works with founders and growing teams as a Fractional CTO, Product & Engineering
              Advisor, and Fractional CPO support partner — helping turn founder vision into
              buildable, scalable product direction.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Product Engineering", "VP Engineering Experience", "Startup Founder", "Fintech & Payments", "AI Advisory"].map((tag) => (
                <span key={tag} className="rounded-full border border-[#E8E0D4] bg-[#FAF7F0] px-3 py-1 text-xs font-semibold text-[#2F6F68]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/aditya-pranav"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-[#E8E0D4] bg-white px-4 py-2 text-sm font-semibold text-[#2F6F68] hover:border-[#2F6F68] hover:bg-[#EEF5F4] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Connect on LinkedIn
            </a>
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
