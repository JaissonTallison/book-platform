import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center">
      <h1 className="max-w-2xl font-heading text-4xl font-medium text-balance sm:text-5xl">
        Sua plataforma completa de leitura, publicação e gestão de livros
      </h1>
      <p className="max-w-xl text-lg text-muted-foreground text-balance">
        Conectamos leitores, editoras e escolas em um só lugar — para ler,
        publicar e acompanhar livros de forma simples.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="lg" asChild>
          <Link href={ROUTES.register}>
            Cadastrar grátis
            <ArrowRightIcon />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href={ROUTES.login}>Já tenho conta</Link>
        </Button>
      </div>
    </section>
  );
}
