import type { LeadIntent } from "./types";

export const LEAD_INTENT_TITLES: Record<LeadIntent, string> = {
  financing: "Get Approved",
  "trade-in": "Trade-In Inquiry",
  "vehicle-inquiry": "Ask About This Vehicle",
  general: "Contact DLF Auto Sales",
};

export const LEAD_INTENT_DEFAULT_MESSAGES: Record<LeadIntent, string> = {
  financing:
    "I would like to get pre-approved for financing on a used vehicle.",
  "trade-in": "I would like a trade-in appraisal for my current vehicle.",
  "vehicle-inquiry": "I have questions about this vehicle and would like more information.",
  general: "I would like to speak with your team about a vehicle.",
};

export function getLeadFormTitle(intent: LeadIntent, override?: string): string {
  return override ?? LEAD_INTENT_TITLES[intent];
}

export function getDefaultLeadMessage(
  intent: LeadIntent,
  override?: string
): string {
  return override ?? LEAD_INTENT_DEFAULT_MESSAGES[intent];
}
