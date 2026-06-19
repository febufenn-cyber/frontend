import { sellerBySlug, type Seller } from "./sellers";
import type { CategoryKey } from "./categories";

export type Companion = {
  id: string;
  slug: string;
  name: string; // listing title
  breed: string;
  category: CategoryKey;
  price: number; // INR
  city: string;
  ageLabel: string;
  gender: "Male" | "Female";
  description: string;
  vaccinated: boolean;
  kciCertified: boolean;
  homeRaised: boolean;
  sellerSlug: string;
  listedAt: string; // fixed ISO — hydration-safe
  imageSeed: string;
  viewersSeed: number; // seeds the "live" viewer drift
};

/** Real, curated pet & people photography (Unsplash), keyed by seed and passed
 *  through the consistent .duotone grade in CSS. */
const PHOTO: Record<string, string> = {
  // companions
  "saathi-bruno": "1633722715463-d30f4f325e24", // golden retriever
  "saathi-ila": "1574158622682-e40e69881006", // persian cat
  "saathi-rio": "1591198936750-16d8e15edb9e", // ringneck parrot
  "saathi-koi": "1520302630591-fd1c66edc19d", // koi
  "saathi-shadow": "1568572933382-74d440642117", // german shepherd
  "saathi-miru": "1530281700549-e82e7bf110d6", // indie dog
  "saathi-neelam": "1552728089-57bdde30beb3", // macaw
  "saathi-pixel": "1514888286974-6c03e2ca1dba", // black cat
  "saathi-betta": "1524704796725-9fc3044a58b2", // betta
  "saathi-toffee": "1544568100-847a948585b9", // beagle
  // categories
  "saathi-cat-dog": "1537151625747-768eb6cf92b2",
  "saathi-cat-cat": "1535268647677-300dbf3d78d1",
  "saathi-cat-bird": "1552728089-57bdde30beb3",
  "saathi-cat-fish": "1520302630591-fd1c66edc19d",
  "saathi-cat-exotic": "1425082661705-1834bfd09dca", // rabbit
  // sellers (people)
  "saathi-seller-tail": "1438761681033-6461ffad8d80",
  "saathi-seller-marina": "1507003211169-0a1dd7228f2d",
  "saathi-seller-nilgiri": "1607746882042-944635dfe10e",
  "saathi-seller-aviary": "1472099645785-5658abf4ff4e",
  "saathi-seller-kaveri": "1500648767791-00dcc994a43e",
  "saathi-seller-deccan": "1494790108377-be9c29b29330",
  // testimonials (kept consistent with the matching seller where applicable)
  "saathi-voice-divya": "1607746882042-944635dfe10e",
  "saathi-voice-meera": "1438761681033-6461ffad8d80",
  "saathi-voice-suresh": "1500648767791-00dcc994a43e",
};
const FALLBACK = "1583337130417-3346a1be7dee";

export const petImage = (seed: string, w = 640, h = 800): string =>
  `https://images.unsplash.com/photo-${PHOTO[seed] ?? FALLBACK}?auto=format&fit=crop&w=${w}&h=${h}&q=72`;

