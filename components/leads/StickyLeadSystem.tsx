"use client";

import { MobileStickyBar } from "./MobileStickyBar";
import { DesktopFloatingActions } from "./DesktopFloatingActions";

/** Site-wide conversion CTAs — mobile bar + desktop FAB */
export function StickyLeadSystem() {
  return (
    <>
      <MobileStickyBar />
      <DesktopFloatingActions />
    </>
  );
}
