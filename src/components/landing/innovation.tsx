"use client";

import { motion } from "framer-motion";
import { BotIcon, CheckIcon, QrCodeIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const blueprintLine = "color-mix(in oklch, var(--primary) 35%, transparent)";
const blueprintPattern = `repeating-linear-gradient(45deg, ${blueprintLine} 0, ${blueprintLine} 1px, transparent 1px, transparent 16px), repeating-linear-gradient(-45deg, ${blueprintLine} 0, ${blueprintLine} 1px, transparent 1px, transparent 16px)`;

const QR_GRID_SIZE = 9;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function isFinderZone(row: number, col: number) {
  const zones = [
    [0, 0],
    [0, QR_GRID_SIZE - 3],
    [QR_GRID_SIZE - 3, 0],
  ];
  return zones.some(
    ([zr, zc]) => row >= zr && row < zr + 3 && col >= zc && col < zc + 3
  );
}

function QrFinder({ className }: { className?: string }) {
  return (
    <div className={cn("absolute size-[27%] bg-white", className)}>
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute inset-[16%] bg-white" />
      <div className="absolute inset-[34%] bg-foreground" />
    </div>
  );
}

function QrMockup() {
  const cells = Array.from({ length: QR_GRID_SIZE * QR_GRID_SIZE }, (_, i) => {
    const row = Math.floor(i / QR_GRID_SIZE);
    const col = i % QR_GRID_SIZE;
    if (isFinderZone(row, col)) return false;
    return seededRandom(i) > 0.52;
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-2xl bg-white p-4 shadow-xl">
      <div
        className="relative grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${QR_GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${QR_GRID_SIZE}, 1fr)`,
        }}
      >
        {cells.map((filled, i) => (
          <div
            key={i}
            className={filled ? "bg-foreground" : "bg-transparent"}
          />
        ))}
      </div>

      <QrFinder className="top-4 left-4" />
      <QrFinder className="top-4 right-4" />
      <QrFinder className="bottom-4 left-4" />

      <motion.div
        aria-hidden
        className="absolute inset-x-4 h-8 rounded-full bg-linear-to-b from-primary/0 via-primary/70 to-primary/0 blur-[2px]"
        animate={{ top: ["4%", "88%", "4%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function TypingCursor() {
  return (
    <motion.span
      aria-hidden
      className="ml-0.5 inline-block h-3.5 w-0.5 bg-teal align-middle"
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
    />
  );
}

function AiMockup() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl bg-[#12100e] p-5 shadow-2xl shadow-black/20 ring-1 ring-white/10">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-full bg-teal/20">
          <BotIcon className="size-4 text-teal" />
        </span>
        <span className="text-sm font-medium text-white/90">
          Assistente de leitura
        </span>
        <motion.span
          aria-hidden
          className="ml-auto size-2 rounded-full bg-teal"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground">
          Me indica um livro parecido com o último que li?
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-3.5 py-2 text-sm text-white/85">
          Baseado no seu perfil, recomendo algo com o mesmo ritmo e tema
          <TypingCursor />
        </div>
      </div>
    </div>
  );
}

const rowVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Innovation() {
  return (
    <section
      className="relative -mt-12 overflow-hidden bg-background py-28 sm:py-32"
      style={{
        clipPath: "polygon(0 3rem, 100% 0, 100% calc(100% - 3rem), 0 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-40 sm:w-2/3"
        style={{
          maskImage: "linear-gradient(to left, black 35%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 35%, transparent 90%)",
        }}
      >
        <Image
          src="/images/book01.jpg"
          alt=""
          fill
          className="object-cover blur-2xl"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-2/3"
        style={{
          backgroundImage: blueprintPattern,
          maskImage: "linear-gradient(to left, black 35%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 35%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-20 max-w-xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            O diferencial
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-balance text-foreground sm:text-5xl">
            Do papel à tela, com inteligência
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={rowVariants}
          className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16"
        >
          <QrMockup />
          <div>
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <QrCodeIcon className="size-5 text-primary" />
            </span>
            <h3 className="mt-4 font-heading text-2xl font-semibold">
              Do papel para o digital, num scan
            </h3>
            <p className="mt-3 text-muted-foreground">
              Editoras e escolas geram um QR Code exclusivo para cada
              exemplar físico. O leitor escaneia e acessa o conteúdo digital,
              áudio ou materiais extras na hora.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "QR Code exclusivo por exemplar",
                "Acesso instantâneo ao conteúdo",
                "Sem apps adicionais",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckIcon className="size-4 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={rowVariants}
          className="mt-20 grid items-center gap-10 sm:grid-cols-2 sm:gap-16"
        >
          <div className="sm:order-1">
            <span className="flex size-11 items-center justify-center rounded-xl bg-teal/10">
              <BotIcon className="size-5 text-teal" />
            </span>
            <h3 className="mt-4 font-heading text-2xl font-semibold">
              Seu assistente de leitura pessoal
            </h3>
            <p className="mt-3 text-muted-foreground">
              Nossa IA recomenda livros com base no seu perfil de leitura,
              resume capítulos e responde dúvidas sobre o que você está
              lendo, direto na plataforma.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                "Recomendações sob medida",
                "Resumos inteligentes de capítulos",
                "Tira dúvidas em tempo real",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckIcon className="size-4 shrink-0 text-teal" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:order-2">
            <AiMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
