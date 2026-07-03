import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

export function Cta() {
  return (
    <section
      id="about"
      className="relative isolate -mt-12 flex min-h-104 items-center overflow-hidden py-28 text-center sm:min-h-128 sm:py-32"
      style={{ clipPath: "polygon(0 3rem, 100% 0, 100% 100%, 0 100%)" }}
    >
      <Image
        src="/images/book03.jpg"
        alt="Corredor de biblioteca com estantes de livros"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/60 to-black/45"
      />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 sm:px-6">
        <h2 className="font-heading text-3xl font-semibold text-balance text-white sm:text-4xl">
          Pronto para começar sua próxima leitura?
        </h2>
        <p className="max-w-md text-white/80">
          Crie sua conta gratuita e comece a usar o Book Platform hoje mesmo.
        </p>
        <Button size="lg" asChild className="mt-2">
          <Link href={ROUTES.register}>
            Cadastrar grátis
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
