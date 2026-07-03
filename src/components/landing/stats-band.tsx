const stats = [
  { value: "3", label: "Perfis de acesso: leitor, editora e escola" },
  { value: "100%", label: "Gratuito para leitores começarem" },
  { value: "24/7", label: "Acesso de qualquer lugar, a qualquer hora" },
];

export function StatsBand() {
  return (
    <section className="border-y">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 text-center sm:grid-cols-3 sm:px-6 sm:text-left">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-heading text-4xl font-semibold text-primary sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
