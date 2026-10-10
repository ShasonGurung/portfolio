import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const directory = path.join(process.cwd(), "content", "projects");

export function getDocument(name: "profile" | "cv") {
  const { data, content } = matter(fs.readFileSync(path.join(process.cwd(), "content", `${name}.md`), "utf8"));
  return { data, html: marked.parse(content, { async: false }) as string };
}

export type Project = {
  slug: string;
  title: string;
  area: string;
  period: string;
  summary: string;
  role: string;
  technologies: string[];
  links: { label: string; url: string }[];
  order: number;
  html: string;
};

export function getProjects(): Project[] {
  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(directory, file), "utf8"));
      return {
        slug,
        title: String(data.title),
        area: String(data.area),
        period: String(data.period),
        summary: String(data.summary),
        role: String(data.role),
        technologies: Array.isArray(data.technologies) ? data.technologies.map(String) : [],
        links: Array.isArray(data.links) ? data.links.map((link: { label: unknown; url: unknown }) => ({ label: String(link.label), url: String(link.url) })) : [],
        order: Number(data.order),
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}
