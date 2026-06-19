import { DogGlyph, CatGlyph, FishGlyph, BirdGlyph, ExoticGlyph } from "@/lib/icons";
import type { ComponentType, SVGProps } from "react";

export type CategoryKey = "Dog" | "Cat" | "Fish" | "Parrots" | "Exotic";

export type Category = {
  key: CategoryKey;
  label: string;
  blurb: string;
  count: number;
  glyph: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;
  imageSeed: string;
};

// Mirrors the source app's categories (Dog / Cat / Fish / Bird→Parrots),
// plus one editorial extension.
export const categories: Category[] = [
  { key: "Dog", label: "Dogs", blurb: "Pups & pedigrees", count: 1840, glyph: DogGlyph, imageSeed: "saathi-cat-dog" },
  { key: "Cat", label: "Cats", blurb: "Indoor companions", count: 612, glyph: CatGlyph, imageSeed: "saathi-cat-cat" },
  { key: "Parrots", label: "Birds", blurb: "Parrots & songbirds", count: 423, glyph: BirdGlyph, imageSeed: "saathi-cat-bird" },
  { key: "Fish", label: "Fish", blurb: "Koi, betta & more", count: 980, glyph: FishGlyph, imageSeed: "saathi-cat-fish" },
  { key: "Exotic", label: "Exotic", blurb: "Rabbits & reptiles", count: 188, glyph: ExoticGlyph, imageSeed: "saathi-cat-exotic" },
];
