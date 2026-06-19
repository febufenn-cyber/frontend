"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

/**
 * Official Lenis ↔ GSAP integration with ONE shared rAF loop:
 * gsap.ticker drives lenis.raf (lagSmoothing off), lenis.on('scroll')
 * updates ScrollTrigger. No parallel requestAnimationFrame anywhere else.
 */
export default function SmoothScroll() {
  useEffect(() => {
    registerGsap();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // let modals/drawers pause the scroll engine
    type LenisWindow = Window & { __lenis?: Lenis };
    (window as LenisWindow).__lenis = lenis;

    // refresh once fonts settle so pinned measurements are correct
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as LenisWindow).__lenis;
    };
  }, []);

  return null;
}
