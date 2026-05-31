"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../section-heading";
import { fadeUp, RevealGroup } from "../motion";

const PILLARS = [
  {
    accent: "var(--grevya-blue)",
    title: "Artificial Intelligence",
    body: "Conversational agents, screening, and diagnostic models that put applied AI to work across the business.",
    tag: "Irookee · AI Interviewer",
  },
  {
    accent: "var(--grevya-amber)",
    title: "Business Operations",
    body: "Onboarding, HR workflows, and the CRM that keep teams and customers moving in sync.",
    tag: "Onboarding · CRM",
  },
  {
    accent: "var(--grevya-green)",
    title: "Consumer Brands",
    body: "Direct-to-consumer wellness and commerce experiences under the Grevya Naturals banner.",
    tag: "Grevya Naturals",
  },
  {
    accent: "var(--grevya-orange)",
    title: "Healthcare Innovation",
    body: "Medical imaging and diagnostic assistance built to support clinicians with faster, consistent reads.",
    tag: "Radiology AI",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          eyebrow="Solutions"
          title="Four domains, one connected ecosystem"
          description="Grevya builds across the lines that usually divide companies — so AI, operations, healthcare, and consumer brands share one foundation."
        />
        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group bg-surface p-7 transition-colors hover:bg-surface-2"
            >
              <span
                className="block h-9 w-9 rounded-xl"
                style={{
                  background: `linear-gradient(140deg, ${p.accent}, color-mix(in srgb, ${p.accent} 60%, transparent))`,
                }}
              />
              <h3 className="font-display mt-5 text-lg font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              <p
                className="label-mono mt-5"
                style={{ color: p.accent }}
              >
                {p.tag}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
