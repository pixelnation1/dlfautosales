"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { trackLeadFormOpen } from "@/lib/analytics/track";
import type { LeadIntent, OpenLeadFormOptions } from "@/lib/leads/types";
import {
  getDefaultLeadMessage,
  getLeadFormTitle,
} from "@/lib/leads/intent-copy";
import { LeadSlideOut } from "./LeadSlideOut";

type LeadPanelState = {
  intent: LeadIntent;
  title: string;
  defaultVehicle: string;
  defaultMessage: string;
  source: string;
};

type LeadContextValue = {
  isOpen: boolean;
  openLeadForm: (options: OpenLeadFormOptions) => void;
  closeLeadForm: () => void;
  panel: LeadPanelState | null;
};

const LeadContext = createContext<LeadContextValue | null>(null);

export function LeadProvider({ children }: { children: ReactNode }) {
  const [panel, setPanel] = useState<LeadPanelState | null>(null);

  const closeLeadForm = useCallback(() => {
    setPanel(null);
  }, []);

  const openLeadForm = useCallback((options: OpenLeadFormOptions) => {
    const intent = options.intent ?? "general";
    const next: LeadPanelState = {
      intent,
      title: getLeadFormTitle(intent, options.title),
      defaultVehicle: options.defaultVehicle ?? "",
      defaultMessage: getDefaultLeadMessage(intent, options.defaultMessage),
      source: options.source,
    };
    trackLeadFormOpen(intent, options.source);
    setPanel(next);
  }, []);

  useEffect(() => {
    if (!panel) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [panel]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && panel) closeLeadForm();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panel, closeLeadForm]);

  const value = useMemo(
    () => ({
      isOpen: Boolean(panel),
      openLeadForm,
      closeLeadForm,
      panel,
    }),
    [panel, openLeadForm, closeLeadForm]
  );

  return (
    <LeadContext.Provider value={value}>
      {children}
      <LeadSlideOut />
    </LeadContext.Provider>
  );
}

export function useLeadForm() {
  const ctx = useContext(LeadContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within LeadProvider");
  }
  return ctx;
}
