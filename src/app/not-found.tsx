"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, MotionPathPlugin, registerGsap } from "@/lib/gsap";
import { Paw, ArrowUpRight } from "@/lib/icons";

export default function NotFound() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.registerPlugin(MotionPathPlugin);
      gsap.to(".paw-walk", {
        duration: 6,
        repeat: -1,
        ease: "none",
        motionPath: { path: "#trail", align: "#trail", alignOrigin: [0.5, 0.5], autoRotate: true },
      });
      gsap.from(".nf-rise", { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: "lift" });
    },
    { scope: root },
  );

  return (
    <div ref={root} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(80% 60% at 50% 30%, rgba(242,165,33,0.12), transparent 60%)" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
        <path id="trail" d="M-50,420 C200,300 360,520 560,400 S920,280 1200,440" fill="none" stroke="var(--color-line)" strokeWidth="2" strokeDasharray="2 12" strokeLinecap="round" />
      </svg>
      <span className="paw-walk absolute text-coral" style={{ left: 0, top: 0 }} aria-hidden>
        <Paw size={26} />
      </span>

      <div className="relative">
        <div className="nf-rise display text-saffron" style={{ fontSize: "clamp(4rem,14vw,9rem)", lineHeight: 1 }}>404</div>
        <h1 className="nf-rise display mt-4 text-bone" style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)" }}>
          This trail went cold.
        </h1>
        <p className="nf-rise mx-auto mt-4 max-w-md text-bone-dim">
          The companion you were tracking has wandered off — or was never here. Let&apos;s get you back to the pack.
        </p>
        <Link
          href="/"
          data-cursor
          className="nf-rise mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-saffron px-6 py-3.5 font-bold text-night transition-colors hover:bg-saffron-deep"
        >
          Back home <ArrowUpRight size={17} />
        </Link>
      </div>
    </div>
  );
}
