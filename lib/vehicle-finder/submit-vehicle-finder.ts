import type { VehicleFinderLead } from "./types";

export type SubmitVehicleFinderResult = {
  success: boolean;
  error?: string;
};

/**
 * Submit a vehicle finder request.
 * Replace with CRM webhook, email API, or database when ready.
 */
export async function submitVehicleFinder(
  lead: VehicleFinderLead
): Promise<SubmitVehicleFinderResult> {
  try {
    // eslint-disable-next-line no-console -- intentional until backend is connected
    console.log("[DLF Vehicle Finder]", lead);

    return { success: true };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to submit your request.";
    return { success: false, error: message };
  }
}
