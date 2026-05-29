export const CREDIT_SITUATIONS = [
  "Good credit",
  "Fair credit",
  "Bad credit",
  "No credit",
  "Rebuilding credit",
] as const;

export type CreditSituation = (typeof CREDIT_SITUATIONS)[number];

export const MONTHLY_INCOME_RANGES = [
  "Under $2,000",
  "$2,000 – $3,499",
  "$3,500 – $4,999",
  "$5,000 – $6,999",
  "$7,000+",
  "Prefer not to say",
] as const;

export type MonthlyIncomeRange = (typeof MONTHLY_INCOME_RANGES)[number];

export const EMPLOYMENT_STATUSES = [
  "Employed full-time",
  "Employed part-time",
  "Self-employed",
  "Retired",
  "Student",
  "Unemployed",
  "Other",
] as const;

export type EmploymentStatus = (typeof EMPLOYMENT_STATUSES)[number];

export type FinancingLeadSource = "financing-page" | "vehicle-detail";

export type FinancingPreQualificationLead = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  vehicleInterestedIn: string;
  downPaymentAmount: string;
  monthlyIncomeRange: string;
  employmentStatus: string;
  creditSituation: CreditSituation;
  message: string;
  source: FinancingLeadSource;
  submittedAt: string;
};
