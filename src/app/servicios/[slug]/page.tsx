import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, serviceCategories } from "@/data/services";
import { getWhatsAppUrl } from "@/data/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Estudio Contable Fidencia Villa`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="relative overflow-hidden bg-[url('/servicios/fondo-mampara.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <Link href="/servicios" className="font-semibold text-brand-secondary">
          Volver a servicios
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-2xl border border-white/25 bg-white/20 p-8 text-white shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              Area de servicio
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">{service.title}</h1>
            <p className="mt-5 leading-8 text-white/85">{service.summary}</p>
            <a
              href={getWhatsAppUrl(`Hola, deseo recibir informacion sobre ${service.title}.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-brand-secondary px-5 py-3 font-semibold text-brand-primary-dark"
            >
              Consultar este servicio
            </a>
            <div className="mt-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                Video explicativo
              </p>
              <div className="mt-4 grid aspect-video place-items-center rounded-xl border border-white/25 bg-black/25 p-5 text-center shadow-inner shadow-black/20 ring-1 ring-white/10">
                <p className="max-w-xs text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  Espacio para video de la contadora
                </p>
              </div>
            </div>
          </aside>
          <div className="grid gap-4">
            {service.items.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-white/25 bg-white/20 p-6 shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md"
              >
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 leading-7 text-white/85">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
