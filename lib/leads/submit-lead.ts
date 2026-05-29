import type { LeadFormData } from "./types";

export type SubmitLeadResult = {
  success: boolean;
  error?: string;
};

/**
 * Submit a slide-out lead capture form.
 * Replace with CRM webhook, email API, or database when ready.
 */
export async function submitLead(lead: LeadFormData): Promise<SubmitLeadResult> {
  try {
    // eslint-disable-next-line no-console -- intentional until backend is connected
    console.log("[DLF Lead Capture]", lead);

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to submit your request.";
    return { success: false, error: message };
  }
}
