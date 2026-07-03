"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const personas = [
  {
    number: "01",
    role: "Leitor",
    image: "/images/book02.jpg",
    alt: "Mulher lendo um livro em um café",
    description:
      "Monte sua biblioteca pessoal, acompanhe seu progresso e descubra novos livros no seu ritmo.",
  },
  {
    number: "02",
    role: "Editora",
    image: "/images/book03.jpg",
    alt: "Duas pessoas conversando em um corredor de biblioteca",
    description:
      "Publique e gerencie seus títulos, acompanhe métricas e alcance novos leitores.",
  },
  {
    number: "03",
    role: "Escola",
    image: "/images/book00.jpg",
    alt: "Mãe ajudando o filho a ler um livro",
    description:
      "Organize acervos, acompanhe turmas e incentive o hábito da leitura em sala de aula.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function PhotoTile({ persona }: { persona: (typeof personas)[number] }) {
  return (
    <motion.div
      variants={tileVariants}
      className="group relative h-64 overflow-hidden rounded-2xl sm:h-72"
    >
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={persona.image}
          alt={persona.alt}
          fill
          sizes="(min-width: 640px) 33vw, 100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"
      />
      <span className="absolute bottom-4 left-4 font-heading text-lg font-semibold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
        {persona.role}
      </span>
    </motion.div>
  );
}

function TextTile({ persona }: { persona: (typeof personas)[number] }) {
  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="relative flex h-64 flex-col justify-center overflow-hidden rounded-2xl bg-accent/60 p-6 ring-1 ring-foreground/10 sm:h-72 sm:p-8"
    >
      <span
        aria-hidden
        className="absolute -top-4 -right-2 font-heading text-8xl font-bold text-primary/10 select-none sm:text-9xl"
      >
        {persona.number}
      </span>
      <div className="relative flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold">
          {persona.role}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {persona.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Personas() {
  const [reader, publisher, school] = personas;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <p className="text-sm font-medium text-primary">Para quem é</p>
        <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance">
          Feito para cada perfil da leitura
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-3 sm:grid-cols-3"
      >
        <PhotoTile persona={reader} />
        <TextTile persona={reader} />
        <PhotoTile persona={publisher} />

        <TextTile persona={publisher} />
        <PhotoTile persona={school} />
        <TextTile persona={school} />
      </motion.div>
    </section>
  );
}
