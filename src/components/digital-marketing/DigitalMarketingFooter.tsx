import Link from "next/link";
import { Camera, Globe, Link2, Share2 } from "lucide-react";
import { Logo } from "../Logo";
import { Button } from "../Button";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Let's Talk", href: "#contact" },
];

const socialLinks = [
  { icon: Share2, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Link2, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Dribbble" },
];

export function DigitalMarketingFooter() {
  return (
    <footer id="contact" className="border-t border-white/5 px-6 pt-16 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A digital marketing agency helping brands scale through strategic
              SEO, paid ads, and data-driven growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:border-gold hover:bg-gold/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
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
            <h3 className="mb-3 text-lg font-semibold text-white">
              Let&apos;s Build Something Amazing
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              Ready to grow your brand? Let&apos;s discuss how we can help you
              achieve your marketing goals.
            </p>
            <Button href="mailto:hello@fusionstack.com">Let&apos;s Talk</Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; 2024 fusionstack. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Made with <span className="text-gold">♥</span> by fusionstack
          </p>
        </div>
      </div>
    </footer>
  );
}
