import type { Metadata } from "next";
import Link from "next/link";
import { getDocument } from "@/lib/projects";

export const metadata: Metadata = { title: "CV" };

export default function CvPage() {
  const cv = getDocument("cv");
  return (
    <>
      <header className="max-w-3xl py-16 sm:py-20">
        <p className="mb-3 text-xs uppercase tracking-[.15em] text-[var(--accent)]">Curriculum vitae</p>
        <h1 className="text-4xl font-normal tracking-tight sm:text-5xl">{String(cv.data.title)}</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">{String(cv.data.intro)}</p>
        <Link className="mt-6 inline-block border-b border-current text-[var(--accent)] hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" href="/Shason-Gurung-Software-Engineer-CV.pdf" download>Download one-page CV (PDF)</Link>
      </header>
      <div className="markdown-body cv-markdown max-w-3xl pb-12 text-[var(--muted)]" dangerouslySetInnerHTML={{ __html: cv.html }} />
      <div className="border-t border-[var(--line)] pb-20 pt-8"><Link className="border-b border-current text-[var(--accent)] hover:text-[var(--text)]" href="/work/">See projects</Link></div>
    </>
  );
}
