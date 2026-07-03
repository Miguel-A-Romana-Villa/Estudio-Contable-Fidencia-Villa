import Link from "next/link";
import { HeroSlider } from "@/components/HeroSlider";
import { ContactForm } from "@/components/ContactForm";
import { ContactLottie } from "@/components/ContactLottie";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import Image from "next/image";

const reasons = [
  {
    title: "Experiencia comprobada",
    text: "Acompanamos a empresas y negocios en su gestion contable, tributaria y administrativa.",
  },
  {
    title: "Enfoque preventivo",
    text: "Ayudamos a reducir riesgos y ordenar procesos antes de que se conviertan en problemas.",
  },
  {
    title: "Atencion cercana",
    text: "Trabajamos con comunicacion clara, seguimiento responsable y compromiso con cada cliente.",
  },
];

const clientLogos = [
  {
    name: "Cliente 1",
    logo: "/clientes/cliente-1.png",
  },
  {
    name: "Cliente 2",
    logo: "/clientes/cliente-2.png",
  },
  {
    name: "Cliente 1",
    logo: "/clientes/cliente-3.png",
  },
  {
    name: "Cliente 2",
    logo: "/clientes/cliente-4.png",
  },
  {
    name: "Cliente 1",
    logo: "/clientes/cliente-5.png",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className=" relative overflow-hidden bg-[url('/servicios/mueble-libros.png')]  bg-cover bg-center  ">
        <div className="absolute inset-0 bg-black/50"/>
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-shadow-text-image">Servicios</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-shadow-text-image ">
            Soluciones para ordenar, cumplir y crecer
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-shadow-text-image">
            Brindamos servicios integrales para empresas que necesitan informacion
            confiable, procesos ordenados y asesoria oportuna.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="rounded-xl border border-white/25 bg-white/20 p-6 shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/25"
            >
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-white/85">{service.summary}</p>
              <span className="mt-5 inline-flex font-semibold text-brand-secondary">
                Ver detalle
              </span>
            </Link>
          ))}
        </div>
        <Link
          href="/servicios"
          className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white"
        >
          Ver todos los servicios
        </Link>
        </div>
      </section>

      <section id="nosotros" className="relative z-10 overflow-hidden bg-[url('/inicio/flores.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-brand-primary-dark/80"/>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid gap-6 rounded-2xl border border-white/25 bg-white/20 p-8 shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md md:grid-cols-[1fr_170px] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
                Fidencia Villa Sutta
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Una trayectoria que inspira confianza
              </h2>
              <p className="mt-4 leading-8 text-white/85">
                Contadora Publica Colegiada con amplia experiencia asesorando a MYPES
                y empresas medianas en temas contables, tributarios y empresariales.
              </p>
            </div>
            <div className="relative aspect-[2/5] overflow-hidden rounded-xl bg-brand-soft shadow-sm ring-1 ring-slate-200">
              <Image
                src="/contador/contador-foto-perfil.jpeg"
                alt="Contadora Publica Colegiada Fidencia Villa Sutta"
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-lg leading-8 text-white/85">
              El estudio combina conocimiento tecnico, responsabilidad y acompanamiento
              cercano para ayudar a cada cliente a cumplir sus obligaciones y fortalecer
              la gestion de su negocio.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-xl border border-white/25 bg-white/20 p-5 shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md">
                  <h3 className="font-semibold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{reason.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/nosotros"
              className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white"
            >
              Conocer nuestra historia
            </Link>
          </div>
        </div>
        </div>
      </section>

      <section id="clientes" className="relative overflow-hidden bg-[url('/clientes/mesa-elegante.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"/>
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-shadow-text-image">Clientes</p>
          <h2 className="mt-3 text-3xl font-bold text-brand-shadow-text-image">
            Nuestros principales clientes
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="grid aspect-[4/3] place-items-center rounded-xl border border-white/25 bg-white/20 p-6 shadow-xl shadow-black/20 backdrop-blur-md ring-1 ring-white/20"
              >
              <Image
                src={client.logo}
                alt={client.name}
                width={180}
                height={100}
                className="max-h-30 w-auto object-contain"
              />
              </div>
            ))}
          </div>
          <Link
            href="/clientes"
            className="mt-8 inline-flex rounded-full bg-brand-primary px-6 py-3 font-semibold text-white"
          >
            Ver todos nuestros clientes 
          </Link>
        </div>
      </section>

      <section id="contacto" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-brand-primary">Contactanos</p>
            <h2 className="mt-3 text-3xl font-bold">Conversemos sobre tu empresa</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Escribenos y cuentanos que necesita tu empresa. Te orientaremos con
              una atencion clara y profesional.
            </p>
            <div className="mt-6 space-y-2 text-slate-700">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.address}</p>
            </div>
            <ContactLottie className="mt-8 grid min-h-64 place-items-center lg:place-items-start" />
          </div>
          <ContactForm variant="contact" />
        </div>
      </section>
    </>
  );
}
