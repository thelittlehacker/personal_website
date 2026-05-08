"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function CardWrap({ children }: { children: React.ReactNode }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl2 border border-slate-200 bg-white p-6 shadow-card"
    >
      {children}
    </motion.article>
  );
}

export function ProblemCard({
  title,
  description,
  impact,
}: {
  title: string;
  description: string;
  impact: string;
}) {
  return (
    <CardWrap>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <p className="mt-3 text-sm font-medium text-slate-700">{impact}</p>
    </CardWrap>
  );
}

export function ServiceCard({
  title,
  description,
  cta,
  href,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <CardWrap>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <Link href={href} className="mt-4 inline-block text-sm font-semibold text-indigo-600">
        {cta}
      </Link>
    </CardWrap>
  );
}

export function EngagementModelCard({
  title,
  bestFor,
  output,
}: {
  title: string;
  bestFor: string;
  output: string;
}) {
  return (
    <CardWrap>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">
        <strong>Best for:</strong> {bestFor}
      </p>
      <p className="mt-2 text-sm text-slate-600">
        <strong>Output:</strong> {output}
      </p>
    </CardWrap>
  );
}

export function ScenarioCard({ statement, help }: { statement: string; help: string }) {
  return (
    <CardWrap>
      <h3 className="font-semibold text-slate-900">{statement}</h3>
      <p className="mt-2 text-sm text-slate-600">How I help: {help}</p>
      <p className="mt-3 text-sm font-semibold text-indigo-600">Discuss This Challenge</p>
    </CardWrap>
  );
}

export function ExperienceCard({ text }: { text: string }) {
  return (
    <CardWrap>
      <p className="text-sm text-slate-700">{text}</p>
    </CardWrap>
  );
}

export function InsightCard({
  title,
  description,
  cta = "Coming soon",
  href,
}: {
  title: string;
  description: string;
  cta?: string;
  href?: string;
}) {
  return (
    <CardWrap>
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {href ? (
        <Link href={href} className="mt-3 inline-block text-sm font-semibold text-[#2F6F68] hover:underline">
          {cta} →
        </Link>
      ) : (
        <p className="mt-3 text-sm font-semibold text-slate-400">{cta}</p>
      )}
    </CardWrap>
  );
}
