export type Seller = {
  slug: string;
  storeName: string;
  name: string;
  city: string;
  isVerifiedSeller: boolean;
  rating: number;
  reviews: number;
  listings: number;
  since: number;
  phone: string; // 10 digits, formatted via phoneIN()
  specialty: string;
  imageSeed: string;
};

export const sellers: Seller[] = [
  {
    slug: "tail-and-trust",
    storeName: "Tail & Trust Kennels",
    name: "Meera Rajagopal",
    city: "Coimbatore",
    isVerifiedSeller: true,
    rating: 4.9,
    reviews: 312,
    listings: 24,
    since: 2014,
    phone: "9884241100",
    specialty: "Retrievers & gun dogs",
    imageSeed: "saathi-seller-tail",
  },
  {
    slug: "marina-paws",
    storeName: "Marina Paws",
    name: "Imran Sheriff",
    city: "Chennai",
    isVerifiedSeller: true,
    rating: 4.8,
    reviews: 204,
    listings: 18,
    since: 2017,
    phone: "9840551207",
    specialty: "Indie rescues & small breeds",
    imageSeed: "saathi-seller-marina",
  },
  {
    slug: "nilgiri-companions",
    storeName: "Nilgiri Companions",
    name: "Anita Thomas",
    city: "Coonoor",
    isVerifiedSeller: true,
    rating: 5.0,
    reviews: 96,
    listings: 9,
    since: 2019,
    phone: "9486120043",
    specialty: "Highland cats & long-hairs",
    imageSeed: "saathi-seller-nilgiri",
  },
  {
    slug: "anna-nagar-aviary",
    storeName: "Anna Nagar Aviary",
    name: "Karthik Velu",
    city: "Chennai",
    isVerifiedSeller: true,
    rating: 4.7,
    reviews: 158,
    listings: 31,
    since: 2016,
    phone: "9962044518",
    specialty: "Hand-raised parrots & finches",
    imageSeed: "saathi-seller-aviary",
  },
  {
    slug: "kaveri-aqua",
    storeName: "Kaveri Aqua House",
    name: "Suresh Babu",
    city: "Tiruchirappalli",
    isVerifiedSeller: true,
    rating: 4.8,
    reviews: 271,
    listings: 47,
    since: 2012,
    phone: "9043778820",
    specialty: "Imported koi & show bettas",
    imageSeed: "saathi-seller-kaveri",
  },
  {
    slug: "deccan-den",
    storeName: "Deccan Den",
    name: "Farah Qureshi",
    city: "Hyderabad",
    isVerifiedSeller: true,
    rating: 4.9,
    reviews: 188,
    listings: 15,
    since: 2018,
    phone: "9701338864",
    specialty: "Working & guard breeds",
    imageSeed: "saathi-seller-deccan",
  },
];

export const sellerBySlug = (slug: string): Seller =>
  sellers.find((s) => s.slug === slug) ?? sellers[0];
