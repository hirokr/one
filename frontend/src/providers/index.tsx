'use client'
import React from "react";
import { ThemeProvider } from "./theme-provider";
import SmoothScrolling from "./smoothScrolling";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScrolling>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </SmoothScrolling>
    </>
  );
}
