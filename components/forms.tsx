"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PRODUCTS } from "@/lib/products";

const fieldCls =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-faint transition-colors focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-xs font-medium text-muted">{children}</span>
  );
}

function SuccessState({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center gap-3 py-6 text-center"
    >
      <span className="grid h-14 w-14 place-items-center rounded-full bg-green/15 text-green">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <p className="font-display text-lg font-semibold text-foreground">You&apos;re all set</p>
      <p className="max-w-sm text-sm text-muted">{message}</p>
    </motion.div>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="mt-1 w-full rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
    >
      {label}
    </button>
  );
}

export function RequestDemoForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <SuccessState message="Thanks for your interest. A member of the Grevya team will reach out within one business day to schedule your walkthrough." />
    );

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        onDone?.();
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label>
          <Label>Full name</Label>
          <input required className={fieldCls} placeholder="Jordan Avery" />
        </label>
        <label>
          <Label>Work email</Label>
          <input required type="email" className={fieldCls} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <Label>Company</Label>
        <input className={fieldCls} placeholder="Acme Inc." />
      </label>
      <label className="block">
        <Label>Which product?</Label>
        <select className={fieldCls} defaultValue="">
          <option value="" disabled>
            Select a product
          </option>
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
          <option value="ecosystem">The full ecosystem</option>
        </select>
      </label>
      <label className="block">
        <Label>What are you hoping to solve?</Label>
        <textarea rows={3} className={fieldCls} placeholder="Tell us a little about your use case…" />
      </label>
      <SubmitButton label="Request Demo" />
    </form>
  );
}

export function ContactForm({ onDone }: { onDone?: () => void }) {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <SuccessState message="Your message has reached the Grevya team. We typically respond within one business day." />
    );

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        onDone?.();
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label>
          <Label>Name</Label>
          <input required className={fieldCls} placeholder="Your name" />
        </label>
        <label>
          <Label>Email</Label>
          <input required type="email" className={fieldCls} placeholder="you@company.com" />
        </label>
      </div>
      <label className="block">
        <Label>Subject</Label>
        <input className={fieldCls} placeholder="How can we help?" />
      </label>
      <label className="block">
        <Label>Message</Label>
        <textarea required rows={4} className={fieldCls} placeholder="Write your message…" />
      </label>
      <SubmitButton label="Send Message" />
    </form>
  );
}
