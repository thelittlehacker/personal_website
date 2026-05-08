import AnimatedGradient from "@/components/ui/AnimatedGradient";
import CTAButton from "@/components/ui/CTAButton";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <AnimatedGradient />
      <div className="container-wrap py-20 sm:py-24">
        <h1 className="max-w-4xl text-4xl font-bold text-slate-900 sm:text-6xl">
          Fractional CTO for Founders Building Scalable Digital Products
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-700">
          Product and technology leadership to help founders move from idea, MVP, or messy delivery to structured execution.
        </p>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          I help founders bring clarity to product strategy, technology architecture, engineering execution, and AI-enabled delivery without hiring a full-time CTO or CPO too early.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton href="/contact">Book a Strategy Call</CTAButton>
          <CTAButton href="/services" secondary>
            Explore How I Can Help
          </CTAButton>
        </div>

        <ul className="mt-8 grid gap-2 text-sm font-medium text-slate-700 sm:grid-cols-2">
          <li>Technical direction</li>
          <li>Product clarity</li>
          <li>Engineering execution</li>
          <li>AI-enabled delivery</li>
        </ul>
      </div>
    </section>
  );
}
