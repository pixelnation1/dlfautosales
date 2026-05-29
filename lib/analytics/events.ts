/** Analytics event names — wire to GA4, Meta Pixel, etc. in track.ts */
export const ANALYTICS_EVENTS = {
  FINANCING_CLICK: "financing_click",
  PHONE_CLICK: "phone_click",
  TRADE_IN_CLICK: "trade_in_click",
  INVENTORY_CLICK: "inventory_click",
  VEHICLE_INQUIRY_CLICK: "vehicle_inquiry_click",
  LEAD_FORM_OPEN: "lead_form_open",
  LEAD_FORM_SUBMIT: "lead_form_submit",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type AnalyticsEventPayload = {
  event: AnalyticsEventName;
  /** Where the action originated (e.g. mobile_sticky, desktop_fab, vdp) */
  source?: string;
  /** Lead intent when relevant */
  intent?: string;
  /** Optional vehicle or page context */
  label?: string;
};
