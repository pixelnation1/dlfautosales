"use client";

import Link from "next/link";
import { SITE, ROUTES } from "@/lib/constants";
import {
  trackFinancingClick,
  trackInventoryClick,
  trackPhoneClick,
} from "@/lib/analytics/track";
import { useLeadForm } from "./LeadProvider";

const SOURCE = "mobile_sticky";

export function MobileStickyBar() {
  const { openLeadForm } = useLeadForm();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-dark/95 shadow-[0_-4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid min-h-[3.75rem] grid-cols-3 divide-x divide-white/10">
        <a
          href={SITE.phoneHref}
          onClick={() => trackPhoneClick(SOURCE)}
          className="flex min-h-[60px] flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-colors active:bg-white/10"
        >
          <PhoneIcon />
          <span className="text-[11px] font-bold uppercase tracking-wide text-white">
            Call Now
          </span>
        </a>
        <Link
          href={ROUTES.inventory}
          onClick={() => trackInventoryClick(SOURCE)}
          className="flex min-h-[60px] flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-colors active:bg-white/10"
        >
          <CarIcon />
          <span className="text-[11px] font-bold uppercase tracking-wide text-white">
            View Inventory
          </span>
        </Link>
        <button
          type="button"
          onClick={() => {
            trackFinancingClick(SOURCE);
            openLeadForm({ intent: "financing", source: SOURCE });
          }}
          className="flex min-h-[60px] flex-col items-center justify-center gap-1 bg-primary px-2 py-3 text-center transition-colors active:bg-primary-hover"
        >
          <CheckIcon />
          <span className="text-[11px] font-bold uppercase tracking-wide text-white">
            Get Approved
          </span>
        </button>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-dark/95" aria-hidden />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-6 w-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H4m9 0h2l3-7h2a1 1 0 011 1v5h-3"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-6 w-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
