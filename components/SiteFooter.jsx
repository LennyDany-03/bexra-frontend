import Link from "next/link";
import Logo from "./ui/Logo";
import { Container } from "./ui/Section";

const COMPANY_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#resources", label: "FAQ" },
];

const ACCOUNT_LINKS = [
  { href: "/login", label: "Log in" },
  { href: "/register", label: "Create account" },
  { href: "mailto:hello@bexra.co", label: "hello@bexra.co" },
];

const SOCIALS = [
  {
    href: "mailto:hello@bexra.co",
    label: "Email Bexra",
    icon: (
      <>
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M3 6.5l9 6 9-6" />
      </>
    ),
  },
  {
    href: "/#top",
    label: "Bexra on X",
    icon: <path d="M4 4l16 16M20 4L4 20" />,
  },
  {
    href: "/#top",
    label: "Bexra on LinkedIn",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7M7 7v0.5M11.5 17v-4a2 2 0 014 0v4" />
      </>
    ),
  },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-cream/50">
        {title}
      </div>
      <div className="mt-3.5 flex flex-col gap-2.5">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm text-cream/80 transition-colors hover:text-brand"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid grid-cols-1 gap-10 pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-[minmax(240px,1.4fr)_minmax(140px,0.6fr)_minmax(140px,0.6fr)]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-[26em] text-sm leading-[1.55] text-cream/70">
            The AI operating system for founders. Live product — not a Notion
            doc.
          </p>
          <div className="mt-5 flex gap-2.5">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-[34px] items-center justify-center rounded-[7px] border border-cream/25 text-cream transition-colors hover:border-brand hover:text-brand"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  {social.icon}
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <FooterColumn title="Company" links={COMPANY_LINKS} />
        <FooterColumn title="Account" links={ACCOUNT_LINKS} />
      </Container>

      <Container className="pb-10">
        <div className="tnum flex flex-wrap justify-between gap-4 border-t border-cream/15 pt-5 font-mono text-[11.5px] text-cream/55">
          <span>© 2026 Bexra Technologies. All rights reserved.</span>
          <span>Made in Coimbatore, India</span>
        </div>
      </Container>
    </footer>
  );
}
