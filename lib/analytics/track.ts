import {
  ANALYTICS_EVENTS,
  type AnalyticsEventName,
  type AnalyticsEventPayload,
} from "./events";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Central analytics hook. Push to dataLayer / gtag when present;
 * always logs in development for verification.
 */
export function trackEvent(
  event: AnalyticsEventName,
  properties: Omit<AnalyticsEventPayload, "event"> = {}
): void {
  const payload: AnalyticsEventPayload = { event, ...properties };

  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event,
      ...properties,
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", event, properties);
    }
  }

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console -- analytics prep
    console.log("[DLF Analytics]", payload);
  }
}

export function trackFinancingClick(source: string, label?: string) {
  trackEvent(ANALYTICS_EVENTS.FINANCING_CLICK, { source, label });
}

export function trackPhoneClick(source: string) {
  trackEvent(ANALYTICS_EVENTS.PHONE_CLICK, { source });
}

export function trackTradeInClick(source: string) {
  trackEvent(ANALYTICS_EVENTS.TRADE_IN_CLICK, { source });
}

export function trackInventoryClick(source: string) {
  trackEvent(ANALYTICS_EVENTS.INVENTORY_CLICK, { source });
}

export function trackVehicleInquiryClick(source: string, label?: string) {
  trackEvent(ANALYTICS_EVENTS.VEHICLE_INQUIRY_CLICK, { source, label });
}

export function trackLeadFormOpen(intent: string, source: string) {
  trackEvent(ANALYTICS_EVENTS.LEAD_FORM_OPEN, { intent, source });
}

export function trackLeadFormSubmit(intent: string, source: string) {
  trackEvent(ANALYTICS_EVENTS.LEAD_FORM_SUBMIT, { intent, source });
}
