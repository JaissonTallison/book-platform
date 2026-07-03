import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link href={ROUTES.login} className="hover:text-foreground">
            Entrar
          </Link>
          <Link href={ROUTES.register} className="hover:text-foreground">
            Cadastrar
          </Link>
        </div>
      </div>
    </footer>
  );
}
