import Image from "next/image";
import { AboutHeroBackgroundSlider } from "@/components/AboutHeroBackgroundSlider";

const featuredClients = [
  {
    name: "GRUPO CVT",
    sector: "Ingeniería y Construcción",
    logo: "/clientes/cliente-1.png",
  },
  {
    name: "MDJ INGENIEROS",
    sector: "Mantenimiento de Equipo Pesado",
    logo: "/clientes/cliente-2.png",
  },
  {
    name: "MULTIFIESTAS",
    sector: "Organización de Eventos",
    logo: "/clientes/cliente-3.png",
  },
  {
    name: "ANDES DEL SUR SECURITY",
    sector: "Seguridad Privada",
    logo: "/clientes/cliente-4.png",
  },
  {
    name: "CLÍNICA ODONTOLÓGICA ZEA",
    sector: "Servicios Odontológicos",
    logo: "/clientes/cliente-5.png",
  },
];

const plaqueClients = [
  "ODONTOLOGIA ZEA E.I.R.L.",
  "COMERCIAL DC E.I.R.L.",
  "HACE INFRAESTRUCTURA S.A.C.",
  "CORPORACION LA TORRE SOLUCIONES EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA",
  "VINAL DISTRIBUCIONES S.R.L.",
  "JV INGECON E.I.R.L.",
  "MULTICARNES RECABARREN E.I.R.L.",
  "PROYECTOS Y SERVICIOS VETAGLASS PERU S.A.C.",
  "COMMA LABS SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA - COMMA LABS S.R.L.",
  "SERVICIOS ODONTOLOGICOS ZEA E.I.R.L.",
  "ASOCIACION DE TRUCHICULTORES EL PEZ DE ORO DEL ANEXO CHAÑI",
  "CEDOREM S.R.L.",
  "EMPRESA EXPORTADORA DE BUEN AROMATICO SOCIEDAD ANONIMA - DBA S.A.",
  "TRANSPORTES TOSCANO PAREJAS E.I.R.L.",
  "GEOMINEIRO PERU EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA",
  "CLUB DE AJEDREZ CERRO COLORADO",
  "VELCAM CONSTRUCTORES S.A.C.",
  "MULTIFIESTAS PIEROLA E.I.R.L.",
  "INMOBILIARIA PARMA E.I.R.L.",
  "BELITAXI TOURS S.A.C.",
  "NUTRICION CELULAR E.I.R.L.",
  "INNOVA DUX E.I.R.L.",
  "TRAUMAVITAL SERVICIOS MEDICOS E.I.R.L.",
  "INVERSIONES WAKIY S.A.C.",
  "ESTRELLA DEL CIELO S.R.L.",
  "DISTRIBUIDORA JORDAN & LUCERO EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMITADA - J & LU E.I.R.L.",
  "RACO ENGINY PROYECTOS SAC",
  "SKY STAR COMPANY SOCIEDAD ANONIMA CERRADA - SKY STAR COMPANY S.A.C.",
  "AGRICOLA SUR PERUANA E.I.R.L.",
  "GRUPO PARMA E.I.R.L.",
];

const plaqueRows = [
  plaqueClients.slice(0, 7),
  plaqueClients.slice(7, 13),
  plaqueClients.slice(13, 20),
  plaqueClients.slice(20, 26),
  plaqueClients.slice(26, 30),
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
                className={`mx-auto grid items-stretch gap-4 ${
                  row.length === 7
                    ? "max-w-7xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-7"
                    : row.length === 6
                      ? "max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                      : "max-w-4xl grid-cols-2 sm:grid-cols-4"
                }`}
              >
                {row.map((client) => (
                  <div
                    key={client}
                    className="h-full rounded-lg border border-white/30 bg-white/15 p-1 shadow-lg shadow-black/25 ring-1 ring-white/15 backdrop-blur-md"
                  >
                    <div className="grid h-full min-h-20 place-items-center rounded-md border border-white/35 px-4 py-3 text-center">
                      <p className="break-words text-xs font-semibold uppercase tracking-[0.08em] text-white">
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
