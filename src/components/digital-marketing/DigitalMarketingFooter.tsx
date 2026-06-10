import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { Button } from "../Button";
import { ContactIcons } from "../ContactIcons";
import { Logo } from "../Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Careers", href: "#contact" },
];

const serviceLinks = [
  { label: "SEO Optimization", href: "#services" },
  { label: "Google Ads", href: "#services" },
  { label: "Meta Ads", href: "#services" },
  { label: "Marketing Strategy", href: "#services" },
];

export function DigitalMarketingFooter() {
  return (
    <footer className="border-t border-white/5 px-6 pt-16 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A digital marketing agency helping brands scale through strategic
              SEO, paid ads, and data-driven growth.
            </p>
            <div className="mt-6">
              <ContactIcons variant="muted" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Ready to grow your brand? Let&apos;s discuss how we can help you
              achieve your marketing goals.
            </p>
            <Button href={CONTACT.email}>Get in Touch</Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; 2024 fusionstack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-muted transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted transition-colors hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
