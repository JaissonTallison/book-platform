import { BookOpenIcon, GraduationCapIcon, LibraryIcon } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: BookOpenIcon,
    title: "Para leitores",
    description:
      "Monte sua biblioteca pessoal, acompanhe seu progresso de leitura e descubra novos livros.",
  },
  {
    icon: LibraryIcon,
    title: "Para editoras",
    description:
      "Publique e gerencie seus títulos, acompanhe métricas e alcance novos leitores.",
  },
  {
    icon: GraduationCapIcon,
    title: "Para escolas",
    description:
      "Organize acervos, acompanhe o progresso das turmas e incentive o hábito da leitura.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-6 sm:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="size-6 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
