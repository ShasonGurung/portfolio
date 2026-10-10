import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects" };

export default function WorkPage() {
  return (
    <>
      <header className="max-w-3xl py-16 sm:py-20">
        <h1 className="text-4xl font-normal tracking-tight sm:text-5xl">
          Projects
        </h1>
      </header>
      <div className="mb-24 border-t border-(--line)">
        {getProjects().map((project) => (
          <Link
            className="group grid gap-3 border-b border-(--line) px-1 py-6 transition-colors hover:bg-[var(--hover)] sm:grid-cols-[minmax(0,1fr)_9rem] sm:gap-8 sm:hover:px-3 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            href={`/work/${project.slug}/`}
            key={project.slug}
          >
            <span className="flex flex-col gap-1">
              <strong className="text-2xl font-normal tracking-tight">
                {project.title}
              </strong>
              <span className="max-w-2xl text-(--muted)">
                {project.summary}
              </span>
            </span>
            <span className="flex flex-row justify-between gap-3 text-sm text-(--muted) sm:flex-col sm:items-end">
              <span>{project.period}</span>
              <span className="text-(--accent)">
                View project <span aria-hidden="true">↗</span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
