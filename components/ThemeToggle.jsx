"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      className="btn secondary"
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={theme === "dark"}
    >
      {mounted ? (theme === "dark" ? "🌙" : "☀️") : "🌗"}
    </button>
  );
}
