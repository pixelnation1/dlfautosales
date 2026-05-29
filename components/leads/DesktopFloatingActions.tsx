"use client";

import { useState, type ReactNode } from "react";
import { SITE } from "@/lib/constants";
import {
  trackFinancingClick,
  trackPhoneClick,
  trackTradeInClick,
} from "@/lib/analytics/track";
import { useLeadForm } from "./LeadProvider";

const SOURCE = "desktop_fab";

type FabAction = {
  id: string;
  label: string;
  icon: ReactNode;
  primary?: boolean;
  onClick: () => void;
};

export function DesktopFloatingActions() {
  const [expanded, setExpanded] = useState(false);
  const { openLeadForm } = useLeadForm();

  const actions: FabAction[] = [
    {
      id: "financing",
      label: "Get Approved",
      primary: true,
      icon: <CheckIcon />,
      onClick: () => {
        trackFinancingClick(SOURCE);
        openLeadForm({ intent: "financing", source: SOURCE });
        setExpanded(false);
      },
    },
    {
      id: "phone",
      label: "Call Now",
      icon: <PhoneIcon />,
      onClick: () => {
        trackPhoneClick(SOURCE);
        window.location.href = SITE.phoneHref;
        setExpanded(false);
      },
    },
    {
      id: "trade-in",
      label: "Trade-In",
      icon: <SwapIcon />,
      onClick: () => {
        trackTradeInClick(SOURCE);
        openLeadForm({ intent: "trade-in", source: SOURCE });
        setExpanded(false);
      },
    },
  ];

  return (
    <div
      className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:block"
      aria-label="Quick contact actions"
    >
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <div
          className={`flex flex-col items-end gap-2 transition-all duration-300 ${
            expanded
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          {actions.map((action, index) => (
            <button
              key={action.id}
              type="button"
              onClick={action.onClick}
              style={{ transitionDelay: expanded ? `${index * 40}ms` : "0ms" }}
              className={`group flex items-center gap-3 rounded-full border border-border-gray bg-white py-2 pl-4 pr-2 shadow-lg transition-all duration-200 hover:scale-[1.03] hover:shadow-xl ${
                action.primary ? "border-primary/30" : ""
              }`}
            >
              <span className="text-sm font-bold uppercase tracking-wide text-dark">
                {action.label}
              </span>
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                  action.primary
                    ? "bg-primary text-white group-hover:bg-primary-hover"
                    : "bg-dark text-white group-hover:bg-dark/90"
                }`}
              >
                {action.icon}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          aria-label={expanded ? "Close quick actions" : "Open quick actions"}
          className={`flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-xl ${
            expanded ? "rotate-45" : ""
          }`}
        >
          <span className="text-3xl font-light leading-none" aria-hidden>
            +
          </span>
        </button>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SwapIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
  );
}
