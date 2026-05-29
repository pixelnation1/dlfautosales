"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { SITE } from "@/lib/constants";
import {
  FINANCING_DISCLAIMER_COPY,
  FINANCING_PRE_QUALIFY_FORM_ID,
  FINANCING_SUCCESS_MESSAGE,
  FINANCING_TRUST_COPY,
} from "@/lib/financing/constants";
import { submitFinancingLead } from "@/lib/financing/submit-financing-lead";
import {
  CREDIT_SITUATIONS,
  EMPLOYMENT_STATUSES,
  MONTHLY_INCOME_RANGES,
  type CreditSituation,
  type FinancingLeadSource,
} from "@/lib/financing/types";

type FinancingPreQualificationFormProps = {
  variant?: "full" | "compact";
  defaultVehicle?: string;
  source?: FinancingLeadSource;
};

const inputClass =
  "mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-base text-dark outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary";
const labelClass =
  "text-xs font-semibold uppercase tracking-wide text-text-dark/70";

export function FinancingPreQualificationForm({
  variant = "full",
  defaultVehicle = "",
  source = "financing-page",
}: FinancingPreQualificationFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const errorId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState(defaultVehicle);

  useEffect(() => {
    setVehicle(defaultVehicle);
  }, [defaultVehicle]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== `#${FINANCING_PRE_QUALIFY_FORM_ID}`) return;

    const el = document.getElementById(FINANCING_PRE_QUALIFY_FORM_ID);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });

    const timer = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 400);

    return () => window.clearTimeout(timer);
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await submitFinancingLead({
      firstName: String(data.get("firstName") ?? "").trim(),
      lastName: String(data.get("lastName") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      vehicleInterestedIn: String(data.get("vehicleInterestedIn") ?? "").trim(),
      downPaymentAmount: String(data.get("downPaymentAmount") ?? "").trim(),
      monthlyIncomeRange: String(data.get("monthlyIncomeRange") ?? ""),
      employmentStatus: String(data.get("employmentStatus") ?? ""),
      creditSituation: String(data.get("creditSituation") ?? "") as CreditSituation,
      message: String(data.get("message") ?? "").trim(),
      source,
      submittedAt: new Date().toISOString(),
    });

    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      form.reset();
      setVehicle(defaultVehicle);
      return;
    }

    setError(result.error ?? "Something went wrong. Please try again or call us.");
  }

  const isCompact = variant === "compact";
  const wrapperClass = isCompact
    ? "rounded-xl border border-border-gray bg-white p-5 sm:p-6"
    : "rounded-2xl border border-border-gray bg-white p-6 sm:p-8";

  if (submitted) {
    return (
      <div
        id={FINANCING_PRE_QUALIFY_FORM_ID}
        className={`${wrapperClass} scroll-mt-28 text-center`}
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
          ✓
        </div>
        <h2
          className={`mt-4 font-display font-bold uppercase text-dark ${
            isCompact ? "text-xl" : "text-2xl"
          }`}
        >
          Request Received
        </h2>
        <p className="mt-3 text-text-dark/75">{FINANCING_SUCCESS_MESSAGE}</p>
        <p className="mt-4 text-sm text-text-dark/60">
          Questions? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-primary">
            {SITE.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div
      id={FINANCING_PRE_QUALIFY_FORM_ID}
      className={`${wrapperClass} scroll-mt-28`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {isCompact ? "Get Pre-Qualified" : "Financing Pre-Qualification"}
      </p>
      <h2
        className={`mt-2 font-display font-bold uppercase text-dark ${
          isCompact ? "text-xl" : "text-2xl"
        }`}
      >
        {isCompact ? "Start Your Approval Conversation" : "Get Pre-Qualified Today"}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-text-dark/75">
        {FINANCING_TRUST_COPY}
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
        noValidate
      >
        <div className={`grid gap-4 ${isCompact ? "" : "sm:grid-cols-2"}`}>
          <label className="block">
            <span className={labelClass}>First Name *</span>
            <input
              ref={firstFieldRef}
              type="text"
              name="firstName"
              required
              autoComplete="given-name"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Last Name *</span>
            <input
              type="text"
              name="lastName"
              required
              autoComplete="family-name"
              className={inputClass}
            />
          </label>
        </div>

        <div className={`grid gap-4 ${isCompact ? "" : "sm:grid-cols-2"}`}>
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
        </div>

        <label className="block">
          <span className={labelClass}>Vehicle Interested In</span>
          <input
            type="text"
            name="vehicleInterestedIn"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
            className={inputClass}
          />
        </label>

        <div className={`grid gap-4 ${isCompact ? "" : "sm:grid-cols-2"}`}>
          <label className="block">
            <span className={labelClass}>Down Payment Amount</span>
            <input
              type="number"
              name="downPaymentAmount"
              min={0}
              step={100}
              inputMode="decimal"
              className={inputClass}
            />
          </label>
          <label className="block">
            <span className={labelClass}>Monthly Income Range *</span>
            <select
              name="monthlyIncomeRange"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select range
              </option>
              {MONTHLY_INCOME_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={`grid gap-4 ${isCompact ? "" : "sm:grid-cols-2"}`}>
          <label className="block">
            <span className={labelClass}>Employment Status *</span>
            <select
              name="employmentStatus"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select status
              </option>
              {EMPLOYMENT_STATUSES.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Credit Situation *</span>
            <select
              name="creditSituation"
              required
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select credit situation
              </option>
              {CREDIT_SITUATIONS.map((situation) => (
                <option key={situation} value={situation}>
                  {situation}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            rows={isCompact ? 3 : 4}
            className={`${inputClass} resize-y`}
          />
        </label>

        <p className="text-[11px] leading-relaxed text-text-dark/55">
          {FINANCING_DISCLAIMER_COPY}
        </p>

        {error && (
          <p
            id={errorId}
            className="rounded-md border border-primary/30 bg-primary/5 px-3 py-2 text-sm text-primary"
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-md bg-primary px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/25 transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Submit Financing Request"}
        </button>
      </form>
    </div>
  );
}
