"use client";

import { FormEvent, useState } from "react";
import { SITE, ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import {
  CREDIT_SITUATIONS,
  VEHICLE_TYPES,
  type VehicleType,
} from "@/lib/vehicle-finder/types";
import { submitVehicleFinder } from "@/lib/vehicle-finder/submit-vehicle-finder";
import { VEHICLE_FINDER_SUCCESS_MESSAGE } from "@/lib/vehicle-finder/constants";

const inputClass =
  "mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-base text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";
const labelClass =
  "text-xs font-semibold uppercase tracking-wide text-text-dark/70";

export function VehicleFinderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTypes, setSelectedTypes] = useState<VehicleType[]>([]);

  function toggleVehicleType(type: VehicleType) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitVehicleFinder({
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      budget: String(data.get("budget") ?? "").trim(),
      desiredMonthlyPayment: String(data.get("desiredMonthlyPayment") ?? "").trim(),
      vehicleTypes: selectedTypes,
      preferredBrands: String(data.get("preferredBrands") ?? "").trim(),
      creditSituation: String(data.get("creditSituation") ?? ""),
      mustHaveFeatures: String(data.get("mustHaveFeatures") ?? "").trim(),
      additionalNotes: String(data.get("additionalNotes") ?? "").trim(),
      source: "find-my-car-page",
    });

    setSubmitting(false);

    if (!result.success) {
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-border-gray bg-white p-8 text-center shadow-sm">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
          ✓
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold uppercase text-dark">
          Search Started
        </h3>
        <p className="mt-2 max-w-sm text-sm text-text-dark/70">
          {VEHICLE_FINDER_SUCCESS_MESSAGE}
        </p>
        <p className="mt-4 text-sm text-text-dark/60">
          Need answers now? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-primary">
            {SITE.phone}
          </a>
        </p>
        <Button href={ROUTES.inventory} variant="secondary" size="md" className="mt-8">
          Browse Current Inventory
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border-gray bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
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
          <span className={labelClass}>Budget</span>
          <input
            type="text"
            name="budget"
            placeholder="e.g. $15,000"
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>Desired Monthly Payment</span>
          <input
            type="text"
            name="desiredMonthlyPayment"
            placeholder="e.g. $350/month"
            className={inputClass}
          />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className={labelClass}>Vehicle Type</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {VEHICLE_TYPES.map((type) => {
            const checked = selectedTypes.includes(type);
            return (
              <label
                key={type}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  checked
                    ? "border-primary bg-primary text-white"
                    : "border-border-gray bg-light-gray text-text-dark hover:border-primary/50"
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleVehicleType(type)}
                />
                {type}
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className="mt-6 block">
        <span className={labelClass}>Preferred Brands</span>
        <input
          type="text"
          name="preferredBrands"
          placeholder="e.g. Toyota, Ford, Honda"
          className={inputClass}
        />
      </label>

      <label className="mt-4 block">
        <span className={labelClass}>Credit Situation</span>
        <select name="creditSituation" className={inputClass} defaultValue="">
          <option value="">Select one (optional)</option>
          {CREDIT_SITUATIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-4 block">
        <span className={labelClass}>Must-Have Features</span>
        <textarea
          name="mustHaveFeatures"
          rows={3}
          placeholder="AWD, backup camera, third row, low mileage, etc."
          className={`${inputClass} resize-y`}
        />
      </label>

      <label className="mt-4 block">
        <span className={labelClass}>Additional Notes</span>
        <textarea
          name="additionalNotes"
          rows={3}
          placeholder="Timeline, color preferences, trade-in, anything else we should know"
          className={`${inputClass} resize-y`}
        />
      </label>

      {error && (
        <p className="mt-4 text-sm font-medium text-primary" role="alert">
          {error}
        </p>
      )}

      <p className="mt-4 text-xs leading-relaxed text-text-dark/55">
        Fast response. No obligation. Our team will contact you shortly.
      </p>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={submitting}>
        {submitting ? "Submitting…" : "Start My Search"}
      </Button>
    </form>
  );
}
