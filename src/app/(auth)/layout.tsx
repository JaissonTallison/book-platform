"use client";

import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Logo } from "@/components/layout/logo";
import { ROUTES } from "@/constants/routes";

const panelContent = {
  [ROUTES.login]: {
    image: "/images/book02.jpg",
    alt: "Leitora concentrada em um livro em um espaço aconchegante",
    headline: "Bom te ver de novo",
    description:
      "Entre para continuar de onde parou e acompanhar sua leitura.",
    benefits: [
      "Biblioteca pessoal com acompanhamento de progresso",
      "Publicação e gestão de títulos para editoras",
      "Acervos e turmas organizados para escolas",
    ],
  },
  [ROUTES.register]: {
    image: "/images/book00.jpg",
    alt: "Adulta apontando um livro para uma criança durante a leitura",
    headline: "Conectando leitores, editoras e escolas",
    description:
      "Tudo o que você precisa para ler, publicar e gerenciar livros em um só lugar.",
    benefits: [
      "Cadastro gratuito em poucos segundos",
      "Perfis para leitores, editoras e escolas",
      "Acesso imediato após a criação da conta",
    ],
  },
} as const;

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const content =
    panelContent[pathname as keyof typeof panelContent] ??
    panelContent[ROUTES.login];

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-8 p-6 sm:p-10">
        <Logo />

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-primary lg:flex lg:flex-col lg:justify-between lg:p-12">
        <Image
          src={content.image}
          alt={content.alt}
          fill
          sizes="50vw"
          priority
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/40 via-transparent to-primary/20 mix-blend-multiply"
        />

        <div className="relative z-10">
          <h2 className="max-w-sm font-heading text-3xl font-semibold text-balance text-white">
            {content.headline}
          </h2>
          <p className="mt-3 max-w-sm text-white/80">{content.description}</p>
        </div>

        <ul className="relative z-10 flex flex-col gap-3">
          {content.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2.5 text-sm text-white/90"
            >
              <CheckIcon className="mt-0.5 size-4 shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
