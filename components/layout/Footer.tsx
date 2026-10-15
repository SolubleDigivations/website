import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { footerLinks } from "@/lib/footer";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#F8F8F5]">
      <div className="container-soluble">

        {/* Main footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1.2fr] lg:py-20">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <SolubleMark />

              <span className="text-xl font-bold tracking-[-0.04em]">
                Soluble
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Digital Engineering for Modern Businesses.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Quick Links">
            {footerLinks.quickLinks.map((link) => (
              <FooterLink
                key={link.label}
                href={link.href}
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Social */}
          <FooterColumn title="Social">
            {footerLinks.socialLinks.map((link) => (
              <FooterLink
                key={link.label}
                href={link.href}
                external
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-semibold">
              Stay in the loop
            </p>

            <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
              Get updates on our work and insights.
            </p>

            <NewsletterForm />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Soluble Digivations.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
function SolubleMark() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="6"
        fill="#6C8CFF"
      />

      <circle
        cx="16"
        cy="8"
        r="6"
        fill="#B18CFF"
      />

      <circle
        cx="8"
        cy="16"
        r="6"
        fill="#52D9AD"
      />

      <circle
        cx="16"
        cy="16"
        r="6"
        fill="#FFD65A"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        fill="#FF91D4"
      />
    </svg>
  );
}
function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold">
        {title}
      </p>

      <nav className="mt-4 flex flex-col items-start gap-2">
        {children}
      </nav>
    </div>
  );
}function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
          }
        : {})}
      className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
    >
      {children}

      {external && (
        <ArrowUpRight
          size={11}
          className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      )}
    </Link>
  );
}function NewsletterForm() {
  return (
    <form className="mt-5 flex max-w-sm items-center rounded-full border border-border bg-white p-1.5">
      <input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground"
      />

      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <ArrowUpRight size={15} />
      </button>
    </form>
  );
}