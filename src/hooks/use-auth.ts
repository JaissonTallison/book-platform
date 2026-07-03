import { useContext } from "react";

import { AppContext } from "@/providers/app-provider";

export function useAuth() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAuth must be used within an AppProvider");
  }

  return context;
}
