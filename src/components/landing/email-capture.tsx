"use client";

import { ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";

export function EmailCapture() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const params = email ? `?email=${encodeURIComponent(email)}` : "";
    router.push(`${ROUTES.register}${params}`);
  }

  return (
    <section
      className="relative -mt-12 overflow-hidden py-24 sm:py-28"
      style={{
        clipPath: "polygon(0 3rem, 100% 0, 100% 100%, 0 100%)",
        backgroundImage:
          "linear-gradient(120deg, var(--primary), var(--teal))",
      }}
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-semibold text-white text-balance sm:text-3xl">
          Comece a organizar sua leitura hoje
        </h2>
        <p className="max-w-md text-white/85">
          Deixe seu email e vá direto para o cadastro gratuito.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-2 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            required
            placeholder="seu@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-11 border-white/30 bg-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/50"
          />
          <Button
            type="submit"
            size="lg"
            variant="secondary"
            className="shrink-0"
          >
            Continuar
            <ArrowRightIcon />
          </Button>
        </form>
      </div>
    </section>
  );
}
