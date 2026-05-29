"use client";

import { useMemo, useState } from "react";
import { ROUTES, SITE } from "@/lib/constants";
import {
  calculateMonthlyPayment,
  clampNonNegative,
  DEFAULT_APR,
  DEFAULT_LOAN_TERM,
  formatMonthlyPayment,
  LOAN_TERM_OPTIONS,
  normalizePaymentInputs,
  type LoanTermMonths,
} from "@/lib/payment-calculator";
import { Button } from "@/components/ui/Button";

type PaymentCalculatorProps = {
  /** Pre-filled vehicle price (e.g. from inventory). */
  initialVehiclePrice?: number;
  /** When set, secondary CTA reads “Call About This Vehicle”. */
  vehicleName?: string;
  /** Show editable vehicle price field (financing page). Hidden when price is fixed-only. */
  showVehiclePriceInput?: boolean;
  /** Link for “Apply for Financing” (e.g. #pre-qualify on vehicle pages). */
  financingHref?: string;
  className?: string;
};

function parseInput(value: string): number {
  const parsed = parseFloat(value.replace(/,/g, ""));
  return clampNonNegative(Number.isNaN(parsed) ? 0 : parsed);
}

export function PaymentCalculator({
  initialVehiclePrice = 0,
  vehicleName,
  showVehiclePriceInput = false,
  financingHref = ROUTES.financingPreQualify,
  className = "",
}: PaymentCalculatorProps) {
  const [vehiclePrice, setVehiclePrice] = useState(
    clampNonNegative(initialVehiclePrice)
  );
  const [downPayment, setDownPayment] = useState(0);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [loanTerm, setLoanTerm] = useState<LoanTermMonths>(DEFAULT_LOAN_TERM);
  const [apr, setApr] = useState(DEFAULT_APR);

  const { monthlyPayment, financedAmount } = useMemo(
    () =>
      calculateMonthlyPayment(
        vehiclePrice,
        downPayment,
        tradeInValue,
        loanTerm,
        apr
      ),
    [vehiclePrice, downPayment, tradeInValue, loanTerm, apr]
  );

  function handlePriceChange(value: string) {
    const next = parseInput(value);
    const normalized = normalizePaymentInputs(next, downPayment, tradeInValue);
    setVehiclePrice(normalized.vehiclePrice);
    setDownPayment(normalized.downPayment);
    setTradeInValue(normalized.tradeInValue);
  }

  function handleDownPaymentChange(value: string) {
    const next = parseInput(value);
    const normalized = normalizePaymentInputs(vehiclePrice, next, tradeInValue);
    setVehiclePrice(normalized.vehiclePrice);
    setDownPayment(normalized.downPayment);
    setTradeInValue(normalized.tradeInValue);
  }

  function handleTradeInChange(value: string) {
    const next = parseInput(value);
    const normalized = normalizePaymentInputs(vehiclePrice, downPayment, next);
    setVehiclePrice(normalized.vehiclePrice);
    setDownPayment(normalized.downPayment);
    setTradeInValue(normalized.tradeInValue);
  }

  const callLabel = vehicleName
    ? "Call About This Vehicle"
    : "Call About Financing";

  return (
    <div
      className={`rounded-2xl border border-border-gray bg-white p-5 shadow-sm sm:p-6 ${className}`}
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        Payment Calculator
      </p>
      <h2 className="mt-1 font-display text-lg font-bold uppercase text-dark sm:text-xl">
        Estimate Your Monthly Payment
      </h2>

      <div className="mt-5 space-y-4">
        {showVehiclePriceInput ? (
          <CalculatorField
            id="calc-vehicle-price"
            label="Vehicle Price"
            prefix="$"
            value={vehiclePrice || ""}
            onChange={handlePriceChange}
            min={0}
            step={100}
          />
        ) : (
          <div className="rounded-lg bg-light-gray px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-dark/50">
              Vehicle Price
            </p>
            <p className="text-lg font-bold text-dark">
              {formatMonthlyPayment(vehiclePrice)}
            </p>
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <CalculatorField
            id="calc-down-payment"
            label="Down Payment"
            prefix="$"
            value={downPayment || ""}
            onChange={handleDownPaymentChange}
            min={0}
            max={vehiclePrice}
            step={100}
          />
          <CalculatorField
            id="calc-trade-in"
            label="Trade-In Value"
            prefix="$"
            value={tradeInValue || ""}
            onChange={handleTradeInChange}
            min={0}
            max={Math.max(0, vehiclePrice - downPayment)}
            step={100}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="calc-loan-term"
              className="text-xs font-semibold uppercase tracking-wide text-text-dark/70"
            >
              Loan Term
            </label>
            <select
              id="calc-loan-term"
              value={loanTerm}
              onChange={(e) =>
                setLoanTerm(Number(e.target.value) as LoanTermMonths)
              }
              className="mt-1 w-full rounded-md border border-border-gray bg-white px-4 py-3 text-sm font-medium text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            >
              {LOAN_TERM_OPTIONS.map((months) => (
                <option key={months} value={months}>
                  {months} months
                </option>
              ))}
            </select>
          </div>
          <CalculatorField
            id="calc-apr"
            label="APR %"
            suffix="%"
            value={apr}
            onChange={(v) => setApr(clampNonNegative(parseInput(v)))}
            min={0}
            max={30}
            step={0.1}
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-dark p-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60">
          Estimated Monthly Payment
        </p>
        <p className="mt-2 font-display text-4xl font-extrabold text-primary sm:text-5xl">
          {vehiclePrice > 0 ? formatMonthlyPayment(monthlyPayment) : "—"}
          <span className="text-lg font-bold text-white/80">/mo</span>
        </p>
        <p className="mt-3 text-sm text-white/70">
          Total financed:{" "}
          <span className="font-semibold text-white">
            {formatMonthlyPayment(financedAmount)}
          </span>
        </p>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-text-dark/55">
        Estimated payment only. Final payment depends on approved credit, taxes,
        fees, title, lender terms, and vehicle availability.
      </p>

      <div className="mt-5 grid gap-2">
        <Button href={financingHref} size="lg" className="w-full">
          Apply for Financing
        </Button>
        <a
          href={SITE.phoneHref}
          className="inline-flex w-full items-center justify-center rounded-md border border-border-gray bg-light-gray px-6 py-3 text-sm font-semibold uppercase tracking-wide text-dark transition-colors hover:border-primary hover:text-primary"
        >
          {callLabel}
        </a>
      </div>
    </div>
  );
}

type CalculatorFieldProps = {
  id: string;
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
};

function CalculatorField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max,
  step = 1,
}: CalculatorFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wide text-text-dark/70"
      >
        {label}
      </label>
      <div className="relative mt-1">
        {prefix && (
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-text-dark/50">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-md border border-border-gray py-3 text-sm text-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary ${
            prefix ? "pl-8 pr-4" : suffix ? "pl-4 pr-8" : "px-4"
          }`}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-text-dark/50">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
