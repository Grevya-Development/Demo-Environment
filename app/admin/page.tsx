"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrevyaLogo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { accentVar, type ProductStatus } from "@/lib/products";
import { useProducts } from "@/lib/use-products";

export default function AdminPage() {
  const { products, hydrated, update, reset } = useProducts();
  const [savedId, setSavedId] = useState<string | null>(null);

  function flash(id: string) {
    setSavedId(id);
    window.setTimeout(() => setSavedId((cur) => (cur === id ? null : cur)), 1200);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Grevya home">
            <GrevyaLogo />
          </Link>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Link
              href="/"
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              ← Back to portal
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-mono text-faint">Admin</p>
            <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground">
              Manage product links
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Update launch URLs and availability. Changes are saved instantly
              and reflected across the portal in this browser.
            </p>
          </div>
          <button
            onClick={reset}
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Reset to defaults
          </button>
        </div>

        <div className="mt-10 space-y-3">
          {!hydrated && (
            <p className="text-sm text-muted">Loading configuration…</p>
          )}
          {hydrated &&
            products.map((p) => {
              const accent = accentVar[p.accent];
              return (
                <div
                  key={p.id}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex min-w-0 items-center gap-3 md:w-56">
                      <span
                        className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-xl text-sm font-bold text-white"
                        style={{
                          background: `linear-gradient(140deg, ${accent}, color-mix(in srgb, ${accent} 70%, #000))`,
                        }}
                      >
                        {p.mark}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-foreground">
                          {p.name}
                        </p>
                        <p className="truncate text-xs text-muted">{p.category}</p>
                      </div>
                    </div>

                    <label className="flex-1">
                      <span className="mb-1.5 block text-xs font-medium text-muted">
                        Launch URL
                      </span>
                      <input
                        type="url"
                        defaultValue={p.url ?? ""}
                        placeholder="https://…"
                        onBlur={(e) => {
                          update(p.id, { url: e.target.value });
                          flash(p.id);
                        }}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-faint focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                      />
                    </label>

                    <label className="md:w-44">
                      <span className="mb-1.5 block text-xs font-medium text-muted">
                        Status
                      </span>
                      <select
                        value={p.status}
                        onChange={(e) => {
                          update(p.id, {
                            status: e.target.value as ProductStatus,
                          });
                          flash(p.id);
                        }}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
                      >
                        <option value="Active">Active</option>
                        <option value="Coming Soon">Coming Soon</option>
                      </select>
                    </label>

                    <div className="flex w-16 items-center justify-end">
                      <AnimatePresence>
                        {savedId === p.id && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-green"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                            Saved
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <p className="mt-8 text-xs text-faint">
          Note: this demo persists changes to your browser&apos;s local storage.
          In production this would write to a shared datastore.
        </p>
      </main>
    </div>
  );
}
