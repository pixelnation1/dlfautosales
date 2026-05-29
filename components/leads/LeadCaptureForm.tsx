"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { trackLeadFormSubmit } from "@/lib/analytics/track";
import { submitLead } from "@/lib/leads/submit-lead";
import type { LeadIntent } from "@/lib/leads/types";

const inputClass =
  "mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";

const labelClass =
  "text-xs font-semibold uppercase tracking-wide text-text-dark/70";

type LeadCaptureFormProps = {
  intent: LeadIntent;
  source: string;
  defaultVehicle?: string;
  defaultMessage?: string;
  onSuccess?: () => void;
};

export function LeadCaptureForm({
  intent,
  source,
  defaultVehicle = "",
  defaultMessage = "",
  onSuccess,
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitLead({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      interestedVehicle: String(data.get("vehicle") ?? ""),
      message: String(data.get("message") ?? ""),
      intent,
      source,
    });

    setSubmitting(false);

    if (!result.success) {
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    trackLeadFormSubmit(intent, source);
    setSubmitted(true);
    onSuccess?.();
  }

  if (submitted) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase text-dark">
          Request Received
        </h3>
        <p className="mt-2 max-w-sm text-sm text-text-dark/70">
          Thanks! Our team will contact you shortly. For immediate help, call{" "}
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>Name *</span>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Phone *</span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block">
        <span className={labelClass}>Email *</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className={labelClass}>Interested Vehicle</span>
        <input
          type="text"
          name="vehicle"
          defaultValue={defaultVehicle}
          placeholder="Year, make, model — or leave blank"
          className={inputClass}
        />
      </label>
      <label className="block">
        <span className={labelClass}>Message *</span>
        <textarea
          name="message"
          required
          rows={4}
          defaultValue={defaultMessage}
          className={`${inputClass} resize-y`}
        />
      </label>

      {error && (
        <p className="text-sm font-medium text-primary" role="alert">
          {error}
        </p>
      )}

      <p className="text-xs leading-relaxed text-text-dark/60">
        Fast response. No obligation. Our team will contact you shortly.
      </p>

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? "Sending…" : "Submit Request"}
      </Button>
    </form>
  );
}
