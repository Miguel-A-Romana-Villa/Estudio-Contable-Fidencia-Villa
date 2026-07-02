import { getWhatsAppUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid size-20 place-items-center rounded-full bg-[#25D366] p-3 shadow-xl shadow-black/20 transition hover:scale-105"
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- External SVG avoids configuring a remote image domain for one brand icon. */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt=""
        className="h-full w-full"
      />
    </a>
  );
}
