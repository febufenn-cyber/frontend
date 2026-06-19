"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, Draggable, SplitText, registerGsap } from "@/lib/gsap";
import { latest, type ResolvedCompanion } from "@/data/companions";
import CompanionCard from "@/components/CompanionCard";
import { Heart } from "@/lib/icons";

const STORE_KEY = "saathi-favs";

export default function MatchDeck() {
  const root = useRef<HTMLElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const tray = useRef<HTMLDivElement>(null);
  const [favs, setFavs] = useState<string[]>([]);

  // hydration-safe load
  useEffect(() => {
    try {
      setFavs(JSON.parse(localStorage.getItem(STORE_KEY) || "[]"));
    } catch {}
  }, []);

  const persist = (next: string[]) => {
    setFavs(next);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(next));
    } catch {}
  };

  const flyToTray = (cardEl: HTMLElement) => {
    const img = cardEl.querySelector("img");
    const trayEl = tray.current;
    if (!img || !trayEl) return;
    const from = img.getBoundingClientRect();
    const to = trayEl.getBoundingClientRect();
    const clone = img.cloneNode(true) as HTMLImageElement;
    Object.assign(clone.style, {
      position: "fixed",
      left: `${from.left}px`,
      top: `${from.top}px`,
      width: `${from.width}px`,
      height: `${from.height}px`,
      borderRadius: "12px",
      objectFit: "cover",
      zIndex: "80",
      pointerEvents: "none",
      margin: "0",
    });
    document.body.appendChild(clone);
    gsap.to(clone, {
      left: to.left + to.width / 2 - 22,
      top: to.top + to.height / 2 - 22,
      width: 44,
      height: 44,
      opacity: 0.4,
      duration: 0.7,
      ease: "snap",
      onComplete: () => clone.remove(),
    });
    gsap.fromTo(trayEl, { scale: 1 }, { scale: 1.14, duration: 0.18, yoyo: true, repeat: 1, ease: "snap" });
  };

  const onFav = (c: ResolvedCompanion, cardEl: HTMLElement) => {
    const has = favs.includes(c.id);
    if (has) {
      persist(favs.filter((id) => id !== c.id));
    } else {
      persist([...favs, c.id]);
      flyToTray(cardEl);
    }
    const btn = cardEl.querySelector(".fav-btn");
    if (btn && !has) gsap.fromTo(btn, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "snap" });
  };

  useGSAP(
    () => {
      registerGsap();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cards = gsap.utils.toArray<HTMLElement>(".companion-card");

      // heading line-rise
      const heading = root.current?.querySelector(".deck-title") as HTMLElement | null;
      let split: SplitText | null = null;
      if (heading && !reduce) {
        split = new SplitText(heading, { type: "lines", mask: "lines" });
        gsap.set(heading, { visibility: "visible" });
        gsap.from(split.lines, {
          yPercent: 120,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "lift",
          scrollTrigger: { trigger: heading, start: "top 85%" },
        });
      } else if (heading) {
        gsap.set(heading, { visibility: "visible" });
      }

      // seals draw on
      if (!reduce) {
        gsap.from(".companion-card .seal path, .companion-card .seal circle", {
          drawSVG: "0%",
          duration: 0.6,
          stagger: 0.04,
          scrollTrigger: { trigger: wrap.current, start: "top 80%" },
        });
      }

      // the deal — cards fan out from a stacked deck into the shelf row
      if (!reduce && cards.length) {
        gsap.set(cards, {
          xPercent: (i) => -i * 103,
          rotation: (i) => (i - 1) * 3,
          transformOrigin: "bottom center",
        });
        gsap.to(cards, {
          xPercent: 0,
          rotation: 0,
          duration: 1,
          ease: "snap",
          stagger: 0.06,
          scrollTrigger: { trigger: wrap.current, start: "top 72%" },
        });
      }

      // draggable / inertia shelf  (touch + pointer)
      const trackEl = track.current;
      const wrapEl = wrap.current;
      if (trackEl && wrapEl && !reduce) {
        const getMax = () => Math.max(0, trackEl.scrollWidth - wrapEl.clientWidth + 40);
        const drag = Draggable.create(trackEl, {
          type: "x",
          inertia: true,
          edgeResistance: 0.85,
          bounds: { minX: -getMax(), maxX: 0 },
          cursor: "grab",
          activeCursor: "grabbing",
        });
        const onResize = () => {
          const d = drag[0];
          d.applyBounds({ minX: -getMax(), maxX: 0 });
        };
        window.addEventListener("resize", onResize);
        return () => {
          window.removeEventListener("resize", onResize);
          drag[0]?.kill();
          split?.revert();
        };
      } else if (wrapEl) {
        wrapEl.style.overflowX = "auto";
      }
    },
    { scope: root },
  );

  return (
    <section ref={root} id="deck" className="relative py-28 md:py-36">
      <div className="shell">
        <div className="mb-3 mono-label text-brass">/03 — The companion deck</div>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2
            className="deck-title display gsap-init text-bone"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)", maxWidth: "14ch" }}
          >
            Meet your match.
          </h2>
          <p className="max-w-sm text-bone-dim">
            Drag the deck. Every card is a verified listing — papers, vaccinations and seller
            rating up front. Tap the heart to shortlist.
          </p>
        </div>
      </div>

      {/* shelf */}
      <div ref={wrap} className="relative mt-12 overflow-hidden">
        <div
          ref={track}
          className="flex gap-5 px-[var(--shell-x)] will-change-transform"
          style={{ width: "max-content" }}
        >
          {latest.map((c) => (
            <CompanionCard key={c.id} companion={c} faved={favs.includes(c.id)} onFav={onFav} />
          ))}
        </div>
        <div className="shell mt-6 mono-label text-bone-dim">↔ drag to explore</div>
      </div>

      {/* shortlist tray */}
      <div
        ref={tray}
        className="fixed right-6 top-[88px] z-40 flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-night-raised/90 px-4 py-2.5 backdrop-blur"
        style={{ boxShadow: "0 18px 40px -20px rgba(0,0,0,0.7)" }}
      >
        <span className="text-coral">
          <Heart size={18} fill="currentColor" />
        </span>
        <span className="text-sm font-bold text-bone">{favs.length}</span>
        <span className="mono-label text-bone-dim">shortlisted</span>
      </div>
    </section>
  );
}
