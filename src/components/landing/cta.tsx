import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export function Cta() {
  return (
    <section id="about" className="border-t bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
        <h2 className="font-heading text-2xl font-medium">
          Pronto para começar?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Crie sua conta gratuita e comece a usar o Book Platform hoje mesmo.
        </p>
        <Button size="lg" asChild>
          <Link href={ROUTES.register}>Cadastrar grátis</Link>
        </Button>
      </div>
    </section>
  );
}
