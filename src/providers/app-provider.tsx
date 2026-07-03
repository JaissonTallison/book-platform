"use client";

import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import * as authService from "@/services/auth";
import type { User, UserRole } from "@/types/user";

interface AppContextValue {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    name: string,
    email: string,
    password: string,
    role: UserRole
  ) => Promise<void>;
  logout: () => void;
}

export const AppContext = createContext<AppContextValue | undefined>(
  undefined
);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reads the session from localStorage, which isn't available during SSR —
    // must run post-mount, so this legitimately can't be a lazy initializer.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(authService.getSession());
    setIsLoading(false);
  }, []);

  async function login(email: string, password: string) {
    const loggedInUser = await authService.login(email, password);
    setUser(loggedInUser);
  }

  async function register(
    name: string,
    email: string,
    password: string,
    role: UserRole
  ) {
    const newUser = await authService.register(name, email, password, role);
    setUser(newUser);
  }

  function logout() {
    authService.logout();
    setUser(null);
  }

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: user !== null,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
