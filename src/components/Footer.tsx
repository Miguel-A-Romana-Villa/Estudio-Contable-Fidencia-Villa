import { getWhatsAppUrl, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
            Asesoria contable, tributaria, laboral, legal y financiera para empresas,
            emprendedores y MYPES.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contacto</p>
          <p className="mt-3 text-sm text-white/75">{siteConfig.phone}</p>
          <p className="mt-2 text-sm text-white/75">{siteConfig.address}</p>
        </div>
        <div>
          <p className="font-semibold">Atencion rapida</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex rounded-full bg-brand-secondary px-4 py-2 text-sm font-semibold text-brand-primary-dark"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
