export type LeadIntent = "financing" | "trade-in" | "vehicle-inquiry" | "general";

export type LeadFormData = {
  name: string;
  phone: string;
  email: string;
  interestedVehicle: string;
  message: string;
  intent: LeadIntent;
  source: string;
};

export type OpenLeadFormOptions = {
  intent?: LeadIntent;
  defaultVehicle?: string;
  defaultMessage?: string;
  title?: string;
  /** Analytics source identifier */
  source: string;
};
