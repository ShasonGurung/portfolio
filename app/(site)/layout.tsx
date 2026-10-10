import Link from "next/link";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-6 sm:px-10 lg:px-16">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-(--bg) focus:px-4 focus:py-2 focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
        href="#main"
      >
        Skip to content
      </a>
      <header className="flex min-h-20 items-center justify-end gap-6 border-b border-(--line) py-4 max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <nav
          className="flex items-center gap-5 text-sm sm:gap-7 sm:text-base"
          aria-label="Main navigation"
        >
          <Link
            className="hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
            href="/work/"
          >
            Projects
          </Link>
          <Link
            className="hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
            href="/cv/"
          >
            CV
          </Link>
          <a
            className="hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
            href="mailto:shason.gurung@outlook.com"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main id="main" className="flex-1">
        {children}
      </main>
      <footer className="flex items-center justify-end gap-4 border-t border-(--line) py-8 text-sm text-(--muted)">
        <SocialLinks />
      </footer>
    </div>
  );
}
