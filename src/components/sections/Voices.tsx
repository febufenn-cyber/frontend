"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { testimonials } from "@/data/testimonials";
import { petImage } from "@/data/companions";
import { Star } from "@/lib/icons";

export default function Voices() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const [lead, ...rest] = testimonials;

  return (
    <section ref={root} id="voices" className="relative py-28 md:py-36">
      <div className="shell">
        <div className="mb-3 mono-label text-brass">/06 — Voices</div>
        <h2 className="reveal display max-w-3xl text-bone" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
          Families found here. So did breeders.
        </h2>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {/* lead quote */}
          <figure className="reveal flex flex-col justify-between rounded-[var(--radius-lg)] border border-line bg-night-raised p-8 lg:col-span-3">
            <blockquote
              className="display text-bone"
              style={{ fontSize: "clamp(1.4rem,2.4vw,2rem)", lineHeight: 1.22, fontWeight: 500 }}
            >
              <span className="text-saffron">“</span>
              {lead.quote}
              <span className="text-saffron">”</span>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={petImage(lead.imageSeed, 120, 120)}
                alt={lead.name}
                loading="lazy"
                className="duotone h-12 w-12 rounded-full object-cover"
                style={{ border: "1px solid var(--color-line)" }}
              />
              <div>
                <div className="font-bold text-bone">{lead.name}</div>
                <div className="mono-label text-bone-dim">{lead.role} · {lead.city}</div>
              </div>
              <span className="ml-auto inline-flex gap-0.5 text-saffron">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} />)}
              </span>
            </figcaption>
          </figure>

          {/* supporting */}
          <div className="grid gap-4 lg:col-span-2">
            {rest.map((t) => (
              <figure key={t.name} className="reveal flex flex-col gap-4 rounded-[var(--radius-lg)] border border-line bg-night-raised p-6">
                <blockquote className="text-bone-dim" style={{ lineHeight: 1.5 }}>{t.quote}</blockquote>
                <figcaption className="mt-auto flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={petImage(t.imageSeed, 100, 100)}
                    alt={t.name}
                    loading="lazy"
                    className="duotone h-10 w-10 rounded-full object-cover"
                    style={{ border: "1px solid var(--color-line)" }}
                  />
                  <div>
                    <div className="text-sm font-bold text-bone">{t.name}</div>
                    <div className="mono-label text-bone-dim">{t.companion}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
