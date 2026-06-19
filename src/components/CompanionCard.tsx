"use client";

import { useRef } from "react";
import type { ResolvedCompanion } from "@/data/companions";
import { inr } from "@/lib/format";
import { Seal, Heart, Star, Vaccine, House, Trophy } from "@/lib/icons";

type Props = {
  companion: ResolvedCompanion;
  faved: boolean;
  onFav: (c: ResolvedCompanion, cardEl: HTMLElement) => void;
};

export default function CompanionCard({ companion: c, faved, onFav }: Props) {
  const art = useRef<HTMLElement>(null);

  return (
    <article
      ref={art}
      data-cursor
      className="companion-card group relative shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-line bg-night-raised"
      style={{ width: 300 }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={c.image}
          alt={`${c.name}, a ${c.breed} in ${c.city}`}
          loading="lazy"
          className="duotone h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-lift)] group-hover:scale-[1.05]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,16,9,0.82) 4%, rgba(12,16,9,0) 46%)",
          }}
        />

        {c.verifiedSeller && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-line bg-night-sunk/80 px-2.5 py-1 text-[0.66rem] font-bold text-sage backdrop-blur">
            <span className="seal">
              <Seal size={13} />
            </span>
            Verified
          </span>
        )}

        <button
          type="button"
          aria-label={faved ? "Remove from shortlist" : "Add to shortlist"}
          aria-pressed={faved}
          data-cursor="fav"
          onClick={() => art.current && onFav(c, art.current)}
          className="fav-btn absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-line bg-night-sunk/80 backdrop-blur transition-transform active:scale-90"
          style={{ color: faved ? "var(--color-coral)" : "var(--color-bone)" }}
        >
          <Heart size={17} fill={faved ? "currentColor" : "none"} />
        </button>

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="mono-label text-bone-dim">{c.gender} · {c.ageLabel}</div>
          <div
            className="display rounded-[var(--radius-sm)] bg-bone px-2.5 py-1 text-night"
            style={{ fontSize: "1.05rem", fontWeight: 700 }}
          >
            {inr(c.price)}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <div className="mono-label text-brass">
          {c.breed} <span className="text-bone-dim">· {c.city}</span>
        </div>
        <h3 className="display text-bone" style={{ fontSize: "1.5rem" }}>
          {c.name}
        </h3>

        <div className="flex flex-wrap gap-1.5">
          {c.vaccinated && <Chip glyph={<Vaccine size={12} />} label="Vaccinated" tone="var(--color-sage)" />}
          {c.homeRaised && <Chip glyph={<House size={12} />} label="Home raised" tone="var(--color-coral)" />}
          {c.kciCertified && <Chip glyph={<Trophy size={12} />} label="KCI" tone="var(--color-saffron)" />}
        </div>

        <div className="mt-1 flex items-center justify-between border-t border-line pt-3">
          <span className="truncate text-[0.82rem] font-semibold text-bone">
            {c.seller.storeName}
          </span>
          <span className="inline-flex items-center gap-1 text-[0.82rem] font-bold text-bone">
            <span className="text-saffron">
              <Star size={13} />
            </span>
            {c.seller.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}

function Chip({ glyph, label, tone }: { glyph: React.ReactNode; label: string; tone: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-[7px] border px-1.5 py-0.5 text-[0.66rem] font-semibold"
      style={{ color: tone, borderColor: "var(--color-line)", background: "rgba(243,236,221,0.03)" }}
    >
      {glyph}
      {label}
    </span>
  );
}
