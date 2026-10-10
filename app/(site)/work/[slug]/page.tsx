import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return { title: project?.title ?? "Project", description: project?.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <article>
      <Link className="mt-10 inline-block text-sm text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" href="/work/">← All projects</Link>
      <header className="max-w-3xl py-10 sm:py-14">
        <h1 className="text-4xl font-normal leading-tight tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--muted)]">{project.summary}</p>
        <p className="mt-4 text-sm text-[var(--accent)]">{project.period}</p>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2" aria-label="Project links">
            {project.links.map((link) => <a className="border-b border-current text-[var(--accent)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a>)}
          </div>
        )}
      </header>
      <div className="markdown-body max-w-3xl border-t border-[var(--line)] pb-20 pt-10 text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: project.html }} />
    </article>
  );
}
