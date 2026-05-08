import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Aditya Pranav | Fractional CTO & CPO Advisory",
  description:
    "Discuss Fractional CTO support, architecture review, MVP planning, delivery governance, product clarity, and AI advisory.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let’s Discuss Your Product and Technology Challenges"
        subtitle="Use this form to discuss Fractional CTO support, product strategy, MVP planning, architecture review, engineering execution, vendor review, or AI advisory."
        ctaText="Send Inquiry"
        ctaHref="#contact-form"
      />
      <section id="contact-form" className="container-wrap py-16">
        <ContactForm />
      </section>
    </>
  );
}
