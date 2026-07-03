"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";

import { PhotoCarousel } from "./photo-carousel";

const HIGHLIGHT_CLASS =
  "text-primary drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]";

const slides = [
  {
    src: "/images/book00.jpg",
    alt: "Mãe ajudando o filho a ler um livro",
    kicker: "Leitura em família",
    title: (
      <>
        O hábito da leitura começa em{" "}
        <span className={HIGHLIGHT_CLASS}>família</span>
      </>
    ),
    description:
      "Acompanhe o progresso de leitura de quem você ama e incentive o hábito desde cedo.",
  },
  {
    src: "/images/book01.jpg",
    alt: "Dois jovens escolhendo livros em uma biblioteca",
    kicker: "Descubra novos títulos",
    title: (
      <>
        Descubra seu próximo <span className={HIGHLIGHT_CLASS}>livro</span>
      </>
    ),
    description:
      "Explore acervos organizados por editoras e escolas e encontre exatamente o que procura.",
  },
  {
    src: "/images/book02.jpg",
    alt: "Mulher lendo um livro em um café",
    kicker: "Leia no seu ritmo",
    title: (
      <>
        Sua <span className={HIGHLIGHT_CLASS}>biblioteca</span>, onde você
        estiver
      </>
    ),
    description:
      "Acesse seus livros e continue de onde parou, a qualquer hora, em qualquer lugar.",
  },
];

const carouselSlides = slides.map(({ src, alt }) => ({ src, alt }));

export function Hero() {
  const [current, setCurrent] = useState(0);
  const handleIndexChange = useCallback((index: number) => {
    setCurrent(index);
  }, []);
  const slide = slides[current];

  return (
    <section className="relative isolate flex min-h-150 items-center overflow-hidden text-center sm:min-h-[88vh]">
      <PhotoCarousel slides={carouselSlides} onIndexChange={handleIndexChange} />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex max-w-xs items-start justify-center gap-2 text-xs font-semibold tracking-[0.15em] text-white/90 uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:max-w-none sm:items-center sm:tracking-[0.2em]">
              <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary sm:mt-0" />
              {slide.kicker}
            </div>

            <h1 className="max-w-3xl font-heading text-4xl leading-[1.05] font-bold text-balance text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)] sm:text-6xl">
              {slide.title}
            </h1>

            <p className="max-w-xl text-lg text-balance text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild className="shadow-lg shadow-primary/30">
            <Link href={ROUTES.register}>
              Cadastrar grátis
              <ArrowRightIcon />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/60 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            asChild
          >
            <Link href={ROUTES.login}>Já tenho conta</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
