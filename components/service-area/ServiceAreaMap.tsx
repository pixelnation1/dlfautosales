import { SITE } from "@/lib/constants";

type ServiceAreaMapProps = {
  mapQuery: string;
  city: string;
};

export function ServiceAreaMap({ mapQuery, city }: ServiceAreaMapProps) {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE.address
  )}&t=&z=12&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-border-gray bg-white">
      <div className="border-b border-border-gray bg-light-gray px-5 py-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          Visit Our Lot
        </p>
        <p className="mt-1 font-display text-lg font-bold uppercase text-dark">
          Serving {city} from Emporia
        </p>
        <p className="mt-1 text-sm text-text-dark/70">{SITE.address}</p>
      </div>
      <iframe
        title={`DLF Auto Sales — directions for ${city} customers`}
        src={embedSrc}
        className="h-64 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-wrap gap-4 border-t border-border-gray px-5 py-4 text-sm">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline"
        >
          Open in Google Maps →
        </a>
        <a href={SITE.phoneHref} className="font-semibold text-dark hover:text-primary">
          {SITE.phone}
        </a>
      </div>
    </div>
  );
}
