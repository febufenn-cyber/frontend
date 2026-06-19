"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { sellers } from "@/data/sellers";
import { petImage } from "@/data/companions";
import { phoneIN } from "@/lib/format";
import { Seal, Star, Pin } from "@/lib/icons";

export default function FeaturedSellers() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="sellers" className="relative border-y border-line bg-night-sunk py-28 md:py-36">
      <div className="shell">
        <div className="mb-3 mono-label text-brass">/05 — Featured sellers</div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal display max-w-2xl text-bone" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
            The people behind the listings.
          </h2>
          <p className="reveal max-w-sm text-bone-dim">
            Every featured seller is ID-verified, address-checked and rated by the families they&apos;ve placed companions with.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sellers.map((s) => (
            <article
              key={s.slug}
              data-cursor
              className="reveal group flex flex-col gap-4 rounded-[var(--radius-lg)] border border-line bg-night-raised p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={petImage(s.imageSeed, 120, 120)}
                  alt={s.storeName}
                  loading="lazy"
                  className="duotone h-14 w-14 rounded-full object-cover"
                  style={{ border: "1px solid var(--color-line)" }}
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="truncate display text-bone" style={{ fontSize: "1.25rem" }}>{s.storeName}</h3>
                    {s.isVerifiedSeller && <span className="text-sage"><Seal size={15} /></span>}
                  </div>
                  <p className="mono-label text-bone-dim">{s.specialty}</p>
                </div>
              </div>

              <p className="text-sm text-bone-dim">{s.name} · since {s.since}</p>

              <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-bone-dim">
                  <Pin size={14} /> {s.city}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-bone">
                  <span className="text-saffron"><Star size={14} /></span>
                  {s.rating.toFixed(1)}
                  <span className="font-normal text-bone-dim">({s.reviews})</span>
                </span>
              </div>

              <p className="mono-label text-brass">{phoneIN(s.phone)} · {s.listings} listings</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
