"use client";

import { motion } from "framer-motion";
import { accentVar, type Product } from "@/lib/products";
import { fadeUp } from "./motion";

export function ProductCard({ product }: { product: Product }) {
  const accent = accentVar[product.accent];
  const active = product.status === "Active";

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface p-6 transition-colors hover:border-[color:var(--card-accent)]"
      style={{ ["--card-accent" as string]: accent }}
    >
      {/* accent glow on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: accent }}
      />

      <div className="flex items-start justify-between">
        <span
          className="font-display grid h-12 w-12 place-items-center rounded-2xl text-lg font-bold text-white"
          style={{
            background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 70%, #000))`,
          }}
        >
          {product.mark}
        </span>
        <StatusBadge active={active} accent={accent} />
      </div>

      <p className="label-mono mt-5 text-faint">{product.category}</p>
      <h3 className="font-display mt-1.5 text-xl font-bold text-foreground">
        {product.name}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted">
        {product.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {product.features.map((f) => (
          <li
            key={f}
            className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
          >
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex-1" />

      {active && product.url ? (
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          style={{
            background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 72%, #000))`,
          }}
        >
          {product.cta}
          <span className="transition-transform group-hover/btn:translate-x-1">↗</span>
        </a>
      ) : (
        <button
          disabled
          className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-dashed border-border-strong px-4 py-3 text-sm font-semibold text-faint"
        >
          {product.cta}
        </button>
      )}
    </motion.article>
  );
}

function StatusBadge({ active, accent }: { active: boolean; accent: string }) {
  if (active) {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold"
        style={{
          color: accent,
          borderColor: `color-mix(in srgb, ${accent} 40%, transparent)`,
          background: `color-mix(in srgb, ${accent} 12%, transparent)`,
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }} />
        Active
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-faint" />
      Coming Soon
    </span>
  );
}
