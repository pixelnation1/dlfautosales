import { CREDIT_SITUATIONS } from "@/lib/financing/types";

export const VEHICLE_TYPES = ["Car", "Truck", "SUV", "Van"] as const;

export type VehicleType = (typeof VEHICLE_TYPES)[number];

export { CREDIT_SITUATIONS };

export type VehicleFinderLead = {
  name: string;
  phone: string;
  email: string;
  budget: string;
  desiredMonthlyPayment: string;
  vehicleTypes: VehicleType[];
  preferredBrands: string;
  creditSituation: string;
  mustHaveFeatures: string;
  additionalNotes: string;
  source: string;
};
