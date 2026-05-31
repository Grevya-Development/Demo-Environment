"use client";

import Link from "next/link";
import { GrevyaMark } from "./logo";
import { useDialog } from "./dialog-provider";

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Irookee", href: "#products" },
      { label: "Internal Onboarding", href: "#products" },
      { label: "Grevya Naturals", href: "#products" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Grevya", href: "#about" },
      { label: "Solutions", href: "#solutions" },
      { label: "Admin", href: "/admin" },
    ],
  },
];

export function Footer() {
  const { openContact, openDemo } = useDialog();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Link href="#top" className="inline-flex items-center gap-2.5">
            <GrevyaMark className="h-8 w-8" />
            <span className="font-display text-xl font-bold tracking-tight">Grevya</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            One platform connecting AI, business operations, healthcare
            innovation, and consumer brands.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="label-mono text-faint">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="label-mono text-faint">Get in touch</h3>
          <div className="mt-4 flex flex-col gap-2.5">
            <button
              onClick={openDemo}
              className="text-left text-sm text-muted transition-colors hover:text-foreground"
            >
              Request a demo
            </button>
            <button
              onClick={openContact}
              className="text-left text-sm text-muted transition-colors hover:text-foreground"
            >
              Contact sales
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-faint sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Grevya. All rights reserved.</p>
          <p className="font-mono">The Grevya Ecosystem · Demo Portal</p>
        </div>
      </div>
    </footer>
  );
}
