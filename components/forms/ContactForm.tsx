"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("form-name", "contact");
    setState("sending");

    try {
      const encoded = new URLSearchParams(
        Array.from(data.entries()).map(([key, value]) => [key, String(value)]),
      );

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setState("done");
      form.reset();
    } catch {
      setState("error");
    }
  }

  const options = [
    "Fractional CTO",
    "Fractional CPO",
    "MVP Planning",
    "Architecture Review",
    "Product Roadmap",
    "Engineering Delivery",
    "AI / Automation Advisory",
    "Vendor / Agency Review",
    "Not sure yet",
  ];

  return (
    <form
      name="contact"
      onSubmit={onSubmit}
      className="grid gap-4 rounded-xl2 border border-slate-200 bg-white p-6"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot — hidden from humans, bots fill it in */}
      <input type="text" name="bot-field" className="hidden" aria-hidden="true" tabIndex={-1} />
      <input className="rounded-lg border border-slate-300 px-3 py-2" name="fullName" placeholder="Full Name" required />
      <input className="rounded-lg border border-slate-300 px-3 py-2" name="workEmail" type="email" placeholder="Work Email" required />
      <input className="rounded-lg border border-slate-300 px-3 py-2" name="company" placeholder="Company" required />
      <input className="rounded-lg border border-slate-300 px-3 py-2" name="role" placeholder="Role" required />
      <input className="rounded-lg border border-slate-300 px-3 py-2" name="phoneNumber" placeholder="Phone Number" required />
      <input className="rounded-lg border border-slate-300 px-3 py-2" name="websiteUrl" placeholder="Website / Product URL" />
      <select className="rounded-lg border border-slate-300 px-3 py-2" name="helpType" required>
        <option value="">What do you need help with?</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <textarea className="min-h-36 rounded-lg border border-slate-300 px-3 py-2" name="message" placeholder="Message" required />
      <button
        type="submit"
        className="inline-flex w-fit rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
        disabled={state === "sending"}
      >
        Send Inquiry
      </button>
      {state === "done" ? <p className="text-sm text-green-700">Thanks, your inquiry has been submitted.</p> : null}
      {state === "error" ? <p className="text-sm text-red-700">Something went wrong. Please try again.</p> : null}
      <p className="text-sm text-slate-600">
        I typically begin with a focused strategy conversation to understand your product stage,
        current challenges, and where senior product or technology guidance can create the most value.
      </p>
    </form>
  );
}
