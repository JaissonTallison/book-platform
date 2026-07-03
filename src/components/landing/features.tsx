"use client";

import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  BookCopyIcon,
  BookOpenIcon,
  CheckIcon,
  GraduationCapIcon,
} from "lucide-react";
import Link from "next/link";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";

const features = [
  {
    role: "reader",
    icon: BookOpenIcon,
    color: "primary" as const,
    title: "Para leitores",
    description:
      "Monte sua biblioteca pessoal, acompanhe seu progresso de leitura e descubra novos livros.",
    points: ["Estante pessoal ilimitada", "Recomendações personalizadas"],
  },
  {
    role: "publisher",
    icon: BookCopyIcon,
    color: "teal" as const,
    title: "Para editoras",
    description:
      "Publique e gerencie seus títulos, acompanhe métricas e alcance novos leitores.",
    points: ["Métricas de publicação", "Alcance de novos leitores"],
  },
  {
    role: "school",
    icon: GraduationCapIcon,
    color: "primary" as const,
    title: "Para escolas",
    description:
      "Organize acervos, acompanhe o progresso das turmas e incentive o hábito da leitura.",
    points: ["Gestão de turmas", "Acompanhamento de progresso"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Features() {
  return (
    <section
      id="features"
      className="relative -mt-12 bg-accent/60 py-28 sm:py-32"
      style={{
        clipPath: "polygon(0 3rem, 100% 0, 100% calc(100% - 3rem), 0 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="text-sm font-medium text-primary">Para cada perfil</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-balance">
            Uma plataforma, três experiências
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="h-full"
              >
                <Card
                  className={
                    feature.color === "primary"
                      ? "group h-full gap-4 p-2 ring-1 ring-foreground/10 transition-shadow hover:shadow-lg hover:ring-primary/30"
                      : "group h-full gap-4 p-2 ring-1 ring-foreground/10 transition-shadow hover:shadow-lg hover:ring-teal/30"
                  }
                >
                  <div className="flex h-full flex-col gap-3 px-4 pt-4 pb-5">
                    <div
                      className={
                        feature.color === "primary"
                          ? "flex size-11 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                          : "flex size-11 items-center justify-center rounded-xl bg-teal/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                      }
                    >
                      <feature.icon
                        className={
                          feature.color === "primary"
                            ? "size-5 text-primary"
                            : "size-5 text-teal"
                        }
                      />
                    </div>

                    <CardTitle className="text-base">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-[0.925rem] leading-relaxed">
                      {feature.description}
                    </CardDescription>

                    <ul className="mt-1 flex flex-col gap-1.5">
                      {feature.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckIcon
                            className={
                              feature.color === "primary"
                                ? "size-3.5 shrink-0 text-primary"
                                : "size-3.5 shrink-0 text-teal"
                            }
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`${ROUTES.register}?role=${feature.role}`}
                      className={
                        feature.color === "primary"
                          ? "mt-auto flex items-center gap-1.5 pt-3 text-sm font-medium text-primary"
                          : "mt-auto flex items-center gap-1.5 pt-3 text-sm font-medium text-teal"
                      }
                    >
                      Saiba mais
                      <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
