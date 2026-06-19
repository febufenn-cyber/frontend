"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { site, footer } from "@/data/site";
import { KnotMark, Seal } from "@/lib/icons";

export default function Footer() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <footer ref={root} className="relative border-t border-line bg-night-sunk pt-20 pb-10">
      <div className="shell">
        {/* Trust & Safety notice — mirrored from the source app */}
        <div className="reveal rounded-[var(--radius-lg)] border border-line bg-night-raised p-8 md:p-10">
          <h3 className="inline-flex items-center gap-2.5 display text-bone" style={{ fontSize: "1.4rem" }}>
            <span className="text-sage"><Seal size={22} /></span>
            {footer.trustTitle}
          </h3>
          <p className="mt-4 max-w-3xl text-bone-dim">{footer.trustBody}</p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {footer.trustPoints.map((pt) => (
              <li key={pt} className="flex items-start gap-3 text-bone">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron" />
                {pt}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-bone-dim">{footer.trustClose}</p>
        </div>

        {/* link columns */}
        <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#main" className="inline-flex items-center gap-2.5 text-bone" data-cursor>
              <span className="text-saffron"><KnotMark size={28} /></span>
              <span className="display" style={{ fontSize: "1.5rem" }}>{site.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-bone-dim">
              India&apos;s verified pet marketplace — papers, vaccinations and ratings in the open. Made in {site.address.city}.
            </p>
          </div>
          {footer.columns.map((col) => (
            <nav key={col.title} className="flex flex-col gap-3">
              <span className="mono-label text-brass">{col.title}</span>
              {col.links.map((l) => (
                <a key={l} href="#" className="text-sm text-bone-dim transition-colors hover:text-bone">{l}</a>
              ))}
            </nav>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-line pt-7 md:flex-row">
          <p className="mono-label text-bone-dim">
            © {site.founded} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footer.legal.map((l) => (
              <a key={l} href="#" className="mono-label text-bone-dim transition-colors hover:text-bone">{l}</a>
            ))}
          </div>
          <a
            href="https://robofox.online"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor
            className="robofox group inline-flex items-center gap-2 mono-label text-bone-dim transition-colors hover:text-saffron"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral transition-transform duration-500 group-hover:scale-150" />
            Crafted by Robofox AI
          </a>
        </div>
      </div>
    </footer>
  );
}
