import { AboutHeroBackgroundSlider } from "@/components/AboutHeroBackgroundSlider";
import { ContactForm } from "@/components/ContactForm";
import { ContactLottie } from "@/components/ContactLottie";
import { getWhatsAppUrl, siteConfig } from "@/data/site";

export const metadata = {
  title: "Contactanos | Estudio Contable Fidencia Villa",
  description:
    "Contacta al Estudio Contable Fidencia Villa por WhatsApp, telefono o formulario para recibir asesoria contable, tributaria, laboral, legal o financiera.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative z-20 overflow-hidden bg-brand-primary-dark text-white shadow-[0_30px_55px_rgba(0,0,0,0.32)]">
        <AboutHeroBackgroundSlider />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">
            Contactanos
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Conversemos sobre las necesidades de tu empresa
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Si necesitas asesoria contable, tributaria, laboral, legal o financiera,
            escribenos y te orientaremos con una atencion clara y profesional.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl overflow-hidden px-5 py-16">
        <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <aside className="min-w-0 overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div>
                <p className="font-semibold text-brand-primary">WhatsApp / Telefono</p>
                <p className="mt-2 text-lg text-slate-700">{siteConfig.phone}</p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-full bg-brand-secondary px-5 py-3 font-semibold text-brand-primary-dark"
                >
                  Escribir por WhatsApp
                </a>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-6">
                <p className="font-semibold text-brand-primary">Direccion</p>
                <p className="mt-2 leading-7 text-slate-700">{siteConfig.address}</p>
              </div>
            <ContactLottie
              className="mt-6 grid min-h-72 place-items-center border-t border-slate-200 pt-6"
              animationClassName="h-72 w-full max-w-sm"
            />
          </aside>

          <ContactForm variant="contact" />
        </div>

        <div className="mt-12 rounded-xl bg-brand-soft p-6">
          <p className="font-semibold text-brand-primary">Mapa</p>
          <div className="mt-4 min-w-0 overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d956.5622472891109!2d-71.49259206560029!3d-16.462925319692495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1782975074278!5m2!1ses-419!2spe"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block h-[28rem] w-full max-w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
