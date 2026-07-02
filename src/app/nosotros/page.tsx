import Image from "next/image";
import Link from "next/link";
import { AboutHeroBackgroundSlider } from "@/components/AboutHeroBackgroundSlider";
import { getWhatsAppUrl } from "@/data/site";

const values = [
  {
    title: "Responsabilidad",
    text: "Asumimos cada servicio con orden, seriedad y compromiso profesional.",
  },
  {
    title: "Confianza",
    text: "Construimos relaciones de largo plazo basadas en transparencia y comunicacion clara.",
  },
  {
    title: "Actualizacion",
    text: "Nos mantenemos atentos a los cambios normativos para brindar asesoria vigente.",
  },
  {
    title: "Cercania",
    text: "Escuchamos las necesidades de cada cliente y adaptamos soluciones a su realidad.",
  },
];

export const metadata = {
  title: "Nosotros | Estudio Contable Fidencia Villa",
  description:
    "Conoce la historia del Estudio Contable Fidencia Villa y la trayectoria profesional de la Contadora Publica Colegiada Fidencia Villa Sutta.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-brand-primary-dark text-white shadow-[0_30px_55px_rgba(0,0,0,0.32)]">
        <AboutHeroBackgroundSlider />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">
              Nosotros
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Experiencia contable con compromiso humano y empresarial
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              En Estudio Contable Fidencia Villa creemos que una buena asesoria
              contable no solo consiste en cumplir obligaciones, sino tambien en
              brindar informacion clara para tomar mejores decisiones.
            </p>
          </div>
          <div className="rounded-2xl bg-white/10 p-8 ring-1 ring-white/15">
            <p className="text-5xl font-bold text-brand-secondary">30+</p>
            <p className="mt-3 text-xl font-semibold">años de trayectoria</p>
            <p className="mt-4 leading-7 text-white/75">
              Acompanando a empresas, MYPES y emprendedores en procesos contables,
              tributarios, laborales, administrativos y financieros.
            </p>
          </div>
        </div>
      </section>

      <section className=" relative overflow-hidden bg-[url('/nosotros/balanza.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"/>
          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.18em] text-white">
                Historia del estudio
              </p>
              <h2 className="mt-3 text-3xl text-white/85 font-bold">Una firma nacida para acompañar empresas</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-white/85">
              <p>
                El Estudio Contable Fidencia Villa nace con el compromiso de brindar
                soluciones contables confiables a empresas del mercado arequipeno.
                A lo largo de los anos, ha consolidado una forma de trabajo basada
                en responsabilidad, actualizacion permanente y acompanamiento personalizado.
              </p>
              <p>
                Hoy, el estudio continua fortaleciendo su presencia en Arequipa y
                proyecta su crecimiento hacia Lima, manteniendo el mismo principio:
                ofrecer un servicio serio, oportuno y orientado a las necesidades
                reales de cada cliente.
              </p>
            </div>
          </div>
      </section>

      <section className="relative z-20 overflow-hidden bg-[url('/inicio/flores.png')] bg-cover bg-center shadow-[0_-38px_70px_rgba(0,0,0,0.42),0_38px_70px_rgba(0,0,0,0.42)]">
        <div className="absolute inset-0 bg-brand-primary-dark/80"/>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="grid gap-6 rounded-2xl border border-white/25 bg-white/20 p-8 shadow-xl shadow-black/20 backdrop-blur-md ring-1 ring-white/20 md:grid-cols-[1fr_180px] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                Contadora Publica Colegiada
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">Fidencia Villa Sutta</h2>
              <p className="mt-4 leading-8 text-white/85">
                Lidera el estudio con amplia trayectoria asesorando a MYPES y empresas
                medianas en temas contables, tributarios y empresariales.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-white/20 shadow-sm ring-1 ring-white/25">
              <Image
                src="/contador/contador-foto-perfil2.jpeg"
                alt="Contadora Publica Colegiada Fidencia Villa Sutta"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-lg leading-8 text-white/85">
            Su experiencia le permite comprender los retos diarios de una empresa:
            cumplimiento tributario, orden financiero, gestion laboral, documentacion
            empresarial y toma de decisiones. Desde esa mirada, lidera un servicio
            enfocado en la confianza, la claridad y la prevencion.
          </div>
        </div>
        </div>
      </section>

      <section className=" relative overflow-hidden bg-[url('/nosotros/fila-de-archivadores.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"/>
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <p className="font-semibold uppercase tracking-[0.18em] text-white/75">Valores</p>
        <h2 className="mt-3 text-3xl font-bold text-white/75">La forma en que trabajamos</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-xl border border-white/25 bg-white/20 p-6 shadow-xl shadow-black/20 backdrop-blur-md ring-1 ring-white/20"
            >
              <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-3 leading-7 text-white/80">{value.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={getWhatsAppUrl("Hola, deseo conocer mas sobre el Estudio Contable Fidencia Villa.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-primary px-6 py-3 text-center font-semibold text-white"
          >
            Contactar al estudio
          </a>
          <Link
            href="/servicios"
            className="rounded-full bg-brand-primary px-6 py-3 text-center font-semibold text-white"
          >
            Ver servicios
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}
