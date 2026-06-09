"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "#projects", active: true },
];

export function WebDevelopmentNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border border-gold/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-gold hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2 text-sm transition-colors ${
                link.active
                  ? "text-gold underline decoration-gold underline-offset-4"
                  : "text-muted hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden items-center gap-2 rounded-xl border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold transition-all hover:border-gold hover:bg-gold/10 md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight className="h-4 w-4" />
        </Link>

        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-black px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 transition-colors hover:bg-white/5 ${
                  link.active ? "text-gold" : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
