import { ArrowRight } from "lucide-react";
import Link from "next/link";

type ViewMoreButtonProps = {
  href?: string;
  className?: string;
};

export function ViewMoreButton({ href = "#", className = "" }: ViewMoreButtonProps) {
  const classNames = `inline-flex items-center gap-2 rounded-lg border border-gold/40 px-4 py-2 text-xs font-semibold text-gold transition-colors hover:border-gold hover:bg-gold/10 ${className}`;

  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNames}
      >
        View More
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    );
  }

  return (
    <Link href={href} className={classNames}>
      View More
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}
