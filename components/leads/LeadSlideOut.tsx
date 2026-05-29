"use client";

import { useLeadForm } from "./LeadProvider";
import { LeadCaptureForm } from "./LeadCaptureForm";

export function LeadSlideOut() {
  const { panel, isOpen, closeLeadForm } = useLeadForm();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-dark/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
        onClick={closeLeadForm}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-slideout-title"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border-gray bg-dark px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              DLF Auto Sales
            </p>
            <h2
              id="lead-slideout-title"
              className="mt-1 font-display text-xl font-bold uppercase text-white sm:text-2xl"
            >
              {panel?.title ?? "Contact Us"}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeLeadForm}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close form"
          >
            <span className="text-2xl leading-none" aria-hidden>
              ×
            </span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          {panel && (
            <LeadCaptureForm
              key={`${panel.intent}-${panel.source}-${panel.defaultVehicle}`}
              intent={panel.intent}
              source={panel.source}
              defaultVehicle={panel.defaultVehicle}
              defaultMessage={panel.defaultMessage}
            />
          )}
        </div>
      </aside>
    </>
  );
}
