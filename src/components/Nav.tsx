"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import { KnotMark, ArrowUpRight } from "@/lib/icons";
import { site, nav } from "@/data/site";

export default function Nav() {
  const root = useRef<HTMLElement>(null);
  const cta = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useGSAP(
    () => {
      registerGsap();
      const st = ScrollTrigger.create({
        start: "top -90",
        end: 99999,
        onToggle: (self) => setScrolled(self.isActive),
      });

      // magnetic CTA
      const btn = cta.current;
      let magnet: ((e: PointerEvent) => void) | null = null;
      let reset: (() => void) | null = null;
      if (btn && window.matchMedia("(pointer:fine)").matches) {
        const qx = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
        const qy = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
        magnet = (e: PointerEvent) => {
          const r = btn.getBoundingClientRect();
          qx((e.clientX - (r.left + r.width / 2)) * 0.35);
          qy((e.clientY - (r.top + r.height / 2)) * 0.35);
        };
        reset = () => {
          qx(0);
          qy(0);
        };
        btn.addEventListener("pointermove", magnet);
        btn.addEventListener("pointerleave", reset);
      }

      return () => {
        st.kill();
        if (btn && magnet) btn.removeEventListener("pointermove", magnet);
        if (btn && reset) btn.removeEventListener("pointerleave", reset);
      };
    },
    { scope: root },
  );

  return (
    <header
      ref={root}
      className="fixed inset-x-0 top-0 transition-all duration-500"
      style={{
        zIndex: 60,
        background: scrolled ? "rgba(12,16,9,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-line)" : "1px solid transparent",
      }}
    >
      <div className="shell flex items-center justify-between" style={{ height: 76 }}>
        <a href="#main" className="flex items-center gap-2.5 text-bone" data-cursor>
          <span className="text-saffron">
            <KnotMark size={30} />
          </span>
          <span className="display text-bone" style={{ fontSize: "1.5rem" }}>
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-cursor
              className="mono-label text-bone-dim transition-colors hover:text-bone"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          ref={cta}
          href="#begin"
          data-cursor
          className="group inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-saffron px-5 py-2.5 text-sm font-bold text-night transition-colors hover:bg-saffron-deep"
        >
          List a companion
          <ArrowUpRight size={16} />
        </a>
      </div>
    </header>
  );
}
