import { SITE } from "@/lib/constants";

export function ContactInfo() {
  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border-gray bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Phone</p>
          <a
            href={SITE.phoneHref}
            className="mt-2 block text-xl font-bold text-dark hover:text-primary"
          >
            {SITE.phone}
          </a>
        </div>
        <div className="rounded-xl border border-border-gray bg-white p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Hours</p>
          <p className="mt-2 text-sm leading-relaxed text-text-dark/80">{SITE.hours}</p>
        </div>
      </div>

      <div className="rounded-xl border border-border-gray bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Address</p>
        <p className="mt-2 font-medium text-text-dark">{SITE.address}</p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
        >
          Get directions →
        </a>
      </div>

      <div className="overflow-hidden rounded-xl border border-border-gray bg-white">
        <iframe
          title="DLF Auto Sales location"
          src={mapsEmbedSrc}
          className="h-64 w-full border-0 sm:h-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
