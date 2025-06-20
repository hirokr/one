"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button
      onClick={toggleTheme}
      className='flex items-center justify-center'
      variant='outline'
      size='icon'
      aria-label='Toggle theme'
    >
      {theme === "dark" ? (
        <Sun className='h-4 w-4 border-0' />
      ) : (
        <Moon className='h-4 w-4 border-0' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
}
