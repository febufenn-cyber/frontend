export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  city: string;
  imageSeed: string;
  companion: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I'd been scrolling classified apps for months, terrified of scams. On Pet Marketplace the vaccination chart was right there before I even messaged. We drove to Coimbatore, met Bruno, and never looked back.",
    name: "Divya Anand",
    role: "First-time pet parent",
    city: "Chennai",
    imageSeed: "saathi-voice-divya",
    companion: "Adopted Bruno, Golden Retriever",
  },
  {
    quote:
      "As a breeder, the verification badge changed everything. Serious seekers, fewer time-wasters, and the listings finally look like the dogs deserve.",
    name: "Meera Rajagopal",
    role: "Tail & Trust Kennels",
    city: "Coimbatore",
    imageSeed: "saathi-voice-meera",
    companion: "Verified seller since 2026",
  },
  {
    quote:
      "I import koi, and buyers always worried about quarantine. Pet Marketplace lets me show the 21-day record on the listing itself. Trust, before the first call.",
    name: "Suresh Babu",
    role: "Kaveri Aqua House",
    city: "Tiruchirappalli",
    imageSeed: "saathi-voice-suresh",
    companion: "47 companions listed",
  },
];
