import { LineChartIcon, LibraryBigIcon, UserPlusIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlusIcon,
    title: "Crie sua conta",
    description:
      "Cadastre-se gratuitamente como leitor, editora ou escola em poucos segundos.",
  },
  {
    number: "02",
    icon: LibraryBigIcon,
    title: "Monte sua biblioteca",
    description:
      "Organize os livros que está lendo, publicando ou gerenciando em um só lugar.",
  },
  {
    number: "03",
    icon: LineChartIcon,
    title: "Acompanhe seu progresso",
    description:
      "Veja seu histórico de leitura, publicações e atividade em tempo real.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative -mt-12 bg-teal py-28 sm:py-32"
      style={{
        clipPath: "polygon(0 3rem, 100% 0, 100% calc(100% - 3rem), 0 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-sm font-medium text-teal-foreground/80 uppercase tracking-widest">
            Simples do início ao fim
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-balance text-teal-foreground sm:text-4xl">
            Como funciona
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 left-0 font-heading text-7xl font-bold text-teal-foreground/15 select-none"
              >
                {step.number}
              </span>
              <div className="relative flex flex-col gap-3 pt-10">
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal-foreground/15">
                  <step.icon className="size-5 text-teal-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-teal-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-teal-foreground/80">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
