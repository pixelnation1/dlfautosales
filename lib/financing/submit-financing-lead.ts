import type { FinancingPreQualificationLead } from "./types";

export type SubmitFinancingLeadResult = {
  success: boolean;
  error?: string;
};

/**
 * Submit a financing pre-qualification lead.
 *
 * Currently logs to the console. Replace the body of this function to send
 * to email (Resend/SendGrid), a CRM webhook, or Supabase without changing form UI.
 */
export async function submitFinancingLead(
  lead: FinancingPreQualificationLead
): Promise<SubmitFinancingLeadResult> {
  try {
    // eslint-disable-next-line no-console -- intentional until backend is connected
    console.log("[DLF Financing Pre-Qualification]", lead);

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to submit your request.";
    return { success: false, error: message };
  }
}
