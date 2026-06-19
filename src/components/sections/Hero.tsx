"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText, registerGsap } from "@/lib/gsap";
import { categories } from "@/data/categories";
import { petImage } from "@/data/companions";
import { site } from "@/data/site";
import { Search, ArrowUpRight } from "@/lib/icons";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const h1 = root.current?.querySelector(".hero-title") as HTMLElement | null;
      const delay = sessionStorage.getItem("saathi-seen") ? 0 : 1.05;

      gsap.set([".hero-eyebrow", ".hero-lede", ".hero-chips", ".hero-search"], {
        visibility: "visible",
      });
      if (h1) gsap.set(h1, { visibility: "visible" });

      if (reduce) {
        video.current?.pause();
        return;
      }

      let split: SplitText | null = null;
      const tl = gsap.timeline({ delay, defaults: { ease: "lift" } });

      if (h1) {
        split = new SplitText(h1, { type: "lines", mask: "lines" });
        tl.from(split.lines, { yPercent: 120, opacity: 0, duration: 0.9, stagger: 0.09 });
      }
      tl.from(".hero-eyebrow", { y: 14, opacity: 0, duration: 0.5 }, 0.1)
        .from(".hero-lede", { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-search", { y: 18, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-chips > *", { y: 16, opacity: 0, duration: 0.5, stagger: 0.05 }, "-=0.45")
        .from(".hero-video", { scale: 1.12, duration: 1.8, ease: "lift" }, 0);

      return () => split?.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} id="hero" className="relative overflow-hidden">
      {/* real pet video, art-directed to the palette */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-night" aria-hidden>
        <video
          ref={video}
          className="hero-video h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={petImage("saathi-bruno", 1280, 820)}
        >
          <source src="/hero-pets.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(12,16,9,0.94) 0%, rgba(12,16,9,0.7) 38%, rgba(12,16,9,0.3) 70%, rgba(12,16,9,0.55) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 82% 0%, rgba(242,165,33,0.2), transparent 50%), linear-gradient(to top, rgba(12,16,9,0.96) 1%, transparent 32%)",
          }}
        />
      </div>

      <div className="shell relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="hero-eyebrow gsap-init mb-6 inline-flex items-center gap-3 mono-label text-brass">
          <span>{site.established}</span>
          <span className="h-px w-8 bg-brass/60" />
          <span>India&apos;s verified pet marketplace</span>
        </div>

        <h1
          className="hero-title display gsap-init text-bone"
          style={{ fontSize: "clamp(2.8rem,8vw,7rem)", maxWidth: "16ch" }}
        >
          Find the companion who&apos;s been <em className="text-saffron not-italic">looking for you.</em>
        </h1>

        <p className="hero-lede gsap-init mt-7 max-w-xl text-lg text-bone-dim">
          Browse ID-verified sellers and dawn-fresh listings across India — vaccination records,
          KCI papers and ratings, all in the open. No middlemen, no guesswork.
        </p>

        <a
          href="#deck"
          data-cursor
          className="hero-search gsap-init group mt-9 inline-flex w-full max-w-xl items-center gap-3 rounded-[var(--radius-pill)] border border-line bg-night-raised/70 p-2 pl-5 backdrop-blur"
        >
          <span className="text-saffron"><Search size={20} /></span>
          <span className="flex-1 text-bone-dim">Search a breed, or a city near you…</span>
          <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-saffron px-4 py-2.5 text-sm font-bold text-night transition-colors group-hover:bg-saffron-deep">
            Browse <ArrowUpRight size={15} />
          </span>
        </a>

        <div className="hero-chips gsap-init mt-8 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <a
              key={c.key}
              href="#browse"
              data-cursor
              className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-line bg-night-raised/50 px-4 py-2 text-sm font-semibold text-bone backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brass hover:text-saffron"
            >
              <c.glyph size={16} />
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
