"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeHandler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-1.5 border-none focus-visible:ring-0 text-xs font-medium hover:dark:bg-background dark:text-foreground dark:bg-background"
    >
      {isDark ? (
        <>
          <Moon className="h-4 w-4" />
          Light theme
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" strokeWidth={1} />
          Dark theme
        </>
      )}
    </Button>
  );
}
