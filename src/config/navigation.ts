import { CompassIcon, HomeIcon, InfoIcon, type LucideIcon } from "lucide-react";

import { ROUTES } from "@/constants/routes";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const landingNavItems: NavItem[] = [
  { label: "Início", href: ROUTES.home, icon: HomeIcon },
  { label: "Recursos", href: "#features", icon: CompassIcon },
  { label: "Sobre", href: "#about", icon: InfoIcon },
];
