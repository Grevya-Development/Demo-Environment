"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CATEGORIES, type Category } from "@/lib/products";
import { useProducts } from "@/lib/use-products";
import { ProductCard } from "../product-card";
import { SectionHeading } from "../section-heading";
import { stagger } from "../motion";

type Filter = "All" | Category | "Active" | "Coming Soon";

export function ProductsDashboard() {
  const { products } = useProducts();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));
      const matchesFilter =
        filter === "All"
          ? true
          : filter === "Active" || filter === "Coming Soon"
            ? p.status === filter
            : p.category === filter;
      return matchesQuery && matchesFilter;
    });
  }, [products, query, filter]);

  const filters: Filter[] = ["All", "Active", "Coming Soon", ...CATEGORIES];

  return (
    <section id="products" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Dashboard"
            title="Launch any Grevya platform from one place"
            description="Every product in the ecosystem — live applications you can open today, and what's coming next."
          />
          <SearchBox value={query} onChange={setQuery} />
        </div>

        {/* filter chips */}
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={
                  "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                  (isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-surface text-muted hover:text-foreground")
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* grid */}
        <motion.div
          layout
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              No products match “{query}”
            </p>
            <button
              onClick={() => {
                setQuery("");
                setFilter("All");
              }}
              className="mt-3 text-sm font-medium text-blue hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function SearchBox({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative w-full md:w-72">
      <svg
        className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-faint"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products…"
        className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-faint transition-colors focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
      />
    </div>
  );
}
