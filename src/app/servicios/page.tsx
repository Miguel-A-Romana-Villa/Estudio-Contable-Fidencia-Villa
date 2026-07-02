import Link from "next/link";
import { serviceCategories } from "@/data/services";

export const metadata = {
  title: "Servicios | Estudio Contable Fidencia Villa",
  description:
    "Servicios contables, tributarios, auditorias, asesoria legal empresarial, gestion laboral y servicios financieros.",
};

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden bg-[url('/servicios/fondo-mampara.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-secondary">Servicios</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            Asesoria integral para empresas, MYPES y emprendedores
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/85">
            Organizamos nuestras soluciones en seis areas para cubrir las necesidades
            contables, tributarias, laborales, legales y financieras de tu empresa.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="rounded-xl border border-white/25 bg-white/20 p-6 shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/25"
            >
              <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
              <p className="mt-3 leading-7 text-white/85">{service.summary}</p>
              <p className="mt-5 font-semibold text-brand-secondary">Ver servicios incluidos</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
