export const LOAN_TERM_OPTIONS = [36, 48, 60, 72] as const;
export type LoanTermMonths = (typeof LOAN_TERM_OPTIONS)[number];

export const DEFAULT_APR = 8.9;
export const DEFAULT_LOAN_TERM: LoanTermMonths = 60;

export type PaymentCalculation = {
  monthlyPayment: number;
  financedAmount: number;
};

export function clampNonNegative(value: number): number {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

/** Caps down payment and trade-in so they cannot exceed vehicle price together. */
export function normalizePaymentInputs(
  vehiclePrice: number,
  downPayment: number,
  tradeInValue: number
): { vehiclePrice: number; downPayment: number; tradeInValue: number } {
  const price = clampNonNegative(vehiclePrice);
  const down = clampNonNegative(Math.min(downPayment, price));
  const maxTrade = Math.max(0, price - down);
  const trade = clampNonNegative(Math.min(tradeInValue, maxTrade));

  return { vehiclePrice: price, downPayment: down, tradeInValue: trade };
}

export function calculateMonthlyPayment(
  vehiclePrice: number,
  downPayment: number,
  tradeInValue: number,
  loanTermMonths: number,
  aprPercent: number
): PaymentCalculation {
  const normalized = normalizePaymentInputs(vehiclePrice, downPayment, tradeInValue);
  let financedAmount =
    normalized.vehiclePrice - normalized.downPayment - normalized.tradeInValue;
  financedAmount = Math.max(0, financedAmount);

  if (loanTermMonths <= 0) {
    return { monthlyPayment: 0, financedAmount };
  }

  if (aprPercent === 0) {
    return {
      monthlyPayment: financedAmount / loanTermMonths,
      financedAmount,
    };
  }

  const monthlyRate = aprPercent / 100 / 12;
  const monthlyPayment =
    (financedAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -loanTermMonths));

  return { monthlyPayment, financedAmount };
}

export function formatMonthlyPayment(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
