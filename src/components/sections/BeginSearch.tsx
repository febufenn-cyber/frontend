"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useReveal } from "@/hooks/useReveal";
import { categories } from "@/data/categories";
import { ArrowUpRight } from "@/lib/icons";

export default function BeginSearch() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // raw digits
  const [pick, setPick] = useState(categories[0].key);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const prettyPhone = phone.replace(/(\d{5})(\d{1,5})/, "$1 $2");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please tell us your name.");
    if (phone.length !== 10) return setError("Enter a valid 10-digit mobile number.");
    setError("");
    setToast(true); // optimistic
    setName("");
    setPhone("");
    window.setTimeout(() => setToast(false), 4200);
  };

  return (
    <section ref={root} id="begin" className="relative overflow-hidden py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 80% at 50% 120%, rgba(242,165,33,0.16), transparent 60%)",
        }}
      />
      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-3 mono-label text-brass">/07 — Begin the search</div>
            <h2 className="reveal display text-bone" style={{ fontSize: "clamp(2.2rem,5vw,4rem)", maxWidth: "12ch" }}>
              Your companion is out there.
            </h2>
            <p className="reveal mt-6 max-w-md text-lg text-bone-dim">
              Tell us what you&apos;re looking for. We&apos;ll send verified matches near you the moment
              they&apos;re listed — dawn-fresh, papers attached.
            </p>
          </div>

          <form
            onSubmit={submit}
            noValidate
            className="reveal flex flex-col gap-4 rounded-[var(--radius-lg)] border border-line bg-night-raised/80 p-7 backdrop-blur"
          >
            <Field label="Your name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Divya Anand"
                className="field-input"
                autoComplete="name"
              />
            </Field>

            <Field label="Mobile">
              <div className="flex items-center gap-2">
                <span className="mono-label shrink-0 text-bone-dim">+91</span>
                <input
                  value={prettyPhone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="98842 41100"
                  inputMode="numeric"
                  className="field-input"
                  autoComplete="tel"
                />
              </div>
            </Field>

            <Field label="Looking for">
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    type="button"
                    key={c.key}
                    onClick={() => setPick(c.key)}
                    className="rounded-[var(--radius-pill)] border px-3.5 py-1.5 text-sm font-semibold transition-colors"
                    style={{
                      borderColor: pick === c.key ? "var(--color-saffron)" : "var(--color-line)",
                      background: pick === c.key ? "var(--color-saffron)" : "transparent",
                      color: pick === c.key ? "var(--color-night)" : "var(--color-bone)",
                    }}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </Field>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-semibold text-coral"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="submit"
              data-cursor
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-saffron px-6 py-3.5 font-bold text-night transition-all hover:bg-saffron-deep active:scale-[0.98]"
            >
              Notify me of matches
              <ArrowUpRight size={17} />
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-[var(--radius-pill)] border border-sage/40 bg-night-raised px-5 py-3 text-sm font-semibold text-bone"
            style={{ boxShadow: "0 18px 40px -18px rgba(0,0,0,0.8)" }}
            role="status"
          >
            <span className="text-sage">✓</span> You&apos;re on the list — we&apos;ll be in touch on +91.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono-label text-bone-dim">{label}</span>
      {children}
    </label>
  );
}
