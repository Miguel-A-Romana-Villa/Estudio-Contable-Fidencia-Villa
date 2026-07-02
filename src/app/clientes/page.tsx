import Image from "next/image";
import { AboutHeroBackgroundSlider } from "@/components/AboutHeroBackgroundSlider";

const featuredClients = [
  {
    name: "Cliente destacado 1",
    sector: "Comercio y servicios",
    logo: "/clientes/cliente-1.png",
  },
  {
    name: "Cliente destacado 2",
    sector: "Gestion empresarial",
    logo: "/clientes/cliente-2.png",
  },
  {
    name: "Cliente destacado 3",
    sector: "Servicios profesionales",
    logo: "/clientes/cliente-3.png",
  },
  {
    name: "Cliente destacado 4",
    sector: "Industria y operaciones",
    logo: "/clientes/cliente-4.png",
  },
  {
    name: "Cliente destacado 5",
    sector: "Emprendimiento y MYPE",
    logo: "/clientes/cliente-5.png",
  },
];

const plaqueClients = Array.from({ length: 39 }, (_, index) => `Cliente ${String(index + 1).padStart(2, "0")}`);

const plaqueRows = [
  plaqueClients.slice(0, 7),
  plaqueClients.slice(7, 13),
  plaqueClients.slice(13, 20),
  plaqueClients.slice(20, 26),
  plaqueClients.slice(26, 33),
  plaqueClients.slice(33, 39),
];

export const metadata = {
  title: "Clientes | Estudio Contable Fidencia Villa",
  description:
    "Atendemos emprendedores, MYPES, empresas medianas y negocios en expansion que buscan orden, cumplimiento y crecimiento.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-brand-primary-dark text-white shadow-[0_30px_55px_rgba(0,0,0,0.32)]">
        <AboutHeroBackgroundSlider />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">
            Clientes
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Acompañamos a empresas que buscan orden, cumplimiento y crecimiento
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Trabajamos con emprendedores, MYPES y empresas medianas que necesitan
            asesoria contable confiable para ordenar su informacion, cumplir sus
            obligaciones y tomar mejores decisiones.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url('/clientes/mesa-elegante.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/62" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-[0.18em] text-brand-secondary">
              Comunidad de clientes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              Empresas que confian en nuestro trabajo y forman parte de nuestra trayectoria
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Acompanamos a organizaciones de distintos rubros con asesoria contable,
              tributaria y empresarial enfocada en orden, cumplimiento y crecimiento
              sostenible.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {featuredClients.map((client) => (
              <article
                key={client.name}
                className="rounded-2xl border border-white/25 bg-white/20 p-5 text-center shadow-xl shadow-black/20 ring-1 ring-white/20 backdrop-blur-md"
              >
                <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                <div className="mt-5 grid aspect-[4/3] place-items-center rounded-xl border border-white/20 bg-white/15 p-5">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    width={180}
                    height={100}
                    className="max-h-24 w-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-secondary">
                  {client.sector}
                </p>
              </article>
            ))}
          </div>

          <div className="my-12 h-px w-full bg-white/35" />
          <div className="space-y-4">
            {plaqueRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className={`mx-auto grid gap-4 ${
                  row.length === 7
                    ? "max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-7"
                    : "max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                }`}
              >
                {row.map((client) => (
                  <div
                    key={client}
                    className="rounded-lg border border-white/30 bg-white/15 p-1 shadow-lg shadow-black/25 ring-1 ring-white/15 backdrop-blur-md"
                  >
                    <div className="grid min-h-20 place-items-center rounded-md border border-white/35 px-4 py-3 text-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                        {client}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
