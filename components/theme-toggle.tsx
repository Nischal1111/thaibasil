"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="tertiary"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </Button>
  );
}
