"use client";

import { motion } from "framer-motion";
import { ACTIVITY, accentVar } from "@/lib/products";
import { useProducts } from "@/lib/use-products";
import { Reveal, RevealGroup, fadeUp } from "../motion";

export function Launchpad() {
  const { products } = useProducts();
  const active = products.filter((p) => p.status === "Active" && p.url);

  return (
    <section className="border-y border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Quick launch */}
        <Reveal className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="label-mono text-faint">Quick Launch</p>
              <h3 className="font-display mt-1.5 text-xl font-bold text-foreground">
                Jump straight in
              </h3>
            </div>
            <span className="hidden text-xs text-muted sm:block">
              Opens in a new tab
            </span>
          </div>

          <RevealGroup className="mt-6 grid gap-3 sm:grid-cols-3">
            {active.map((p) => {
              const accent = accentVar[p.accent];
              return (
                <motion.a
                  key={p.id}
                  variants={fadeUp}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-background p-4 transition-colors hover:border-[color:var(--a)]"
                  style={{ ["--a" as string]: accent }}
                >
                  <span
                    className="font-display grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-white"
                    style={{
                      background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 70%, #000))`,
                    }}
                  >
                    {p.mark}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{p.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{p.category}</p>
                  </div>
                  <span
                    className="absolute right-4 top-4 text-faint transition-all group-hover:right-3.5 group-hover:text-[color:var(--a)]"
                    aria-hidden
                  >
                    ↗
                  </span>
                </motion.a>
              );
            })}
          </RevealGroup>
        </Reveal>

        {/* Recent activity */}
        <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
          <p className="label-mono text-faint">Recent Activity</p>
          <h3 className="font-display mt-1.5 text-xl font-bold text-foreground">
            Across the ecosystem
          </h3>
          <ul className="mt-5 space-y-4">
            {ACTIVITY.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="relative mt-1 flex flex-col items-center">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: accentVar[a.accent] }}
                  />
                  {i < ACTIVITY.length - 1 && (
                    <span className="mt-1 w-px flex-1 bg-border" />
                  )}
                </span>
                <div className="pb-1">
                  <p className="text-sm text-foreground">{a.event}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    <span className="font-medium">{a.product}</span> · {a.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
