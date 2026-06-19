// India locale helpers — every ₹, phone and time on the site routes through here.

const inrFmt = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** ₹1,20,000 — lakh/crore grouping. */
export const inr = (n: number): string => inrFmt.format(n);

/** Plain grouped number, no symbol: 1,20,000 */
export const inGrouping = (n: number): string =>
  new Intl.NumberFormat("en-IN").format(n);

/** +91 98842 41100 */
export const phoneIN = (digits: string): string => {
  const d = digits.replace(/\D/g, "").slice(-10);
  return `+91 ${d.slice(0, 5)} ${d.slice(5)}`;
};

/** A fixed IST clock label for a known ISO timestamp (hydration-safe). */
export const istTime = (iso: string): string =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  }).format(new Date(iso)) + " IST";

/** "12 Jun 2026" */
export const istDate = (iso: string): string =>
  new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(iso));
