"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, registerGsap } from "@/lib/gsap";

const items = [
  { no: "01", id: "hero", label: "Home" },
  { no: "02", id: "browse", label: "Browse" },
  { no: "03", id: "deck", label: "Companions" },
  { no: "04", id: "trust", label: "Verified" },
  { no: "05", id: "sellers", label: "Sellers" },
  { no: "06", id: "voices", label: "Voices" },
  { no: "07", id: "begin", label: "Begin" },
];

export default function IndexRail() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    registerGsap();
    const page = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => setProgress(self.progress),
    });

    const triggers = items.map((it, i) =>
      ScrollTrigger.create({
        trigger: `#${it.id}`,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (self) => self.isActive && setActive(i),
      }),
    );

    return () => {
      page.kill();
      triggers.forEach((t) => t.kill());
    };
  });

  return (
    <div
      ref={root}
      className="fixed left-0 top-0 hidden h-screen flex-col justify-center gap-3 pl-[max(1.1rem,2.5vw)] lg:flex"
      style={{ zIndex: 10, width: "var(--rail-w)" }}
      aria-hidden
    >
      <div className="relative" style={{ paddingLeft: 14 }}>
        {/* brass progress spine */}
        <span
          className="absolute left-0 top-0 w-px"
          style={{ height: "100%", background: "var(--color-line)" }}
        />
        <span
          className="absolute left-0 top-0 w-px origin-top"
          style={{
            height: "100%",
            background: "var(--color-brass)",
            transform: `scaleY(${progress})`,
            transition: "transform 0.1s linear",
          }}
        />
        <ul className="flex flex-col gap-3">
          {items.map((it, i) => (
            <li
              key={it.id}
              className="mono-label transition-all duration-300"
              style={{
                color: i === active ? "var(--color-saffron)" : "var(--color-bone-dim)",
                opacity: i === active ? 1 : 0.5,
                transform: i === active ? "translateX(3px)" : "none",
                fontSize: "0.62rem",
              }}
            >
              {it.no}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
