"use client";

import { trackVehicleInquiryClick } from "@/lib/analytics/track";
import { useLeadForm } from "./LeadProvider";

type AskAboutVehicleButtonProps = {
  vehicleName: string;
  className?: string;
  variant?: "primary" | "secondary";
};

const SOURCE = "vdp";

export function AskAboutVehicleButton({
  vehicleName,
  className = "",
  variant = "secondary",
}: AskAboutVehicleButtonProps) {
  const { openLeadForm } = useLeadForm();

  const base =
    "inline-flex w-full items-center justify-center rounded-md px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variantClass =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25"
      : "border-2 border-dark bg-white text-dark hover:bg-light-gray";

  return (
    <button
      type="button"
      className={`${base} ${variantClass} ${className}`}
      onClick={() => {
        trackVehicleInquiryClick(SOURCE, vehicleName);
        openLeadForm({
          intent: "vehicle-inquiry",
          defaultVehicle: vehicleName,
          source: SOURCE,
        });
      }}
    >
      Ask About This Vehicle
    </button>
  );
}
