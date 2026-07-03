import {
  BookCopyIcon,
  BookOpenIcon,
  GraduationCapIcon,
  LogInIcon,
  UserPlusIcon,
} from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";

import { Logo } from "./logo";

const navigationLinks = [
  { label: "Início", href: ROUTES.home },
  { label: "Recursos", href: "#features" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Sobre", href: "#about" },
];

const roleLinks = [
  {
    label: "Para leitores",
    href: `${ROUTES.register}?role=reader`,
    icon: BookOpenIcon,
  },
  {
    label: "Para editoras",
    href: `${ROUTES.register}?role=publisher`,
    icon: BookCopyIcon,
  },
  {
    label: "Para escolas",
    href: `${ROUTES.register}?role=school`,
    icon: GraduationCapIcon,
  },
];

const accountLinks = [
  { label: "Entrar", href: ROUTES.login, icon: LogInIcon },
  { label: "Criar conta", href: ROUTES.register, icon: UserPlusIcon },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-heading text-sm font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-accent/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              A plataforma que conecta leitores, editoras e escolas — para
              ler, publicar e acompanhar livros em um só lugar.
            </p>
          </div>

          <FooterColumn title="Navegação">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Perfis">
            {roleLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon className="size-4 text-primary" />
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="Conta">
            {accountLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon className="size-4 text-primary" />
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito para quem ama ler.
          </p>
        </div>
      </div>
    </footer>
  );
}
