"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { categories } from "@/data/categories";
import { petImage } from "@/data/companions";
import { inGrouping } from "@/lib/format";
import { ArrowUpRight } from "@/lib/icons";

export default function BrowseCategories() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="browse" className="relative py-28 md:py-36">
      <div className="shell">
        <div className="mb-3 mono-label text-brass">/02 — Browse by companion</div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="reveal display max-w-2xl text-bone" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
            Whatever shape your companion takes.
          </h2>
          <p className="reveal max-w-sm text-bone-dim">
            Over 4,000 verified companions across five families — from working dogs to show koi.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((c, i) => (
            <a
              key={c.key}
              href="#deck"
              data-cursor
              className={`reveal group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-line bg-night-raised p-6 transition-colors hover:border-brass ${
                i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{ minHeight: 220 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={petImage(c.imageSeed, 400, 500)}
                alt=""
                aria-hidden
                loading="lazy"
                className="duotone pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
              />
              <div className="relative flex items-center justify-between text-saffron">
                <c.glyph size={30} />
                <span className="text-bone-dim opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="relative">
                <h3 className="display text-bone" style={{ fontSize: "1.6rem" }}>{c.label}</h3>
                <p className="mt-1 text-sm text-bone-dim">{c.blurb}</p>
                <p className="mt-3 mono-label text-brass">{inGrouping(c.count)} listed</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
