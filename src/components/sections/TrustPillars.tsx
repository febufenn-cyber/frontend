"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { pillars, badges } from "@/data/trust";

export default function TrustPillars() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="trust" className="relative border-t border-line bg-night-sunk py-28 md:py-36">
      <div className="shell">
        <div className="mb-3 mono-label text-brass">/04 — Why verified</div>
        <h2 className="reveal display max-w-3xl text-bone" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
          Trust isn&apos;t a badge. It&apos;s the whole point.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.no} className="reveal flex flex-col gap-5 bg-night p-8">
              <div className="flex items-baseline justify-between">
                <span className="mono-label text-saffron">{p.no}</span>
                <span className="display text-brass" style={{ fontSize: "1.1rem" }}>
                  {p.stat}
                  <span className="ml-2 mono-label text-bone-dim">{p.statLabel}</span>
                </span>
              </div>
              <h3 className="display text-bone" style={{ fontSize: "1.55rem", lineHeight: 1.1 }}>
                {p.title}
              </h3>
              <p className="text-bone-dim">{p.body}</p>
            </div>
          ))}
        </div>

        {/* the five listing signals */}
        <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <span className="mono-label text-bone-dim">Every listing carries</span>
          {badges.map((b) => (
            <span key={b.key} className="inline-flex items-center gap-2 text-sm font-semibold text-bone">
              <span style={{ color: b.accent }}>
                <b.glyph size={18} />
              </span>
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