export const companions: Companion[] = [
  {
    id: "c01", slug: "bruno-golden-retriever", name: "Bruno", breed: "Golden Retriever",
    category: "Dog", price: 32000, city: "Coimbatore", ageLabel: "3 months", gender: "Male",
    description:
      "A sun-coloured retriever pup raised underfoot in a family home. Crate-introduced, leash-curious, and already the gentlest soul in the litter.",
    vaccinated: true, kciCertified: true, homeRaised: true, sellerSlug: "tail-and-trust",
    listedAt: "2026-06-18T07:10:00+05:30", imageSeed: "saathi-bruno", viewersSeed: 17,
  },
  {
    id: "c02", slug: "ila-persian-cat", name: "Ila", breed: "Persian",
    category: "Cat", price: 18500, city: "Coonoor", ageLabel: "4 months", gender: "Female",
    description:
      "A cloud of a kitten from the Nilgiri hills — litter-trained, vet-checked, and partial to afternoon sun on a windowsill.",
    vaccinated: true, kciCertified: false, homeRaised: true, sellerSlug: "nilgiri-companions",
    listedAt: "2026-06-18T09:40:00+05:30", imageSeed: "saathi-ila", viewersSeed: 9,
  },
  {
    id: "c03", slug: "rio-indian-ringneck", name: "Rio", breed: "Indian Ringneck",
    category: "Parrots", price: 14000, city: "Chennai", ageLabel: "7 months", gender: "Male",
    description:
      "Hand-raised and finger-tame, Rio already mimics a doorbell and the word 'saapadu'. Comes with a weaning chart and dietary notes.",
    vaccinated: false, kciCertified: false, homeRaised: true, sellerSlug: "anna-nagar-aviary",
    listedAt: "2026-06-17T18:25:00+05:30", imageSeed: "saathi-rio", viewersSeed: 23,
  },
  {
    id: "c04", slug: "kaveri-koi-pair", name: "Kohaku Koi Pair", breed: "Koi",
    category: "Fish", price: 8800, city: "Tiruchirappalli", ageLabel: "1 year", gender: "Female",
    description:
      "A matched pair of imported Kohaku with crisp hi patterns. Quarantined 21 days, eating pellets, ready for a settled pond.",
    vaccinated: false, kciCertified: false, homeRaised: false, sellerSlug: "kaveri-aqua",
    listedAt: "2026-06-18T06:05:00+05:30", imageSeed: "saathi-koi", viewersSeed: 14,
  },
  {
    id: "c05", slug: "shadow-german-shepherd", name: "Shadow", breed: "German Shepherd",
    category: "Dog", price: 41000, city: "Hyderabad", ageLabel: "2 months", gender: "Male",
    description:
      "Working-line GSD with a calm, biddable temperament. Dewormed, first shots done, parents hip-scored and on file.",
    vaccinated: true, kciCertified: true, homeRaised: true, sellerSlug: "deccan-den",
    listedAt: "2026-06-17T15:50:00+05:30", imageSeed: "saathi-shadow", viewersSeed: 31,
  },
  {
    id: "c06", slug: "miru-indie-pup", name: "Miru", breed: "Indian Pariah",
    category: "Dog", price: 2500, city: "Chennai", ageLabel: "3 months", gender: "Female",
    description:
      "A bright, weatherproof Indie rescue — the smartest dogs on the subcontinent. Spayed-on-adoption, vaccinated, and endlessly loyal.",
    vaccinated: true, kciCertified: false, homeRaised: true, sellerSlug: "marina-paws",
    listedAt: "2026-06-18T08:15:00+05:30", imageSeed: "saathi-miru", viewersSeed: 12,
  },
  {
    id: "c07", slug: "neelam-macaw", name: "Neelam", breed: "Blue & Gold Macaw",
    category: "Parrots", price: 38000, city: "Chennai", ageLabel: "1 year", gender: "Female",
    description:
      "A showstopper of a macaw, hand-fed since hatch and socialised with children. Microchipped; CITES paperwork in order.",
    vaccinated: false, kciCertified: false, homeRaised: true, sellerSlug: "anna-nagar-aviary",
    listedAt: "2026-06-16T11:30:00+05:30", imageSeed: "saathi-neelam", viewersSeed: 27,
  },
  {
    id: "c08", slug: "pixel-bombay-cat", name: "Pixel", breed: "Bombay Cat",
    category: "Cat", price: 16000, city: "Coonoor", ageLabel: "5 months", gender: "Male",
    description:
      "A miniature panther with copper eyes and a velvet coat. Affectionate, talkative, and litter-trained from week six.",
    vaccinated: true, kciCertified: false, homeRaised: true, sellerSlug: "nilgiri-companions",
    listedAt: "2026-06-17T13:05:00+05:30", imageSeed: "saathi-pixel", viewersSeed: 8,
  },
  {
    id: "c09", slug: "halflight-betta", name: "Halfmoon Betta — Galaxy", breed: "Betta",
    category: "Fish", price: 1800, city: "Tiruchirappalli", ageLabel: "6 months", gender: "Male",
    description:
      "A galaxy koi halfmoon with marbling no two are alike. Show-grade finnage; arrives bagged with conditioned water and care card.",
    vaccinated: false, kciCertified: false, homeRaised: false, sellerSlug: "kaveri-aqua",
    listedAt: "2026-06-18T10:20:00+05:30", imageSeed: "saathi-betta", viewersSeed: 6,
  },
  {
    id: "c10", slug: "toffee-beagle", name: "Toffee", breed: "Beagle",
    category: "Dog", price: 26000, city: "Coimbatore", ageLabel: "3 months", gender: "Female",
    description:
      "A tricolour beagle with a nose for mischief and a heart for cuddles. Vaccinated, dewormed, KCI registered, and family-raised.",
    vaccinated: true, kciCertified: true, homeRaised: true, sellerSlug: "tail-and-trust",
    listedAt: "2026-06-17T16:45:00+05:30", imageSeed: "saathi-toffee", viewersSeed: 19,
  },
];

export type ResolvedCompanion = Companion & {
  seller: Seller;
  verifiedSeller: boolean;
  image: string;
};

export const resolve = (c: Companion): ResolvedCompanion => {
  const seller = sellerBySlug(c.sellerSlug);
  return { ...c, seller, verifiedSeller: seller.isVerifiedSeller, image: petImage(c.imageSeed) };
};

export const resolvedCompanions: ResolvedCompanion[] = companions.map(resolve);

/** Newest first — the source app's "Latest Listings". */
export const latest = [...resolvedCompanions].sort(
  (a, b) => +new Date(b.listedAt) - +new Date(a.listedAt),
);

/** Verified-seller only — the source app's "Recommended Pets". */
export const recommended = resolvedCompanions.filter((c) => c.verifiedSeller);
