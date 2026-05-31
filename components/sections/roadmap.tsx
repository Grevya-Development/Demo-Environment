"use client";

import { motion } from "framer-motion";
import { PRODUCTS, accentVar } from "@/lib/products";
import { SectionHeading } from "../section-heading";
import { fadeUp, RevealGroup } from "../motion";

export function Roadmap() {
  const upcoming = PRODUCTS.filter((p) => p.status === "Coming Soon");

  return (
    <section id="roadmap" className="scroll-mt-24 border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Roadmap"
          title="What's coming to the ecosystem"
          description="New platforms in active development — expanding Grevya across sales and healthcare."
        />

        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {upcoming.map((p, i) => {
            const accent = accentVar[p.accent];
            return (
              <motion.article
                key={p.id}
                variants={fadeUp}
                className="relative overflow-hidden rounded-[var(--radius-card)] border border-dashed border-border-strong bg-surface p-7"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-[0.12]"
                  style={{
                    background: `radial-gradient(60% 100% at 50% 0%, ${accent}, transparent)`,
                  }}
                />
                <div className="flex items-center justify-between">
                  <span className="label-mono text-faint">0{i + 1}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-faint" />
                    Coming Soon
                  </span>
                </div>
                <span
                  className="font-display mt-6 grid h-11 w-11 place-items-center rounded-2xl text-base font-bold text-white"
                  style={{
                    background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 70%, #000))`,
                  }}
                >
                  {p.mark}
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-foreground">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </motion.article>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
