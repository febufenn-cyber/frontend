// Brand + global copy. Every string the chrome renders lives here.

export const site = {
  name: "Pet Marketplace",
  shortName: "PetMarket",
  established: "Est. 2026",
  tagline: "Find your companion.",
  domain: "petmarketplace.in",
  url: "https://petmarketplace.in",
  description:
    "India's verified pet marketplace. Meet ID-checked sellers, with vaccination records and KCI papers up front — and find the companion who's been looking for you.",
  email: "hello@petmarketplace.in",
  phone: "9884100100",
  address: {
    line: "No. 7, Chitra Avenue, Alwarpet",
    city: "Chennai",
    region: "Tamil Nadu",
    postal: "600018",
    country: "IN",
  },
  founded: 2026,
} as const;

export const nav = [
  { label: "Browse", href: "#browse" },
  { label: "Companions", href: "#deck" },
  { label: "Why verified", href: "#trust" },
  { label: "Sellers", href: "#sellers" },
] as const;

export const footer = {
  trustTitle: "Trust & Safety",
  trustBody:
    "Pet Marketplace is a listing platform that connects pet seekers and sellers. We do not own, sell, or guarantee any companion listed on the platform.",
  trustPoints: [
    "Every listing is posted by an ID-verified individual or registered breeder",
    "Seekers are responsible for verifying health records, papers and seller identity",
    "We strongly recommend meeting the companion in person before any decision",
  ],
  trustClose:
    "We actively remove illegal, unethical or suspicious listings to keep this a safe community.",
  columns: [
    {
      title: "Marketplace",
      links: ["Browse companions", "Verified sellers", "List a companion", "Pricing"],
    },
    {
      title: "Trust",
      links: ["How verification works", "Safety guide", "Report a listing", "Welfare policy"],
    },
    {
      title: "Company",
      links: ["Our story", "Careers", "Press", "Contact"],
    },
  ],
  legal: ["Disclaimer", "Terms of Use", "Privacy Policy"],
} as const;

// reasons mirrored from the report-listing flow in the source app
export const reportReasons = [
  "Scam or fraud",
  "Fake photos",
  "Duplicate listing",
  "Wrong information",
  "Animal welfare concern",
] as const;
