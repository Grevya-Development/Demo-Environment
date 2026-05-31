"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, fadeUp } from "../motion";
import { SectionHeading } from "../section-heading";

const PRINCIPLES = [
  {
    title: "One foundation",
    body: "Shared identity, design, and infrastructure across every product so teams move faster together.",
  },
  {
    title: "Built to ship",
    body: "We bias toward production. Three platforms are already live and serving real users.",
  },
  {
    title: "Honest roadmap",
    body: "What's coming is shown as coming — no vaporware, just what's genuinely in development.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="About Grevya"
            title="A multi-product company, run from one ecosystem"
            description="Grevya brings AI, business operations, healthcare innovation, and consumer brands under a single roof. This portal is the front door — for clients, partners, investors, and the team — to discover and launch everything we build."
          />

          <RevealGroup className="grid gap-px self-center overflow-hidden rounded-[var(--radius-card)] border border-border bg-border">
            {PRINCIPLES.map((p) => (
              <motion.div key={p.title} variants={fadeUp} className="bg-surface p-6">
                <h3 className="font-display text-base font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
          <span className="label-mono text-faint">Business units</span>
          <span className="h-3 w-px bg-border" />
          {["AI Platform", "Internal Operations", "Consumer Brand", "Healthcare AI"].map(
            (b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
              >
                {b}
              </span>
            )
          )}
        </Reveal>
      </div>
    </section>
  );
}
