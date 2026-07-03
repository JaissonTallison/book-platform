import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

const fadeMask =
  "linear-gradient(110deg, transparent 0%, transparent 26%, black 64%)";

const blueprintLine = "color-mix(in oklch, var(--primary) 22%, transparent)";
const blueprintPattern = `repeating-linear-gradient(45deg, ${blueprintLine} 0, ${blueprintLine} 1px, transparent 1px, transparent 14px), repeating-linear-gradient(-45deg, ${blueprintLine} 0, ${blueprintLine} 1px, transparent 1px, transparent 14px)`;

export function LibraryBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Acervo completo &amp; curadoria
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A biblioteca perfeita para cada leitor.
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Organize sua estante, descubra recomendações personalizadas e
            acompanhe o que está lendo — tudo dentro da mesma plataforma,
            pensada para leitores, editoras e escolas.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <Link href={ROUTES.register}>
              Explorar agora
              <ArrowUpRightIcon />
            </Link>
          </Button>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-4 -left-4 size-16 border-t-2 border-l-2 border-primary/50"
          />
          <div
            aria-hidden
            className="absolute -right-4 -bottom-4 size-16 border-r-2 border-b-2 border-primary/50"
          />

          <div
            className="relative aspect-4/3 overflow-hidden rounded-2xl"
            style={{ backgroundImage: blueprintPattern }}
          >
            <div
              className="absolute inset-0"
              style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
            >
              <Image
                src="/images/book03.jpg"
                alt="Dois estudantes conversando em um corredor de biblioteca"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
