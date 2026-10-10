"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--text)] hover:bg-[var(--hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color mode"
    >
      <FiMoon aria-hidden="true" className="size-4 dark:hidden" />
      <FiSun aria-hidden="true" className="hidden size-4 dark:block" />
    </button>
  );
}
