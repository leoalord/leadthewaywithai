import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line bg-surface/60">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              AI engineer and Ranger-shaped operator. Building practical systems
              that turn complexity into momentum, drawing on advanced analytics experience at BP and IVP, and clinical AI engineering at KaiCare.ai.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <nav aria-label="Site" className="flex flex-col gap-2 text-sm">
              <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                Explore
              </span>
              <Link href="/#services" className="text-fg/75 transition-colors hover:text-terracotta-500">
                Services
              </Link>
              <Link href="/#work" className="text-fg/75 transition-colors hover:text-terracotta-500">
                Work
              </Link>
              <Link href="/about" className="text-fg/75 transition-colors hover:text-terracotta-500">
                About
              </Link>
              <Link href="/#writing" className="text-fg/75 transition-colors hover:text-terracotta-500">
                Writing &amp; Talks
              </Link>
              <Link href="#contact" className="text-fg/75 transition-colors hover:text-terracotta-500">
                Contact
              </Link>
            </nav>
            <nav aria-label="Elsewhere" className="flex flex-col gap-2 text-sm">
              <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
                Elsewhere
              </span>
              <a
                href="https://github.com/leoalord"
                className="text-fg/75 transition-colors hover:text-terracotta-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/leowalker"
                className="text-fg/75 transition-colors hover:text-terracotta-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://home.mlops.community/home/events"
                className="text-fg/75 transition-colors hover:text-terracotta-500"
                rel="noopener noreferrer"
                target="_blank"
              >
                MLOps Community
              </a>
            </nav>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted">
          © {year} Lead The Way with AI. Built with Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
