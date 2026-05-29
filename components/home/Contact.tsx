"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-light-gray py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Visit DLF Auto Sales Today"
          description="Stop by the lot, give us a call, or send a message — we're ready to help you find your next vehicle and get you approved."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border-gray bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Phone
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 block text-xl font-bold text-dark hover:text-primary"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="rounded-xl border border-border-gray bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Hours
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-dark/80">
                  {SITE.hours}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-border-gray bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Address
              </p>
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

          <div className="rounded-xl border border-border-gray bg-white p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                  ✓
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase text-dark">
                  Message Received
                </h3>
                <p className="mt-2 max-w-sm text-text-dark/70">
                  Thanks for reaching out! A team member will contact you shortly.
                  For faster service, call{" "}
                  <a href={SITE.phoneHref} className="font-semibold text-primary">
                    {SITE.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold uppercase text-dark">
                  Send a Message
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
                      Name *
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
                      Phone *
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      autoComplete="tel"
                      className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
                    Email *
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
                    Vehicle Interested In
                  </span>
                  <input
                    type="text"
                    name="vehicle"
                    className="mt-1 w-full rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wide text-text-dark/70">
                    Message *
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-1 w-full resize-y rounded-md border border-border-gray px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </label>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
