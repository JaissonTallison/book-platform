import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";

import { AppProvider } from "./app-provider";
import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AppProvider>
          {children}
          <Toaster richColors closeButton />
        </AppProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
