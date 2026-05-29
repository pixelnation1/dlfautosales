"use client";

import Link from "next/link";
import { SITE, ROUTES } from "@/lib/constants";

export function MobileStickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-dark/95 backdrop-blur-md lg:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-center transition-colors active:bg-white/10"
        >
          <PhoneIcon />
          <span className="text-[10px] font-bold uppercase tracking-wide text-white">
            Call Now
          </span>
        </a>
        <Link
          href={ROUTES.inventory}
          className="flex flex-col items-center justify-center gap-0.5 py-3 text-center transition-colors active:bg-white/10"
        >
          <CarIcon />
          <span className="text-[10px] font-bold uppercase tracking-wide text-white">
            Inventory
          </span>
        </Link>
        <Link
          href={ROUTES.financing}
          className="flex flex-col items-center justify-center gap-0.5 bg-primary py-3 text-center transition-colors active:bg-primary-hover"
        >
          <CheckIcon />
          <span className="text-[10px] font-bold uppercase tracking-wide text-white">
            Get Approved
          </span>
        </Link>
      </div>
      <div className="h-[env(safe-area-inset-bottom)] bg-dark/95" />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10m10 0H4m9 0h2l3-7h2a1 1 0 011 1v5h-3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
