import { ROUTES } from "@/constants/routes";

export interface NavItem {
  label: string;
  href: string;
}

export const landingNavItems: NavItem[] = [
  { label: "Início", href: ROUTES.home },
  { label: "Recursos", href: "#features" },
  { label: "Sobre", href: "#about" },
];
