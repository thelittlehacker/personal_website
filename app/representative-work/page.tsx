import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CTAButton from "@/components/ui/CTAButton";
import { RepresentativeWorkTabs } from "@/components/visual/HomeVisuals";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Representative Product & Technology Work | Aditya Pranav",
  description:
    "Representative advisory themes across fintech architecture, MVP planning, delivery governance, integrations, AI workflows, and due diligence.",
  path: "/representative-work",
});

export default function RepresentativeWorkPage() {
  return (
    <>
      <PageHero
        title="Representative Product & Technology Work"
        subtitle="A view into the types of product, engineering, architecture, delivery, and AI implementation challenges I help founders and teams solve."
      />
      <section className="container-wrap py-16">
        <SectionHeading
          title="Representative Advisory Areas"
          description="These examples represent advisory and leadership themes. Specific client details can be discussed where confidentiality permits."
        />
        <RepresentativeWorkTabs />
        <div className="mt-8">
          <CTAButton href="/contact">Discuss Similar Support</CTAButton>
        </div>
      </section>
    </>
  );
}
