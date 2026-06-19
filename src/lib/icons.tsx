import type { SVGProps } from "react";

/* Custom-drawn iconography, restyled to the art direction. currentColor +
   inheritable stroke so each icon takes the palette of its context. No emojis,
   ever. Seal/paths are DrawSVG-friendly (single open strokes). */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

/** Brand knot-mark — two companions tied in one loop. */
export const KnotMark = ({ size = 28, ...p }: IconProps) => (
  <svg {...base(size)} strokeWidth={1.8} {...p}>
    <path d="M7 8c-3.2 0-4.2 4.6-1.4 6.3 2.6 1.6 6-.8 6.4-3.9.4 3.1 3.8 5.5 6.4 3.9C21.2 12.6 20.2 8 17 8c-2.7 0-4 2.6-5 5.4C11 10.6 9.7 8 7 8Z" />
    <circle cx="12" cy="18.5" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const Paw = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <ellipse cx="6.5" cy="10" rx="1.5" ry="2" />
    <ellipse cx="10" cy="7.5" rx="1.5" ry="2" />
    <ellipse cx="14" cy="7.5" rx="1.5" ry="2" />
    <ellipse cx="17.5" cy="10" rx="1.5" ry="2" />
    <path d="M12 12c-2.4 0-4.5 1.8-4.5 4 0 1.7 1.5 2.5 2.7 1.9 1.1-.6 2.5-.6 3.6 0 1.2.6 2.7-.2 2.7-1.9 0-2.2-2.1-4-4.5-4Z" />
  </svg>
);

/** Verified seal — scalloped ring + check, drawn-on with DrawSVG. */
export const Seal = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 2.5c1 1 2.5 1.2 3.8.7 1.3-.5 2.8.2 3.2 1.6.4 1.3 1.5 2.2 2.8 2.4 1.4.2 2.3 1.6 1.9 2.9-.4 1.3 0 2.7 1 3.6 1 1 1 2.6 0 3.6-1 .9-1.4 2.3-1 3.6-.6-.2-1.4.6-1.9.8" opacity="0" />
    <circle cx="12" cy="11" r="8" />
    <path className="seal-check" d="M8.3 11.2l2.6 2.6 4.8-5" />
  </svg>
);

export const Vaccine = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M14 4l6 6" />
    <path d="M16.5 6.5l-9 9L5 18l-2 3 3-2 2.5-2.5 9-9" />
    <path d="M9 9l2 2M11.5 6.5l3 3" />
  </svg>
);

export const House = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 11l8-6.5L20 11" />
    <path d="M6 9.7V19h12V9.7" />
    <path d="M10.5 19v-4.5h3V19" />
  </svg>
);

export const Trophy = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4.5A2.5 2.5 0 0 0 7 9.5M17 6h2.5A2.5 2.5 0 0 1 17 9.5" />
    <path d="M12 13v3M9 20h6M10 20v-2.5a2 2 0 0 1 4 0V20" />
  </svg>
);

export const Pin = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const Heart = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 20.3l-1.5-1.4C5.6 14.5 3 12 3 8.9 3 6.4 5 4.5 7.4 4.5c1.6 0 3.1.8 3.6 2 .5-1.2 2-2 3.6-2C20 4.5 21 6.4 21 8.9c0 3.1-2.6 5.6-7.5 10z" />
  </svg>
);

export const Search = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

export const ArrowUpRight = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Star = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} fill="currentColor" stroke="none" {...p}>
    <path d="M12 3.2l2.5 5 5.5.8-4 3.9.95 5.5L12 16.8 7.05 18.4 8 12.9l-4-3.9 5.5-.8z" />
  </svg>
);

/* --- category glyphs --- */
export const DogGlyph = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7l2.5-1.5L8 7h5l1.5-1.5L17 7c2 0 3 1.6 3 3.5 0 1-.4 1.8-1 2.4V19h-3v-3h-6v3H7v-5.5c-1.6-.4-3-1.7-3-3.5V7Z" />
    <path d="M7.5 10.5h.01" />
  </svg>
);
export const CatGlyph = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 4l2.5 4.5M19 4l-2.5 4.5" />
    <path d="M5 9c0-1 .8-1.5 1.6-1.2C8 8.3 10 8.8 12 8.8s4-.5 5.4-1c.8-.3 1.6.2 1.6 1.2v5.5c0 2.5-3 4.5-7 4.5s-7-2-7-4.5V9Z" />
    <path d="M9.5 12.5h.01M14.5 12.5h.01M12 15v1.5" />
  </svg>
);
export const FishGlyph = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12c3-4.5 8-6 13-4.5 2 .6 3.8 2 5 4.5-1.2 2.5-3 3.9-5 4.5C11 18 6 16.5 3 12Z" />
    <path d="M16 12h.01" />
    <path d="M3 12c-.5-1.4-.5-2.8 0-4M3 12c-.5 1.4-.5 2.8 0 4" />
  </svg>
);
export const BirdGlyph = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M14 5a2.5 2.5 0 1 1-2.4 3.2C10 9 8.5 11 8.5 13.5c0 3 2 5.5 5 5.5" />
    <path d="M11.6 8.2C8 8.5 5 11 5 14.5" />
    <path d="M16.2 6.6 19 6l-1.6 2.2" />
  </svg>
);
export const ExoticGlyph = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3c2 2.5 2 5 0 7.5S10 16 12 18.5" />
    <path d="M12 10.5c2.2 0 4-1.6 4-3.5M12 14c-2.2 0-4 1.6-4 3.5" />
    <circle cx="12" cy="20.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
