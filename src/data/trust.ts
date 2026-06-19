import { Seal, Vaccine, House, Trophy, Pin } from "@/lib/icons";
import type { ComponentType, SVGProps } from "react";

type Glyph = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

// The five listing signals from the source app, made first-class.
export type Badge = { key: string; label: string; blurb: string; glyph: Glyph; accent: string };

export const badges: Badge[] = [
  { key: "verified", label: "Verified Seller", blurb: "Government ID & address checked", glyph: Seal, accent: "var(--color-sage)" },
  { key: "location", label: "Location Verified", blurb: "Listing geo-confirmed", glyph: Pin, accent: "var(--color-bone-dim)" },
  { key: "vaccine", label: "Vaccination Records", blurb: "Vet documents on file", glyph: Vaccine, accent: "var(--color-sage)" },
  { key: "home", label: "Home Raised", blurb: "Socialised, not caged", glyph: House, accent: "var(--color-coral)" },
  { key: "kci", label: "KCI Certified", blurb: "Pedigree papers issued", glyph: Trophy, accent: "var(--color-saffron)" },
];

// Three pillars — lifted from the source app's Trust & Safety notice.
export type Pillar = { no: string; title: string; body: string; stat: string; statLabel: string };

export const pillars: Pillar[] = [
  {
    no: "01",
    title: "Every seller is who they say they are",
    body:
      "Listings come only from ID-verified individuals and registered breeders. We check government ID and address before a single companion goes live.",
    stat: "100%",
    statLabel: "ID-verified sellers",
  },
  {
    no: "02",
    title: "Papers up front, never on trust",
    body:
      "Vaccination charts, deworming history and KCI registration are attached to the listing — so you read the records before you ever message.",
    stat: "9,200+",
    statLabel: "documents on file",
  },
  {
    no: "03",
    title: "Meet before you decide",
    body:
      "We hide contact details until you're signed in, encourage in-person visits, and remove illegal, unethical or suspicious listings the moment they're flagged.",
    stat: "< 6 hrs",
    statLabel: "median flag-to-removal",
  },
];
