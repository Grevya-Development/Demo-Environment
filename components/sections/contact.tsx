"use client";

import { Reveal } from "../motion";
import { ContactForm } from "../forms";
import { useDialog } from "../dialog-provider";

export function Contact() {
  const { openDemo } = useDialog();

  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-4 sm:px-8 sm:pb-32">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface">
          {/* brand mesh */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-90"
            style={{
              background:
                "radial-gradient(50% 80% at 10% 10%, color-mix(in srgb, var(--grevya-orange) 12%, transparent), transparent 60%), radial-gradient(50% 80% at 90% 20%, color-mix(in srgb, var(--grevya-blue) 14%, transparent), transparent 60%), radial-gradient(60% 80% at 60% 100%, color-mix(in srgb, var(--grevya-green) 12%, transparent), transparent 60%)",
            }}
          />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="label-mono text-faint">Get started</p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Bring the whole ecosystem to your team
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Request a guided walkthrough of any Grevya product, or send us a
                note — we&apos;ll get back within one business day.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={openDemo}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                >
                  Request Demo →
                </button>
                <a
                  href="mailto:hello@grevya.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
                >
                  hello@grevya.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-border bg-background p-6 sm:p-7">
              <h3 className="font-display text-lg font-bold text-foreground">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-muted">We read every one.</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
