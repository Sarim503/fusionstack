import Link from "next/link";
import { CONTACT } from "@/lib/contact";
import { Button } from "../Button";
import { ContactIcons } from "../ContactIcons";
import { Logo } from "../Logo";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Product Design", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "3D & Motion Design", href: "#services" },
  { label: "Design Systems", href: "#services" },
];

export function AiProductDesignFooter() {
  return (
    <footer className="border-t border-white/5 px-6 pt-16 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI-powered product designer crafting intelligent, engaging digital
              experiences that help brands stand out.
            </p>
            <div className="mt-6">
              <ContactIcons variant="muted" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              Quick Links
            </h3>
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
              Let&apos;s Work Together
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Available for freelance projects and long-term collaborations.
              Let&apos;s bring your product vision to life.
            </p>
            <Button href={CONTACT.email}>Let&apos;s Work Together</Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; 2024 fusionstack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-muted transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted transition-colors hover:text-gold"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
