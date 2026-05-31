"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/products";
import { fadeUp, RevealGroup } from "../motion";

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="relative">
              <div className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">{s.label}</div>
              <div className="mt-1 text-xs text-muted">{s.detail}</div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
