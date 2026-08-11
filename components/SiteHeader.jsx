"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import Logo from "./ui/Logo";

const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#how", label: "How it works" },
  { href: "/#founder", label: "Founder Track" },
  { href: "/#enterprise", label: "Enterprise" },
  { href: "/#resources", label: "Resources" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-muted/20 bg-cream/95 backdrop-blur-sm backdrop-saturate-150">
      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center gap-8 px-6 md:px-10">
        <Logo />

        {/* Desktop navigation */}
        <div className="ml-2 hidden items-center gap-[26px] lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-3.5 md:flex">
          <Link
            href="/login"
            className="text-[13.5px] font-medium text-muted transition-colors hover:text-ink"
          >
            Log in
          </Link>
          <Button href="/register" size="sm">
            Get started
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex size-9 items-center justify-center rounded-md border border-muted/35 text-ink md:hidden"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-muted/20 bg-cream px-6 pb-5 pt-3 md:hidden"
        >
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-muted/15 py-3 text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2.5">
            <Button href="/register" size="full" onClick={() => setOpen(false)}>
              Get started
            </Button>
            <Button
              href="/login"
              variant="outline"
              size="full"
              onClick={() => setOpen(false)}
            >
              Log in
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
