"use client";

import { motion } from "framer-motion";
import { useDialog } from "../dialog-provider";

const shards = [
  { color: "var(--grevya-orange)", top: "18%", left: "8%", size: 58, r: -18, d: 0 },
  { color: "var(--grevya-amber)", top: "12%", left: "78%", size: 44, r: 12, d: 1.2 },
  { color: "var(--grevya-green)", top: "68%", left: "14%", size: 50, r: 22, d: 0.6 },
  { color: "var(--grevya-blue)", top: "62%", left: "82%", size: 64, r: -10, d: 1.8 },
  { color: "var(--grevya-amber)", top: "40%", left: "92%", size: 30, r: 30, d: 2.4 },
  { color: "var(--grevya-blue)", top: "82%", left: "46%", size: 34, r: -24, d: 1 },
];

const words = "Welcome to the Grevya Ecosystem".split(" ");

export function Hero() {
  const { openDemo } = useDialog();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* soft brand mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in srgb, var(--grevya-blue) 14%, transparent), transparent 70%), radial-gradient(40% 40% at 85% 30%, color-mix(in srgb, var(--grevya-green) 12%, transparent), transparent 70%), radial-gradient(40% 40% at 12% 35%, color-mix(in srgb, var(--grevya-orange) 10%, transparent), transparent 70%)",
        }}
      />
      {/* fine grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent 80%)",
        }}
      />
      {/* floating shards */}
      {shards.map((s, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute -z-10 hidden rounded-[10px] sm:block"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.6 }}
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size * 0.42,
            background: s.color,
            ["--r" as string]: `${s.r}deg`,
            transform: `rotate(${s.r}deg)`,
            animation: `float-shard ${6 + s.d}s ease-in-out ${s.d}s infinite`,
            boxShadow: `0 12px 40px -8px ${s.color}`,
          }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <motion.a
          href="#products"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur transition-colors hover:text-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
          </span>
          6 platforms live · 2 on the roadmap
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </motion.a>

        <h1 className="font-display mt-7 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-7xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {w === "Grevya" || w === "Ecosystem" ? (
                <span className="bg-gradient-to-r from-orange via-amber to-blue bg-clip-text text-transparent">
                  {w}
                </span>
              ) : (
                w
              )}
              {i < words.length - 1 && " "}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted"
        >
          One platform connecting AI, business operations, healthcare
          innovation, and consumer brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.68, duration: 0.6 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#products"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Explore Products
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <button
            onClick={openDemo}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2 sm:w-auto"
          >
            Request Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
