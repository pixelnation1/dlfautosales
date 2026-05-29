"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

type ContactFormProps = {
  defaultVehicle?: string;
  title?: string;
};

export function ContactForm({
  defaultVehicle = "",
  title = "Send a Message",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase text-dark">
          Message Received
        </h3>
        <p className="mt-2 max-w-sm text-text-dark/70">
          Thanks for reaching out! A team member will contact you shortly. For
          faster service, call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-primary">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="font-display text-xl font-bold uppercase text-dark">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
            Name *
          </span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
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
            className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
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
          className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
          Vehicle Interested In
        </span>
        <input
          type="text"
          name="vehicle"
          defaultValue={defaultVehicle}
          className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </label>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
          Message *
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1 w-full resize-y rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </label>
      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
