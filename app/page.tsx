import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { getDocument } from "@/lib/projects";

export default function Home() {
  const profile = getDocument("profile");

  const heading = String(profile.data.heading);
  const intro = String(profile.data.intro);
  return (
    <main
      id="main"
      className="relative flex min-h-svh items-center justify-center px-6 py-20"
    >
      <div className="absolute right-6 top-6 sm:right-10 sm:top-9">
        <ThemeToggle />
      </div>
      <div className="w-full max-w-6xl text-center space-y-8">
        <h1 className="text-3xl font-light leading-tight sm:text-4xl">
          {heading}
        </h1>
        <p className="mx-auto max-w-3xl text-md leading-relaxed text-(--muted) sm:text-lg">
          {intro}
        </p>
        <SocialLinks />
      </div>
    </main>
  );
}
