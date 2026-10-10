import type { Metadata } from "next";

export const metadata: Metadata = { title: "CV" };

export default function CvPage() {
  return (
    <h1 className="py-16 text-3xl font-normal tracking-tight">CV</h1>
  );
}
