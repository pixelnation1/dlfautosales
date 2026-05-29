"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FinancingApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-white p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase text-dark">
          Application Received
        </h3>
        <p className="mt-2 text-text-dark/70">
          Our financing team will review your information and contact you shortly.
          Questions? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-primary">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border-gray bg-white p-6 sm:p-8"
    >
      <h2 className="font-display text-2xl font-bold uppercase text-dark">
        Start Your Application
      </h2>
      <p className="mt-2 text-sm text-text-dark/70">
        Complete the form below — no obligation. Our Emporia team will reach out
        with your approval options.
      </p>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
              Full Name *
            </span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
              Phone *
            </span>
            <input
              type="tel"
              name="phone"
              required
              autoComplete="tel"
              className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
            Email *
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
            Vehicle Interested In
          </span>
          <input
            type="text"
            name="vehicle"
            className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
            Estimated Monthly Budget
          </span>
          <input
            type="text"
            name="budget"
            className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
            Additional Details
          </span>
          <textarea
            name="details"
            rows={3}
            className="mt-1 w-full resize-y rounded-md border border-border-gray px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </label>
        <Button type="submit" size="lg" className="w-full">
          Submit Application
        </Button>
      </div>
    </form>
  );
}
