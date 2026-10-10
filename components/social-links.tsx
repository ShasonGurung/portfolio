import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiFileText, FiFolder } from "react-icons/fi";

type SocialLinksProps = { className?: string };

type SocialLink = {
  href: string;
  label: string;
  icon: IconType;
  external?: boolean;
};

const baseLinkClass =
  "inline-flex size-10 items-center justify-center rounded-full text-(--muted) transition-colors hover:bg-(--hover) hover:text-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)";

const socialLinks: SocialLink[] = [
  { href: "/work/", label: "Projects", icon: FiFolder },
  { href: "/cv/", label: "CV", icon: FiFileText },
  {
    href: "https://www.linkedin.com/in/shason/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    external: true,
  },
  {
    href: "https://github.com/Jivanam",
    label: "GitHub",
    icon: FaGithub,
    external: true,
  },
];

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <nav
      className={`flex justify-center items-center gap-6 ${className}`}
      aria-label="Social links"
    >
      {socialLinks.map(({ href, label, icon: Icon, external }) => {
        const content = (
          <Icon aria-hidden="true" className="size-5" />
        );

        if (external) {
          return (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              className={baseLinkClass}
            >
              {content}
            </a>
          );
        }

        return (
          <Link
            key={label}
            href={href}
            aria-label={label}
            title={label}
            className={baseLinkClass}
          >
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
