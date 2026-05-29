"use client";

import Image from "next/image";
import { useState } from "react";
import { getVehicleName, type Vehicle } from "@/lib/data/inventory";

type VehicleGalleryProps = {
  vehicle: Vehicle;
};

export function VehicleGallery({ vehicle }: VehicleGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const title = getVehicleName(vehicle);
  const activeImage = vehicle.imageUrls[activeIndex] ?? vehicle.imageUrls[0];

  return (
    <div className="space-y-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-dark sm:aspect-[16/9]">
        <Image
          src={activeImage}
          alt={`${title} — photo ${activeIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
        <span className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
          On Lot · Stock {vehicle.stockNumber}
        </span>
      </div>

      {vehicle.imageUrls.length > 1 && (
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {vehicle.imageUrls.map((url, index) => (
            <button
              key={url}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                index === activeIndex
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-transparent opacity-80 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1}`}
              aria-current={index === activeIndex}
            >
              <Image
                src={url}
                alt=""
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
