"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // `resolvedTheme` can already contain the saved browser preference during hydration.
  // Keep the first client render identical to the server, then show it once mounted.
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center rounded-md border border-line bg-surface text-lg shadow-sm shadow-stone-950/5 transition-colors hover:border-accent/40 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed"
    >
      {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
    </button>
  );
}
