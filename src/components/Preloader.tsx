"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";
import { KnotMark } from "@/lib/icons";
import { site } from "@/data/site";

/** ≤1.2s, on-brand, skipped on repeat visits via sessionStorage. */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      const el = root.current;
      if (!el) return;

      const seen = sessionStorage.getItem("saathi-seen");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (seen || reduce) {
        gsap.set(el, { display: "none" });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "lift" },
        onComplete: () => {
          sessionStorage.setItem("saathi-seen", "1");
          gsap.set(el, { display: "none" });
        },
      });

      tl.from(".pl-mark path, .pl-mark circle", {
        drawSVG: "0%",
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
      })
        .from(".pl-word", { yPercent: 120, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".pl-tag", { opacity: 0, y: 10, duration: 0.4 }, "-=0.25")
        .to(el, { clipPath: "inset(0 0 100% 0)", duration: 0.6, ease: "lift" }, "+=0.15");
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="fixed inset-0 flex flex-col items-center justify-center bg-night-sunk"
      style={{ zIndex: 95, clipPath: "inset(0 0 0% 0)" }}
    >
      <div className="pl-mark text-saffron">
        <KnotMark size={68} />
      </div>
      <div className="overflow-hidden mt-4">
        <div className="pl-word display text-bone" style={{ fontSize: "2.4rem" }}>
          {site.name}
        </div>
      </div>
      <div className="pl-tag mono-label text-brass mt-2">{site.tagline}</div>
    </div>
  );
}
