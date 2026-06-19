"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGsap } from "@/lib/gsap";

/** Desktop-only bone ring that magnetises to cards and swells coral over favoritables. */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    registerGsap();
    const el = dot.current;
    if (!el) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const x = gsap.quickTo(el, "x", { duration: 0.32, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.32, ease: "power3" });

    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
      gsap.to(el, { opacity: 1, duration: 0.2, overwrite: "auto" });
    };
    const leave = () => gsap.to(el, { opacity: 0, duration: 0.2 });

    const enter = (e: Event) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      const mode = t.dataset.cursor;
      gsap.to(el, {
        scale: mode === "fav" ? 1.9 : 2.4,
        backgroundColor:
          mode === "fav" ? "var(--color-coral)" : "rgba(243,236,221,0.12)",
        borderColor: mode === "fav" ? "var(--color-coral)" : "var(--color-bone)",
        duration: 0.3,
        ease: "snap",
      });
    };
    const reset = (e: Event) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      gsap.to(el, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "var(--color-bone)",
        duration: 0.3,
        ease: "snap",
      });
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerleave", leave);
    document.addEventListener("pointerover", enter);
    document.addEventListener("pointerout", reset);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("pointerover", enter);
      document.removeEventListener("pointerout", reset);
    };
  });

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 hidden md:block"
      style={{
        width: 16,
        height: 16,
        borderRadius: 999,
        border: "1.5px solid var(--color-bone)",
        zIndex: 70,
        mixBlendMode: "difference",
      }}
    />
  );
}
