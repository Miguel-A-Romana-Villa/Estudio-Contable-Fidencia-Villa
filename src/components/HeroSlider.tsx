"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/data/site";

type LottieAnimation = Parameters<typeof Lottie>[0]["animationData"];

type HeroSlide = {
  eyebrow: string;
  title: string;
  text: string;
  backgroundImage: string;
  stickerImage?: string;
  stickerAnimation?: string;
  imageLabel: string;
};

const slides: HeroSlide[] = [
  {
    eyebrow: "Soluciones para negocios en crecimiento",
    title: "Asesoria integral para MYPES y empresas",
    text: "Acompanamos la gestion contable, tributaria, laboral, legal y financiera de tu empresa con una atencion cercana, ordenada y profesional.",
    backgroundImage: "/hero/hero-ciudad.jpg",
    stickerAnimation: "/lottie/calculator%20and%20coin%20dollar.json",
    imageLabel: "Imagen recortada para asesoria empresarial",
  },
  {
    eyebrow: "Arequipa, Lima y todo el Peru",
    title: "Atencion para todo el Peru",
    text: "Desde nuestra oficina central en Arequipa brindamos soporte a empresas de distintas regiones, con especial enfoque en clientes que buscan crecer en Lima.",
    backgroundImage: "/hero/hero-basilica.jpg",
    stickerImage: "/hero/mapa-peru-estrellas.jpg",
    imageLabel: "Imagen recortada para cobertura nacional",
  },
  {
    eyebrow: "Trayectoria profesional",
    title: "Mas de 30 años de experiencia",
    text: "La experiencia de la Contadora Publica Colegiada Fidencia Villa Sutta respalda un servicio confiable, preventivo y orientado a resultados.",
    backgroundImage: "/hero/hero-arequipa-plaza.jpg",
    stickerImage: "/hero/experiencia.png",
    imageLabel: "Imagen recortada para trayectoria profesional",
  },
];

export function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [calculatorAnimation, setCalculatorAnimation] = useState<LottieAnimation | null>(null);

  useEffect(() => {
    fetch("/lottie/calculator%20and%20coin%20dollar.json")
      .then((response) => response.json())
      .then((data) => setCalculatorAnimation(data));
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="hero-curve relative isolate overflow-hidden bg-brand-primary-dark text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          aria-hidden={activeSlide !== index}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-62 saturate-125 contrast-110"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,194,26,0.16),transparent_34%),linear-gradient(90deg,rgba(15,53,84,0.88)_0%,rgba(15,53,84,0.78)_42%,rgba(23,78,115,0.48)_100%)]" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-white/8 lg:block" />
          <div className="absolute right-[7%] top-20 hidden aspect-[4/3] w-[35rem] lg:block">
            <div className="relative h-full">
              <div className="absolute inset-8 rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur-sm" />
              {slide.stickerAnimation ? (
                calculatorAnimation ? (
                  <Lottie
                    animationData={calculatorAnimation}
                    loop
                    autoplay
                    className="relative z-10 h-full w-full p-10 drop-shadow-2xl"
                  />
                ) : null
              ) : slide.stickerImage ? (
                <Image
                  src={slide.stickerImage}
                  alt=""
                  fill
                  sizes="35rem"
                  className="object-contain p-8 drop-shadow-2xl"
                />
              ) : null}
            </div>
          </div>
        </div>
      ))}

      <div className="relative z-10 mx-auto min-h-[35rem] max-w-7xl px-5 pb-36 pt-20 sm:min-h-[39rem] lg:flex lg:items-center">
        <div className="max-w-3xl">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`transition-all duration-[1800ms] ease-in-out ${
                activeSlide === index
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none absolute translate-y-4 opacity-0"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-secondary">
                {slide.eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                {slide.text}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={getWhatsAppUrl(`Hola, deseo recibir informacion sobre: ${slide.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-secondary px-6 py-3 text-center font-semibold text-brand-primary-dark shadow-lg shadow-black/20 transition hover:bg-brand-secondary-hover"
                >
                  Solicitar asesoria
                </a>
                <Link
                  href="/servicios"
                  className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-24 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Ver slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                activeSlide === index
                  ? "w-10 bg-brand-secondary"
                  : "w-2.5 bg-white/45 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-px z-40 h-28 sm:h-36">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 180"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-bottom-image"
              patternUnits="userSpaceOnUse"
              width="1600"
              height="180"
            >
              <image
                href="/inicio/marco.png"
                width="1600"
                height="180"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            d="M0 58 C280 118 510 145 790 148 C1080 151 1320 118 1600 30 L1600 104 C1280 176 1040 184 780 178 C520 172 290 142 0 96 Z"
            fill="rgba(255,255,255,0.22)"
          />
          <path
            d="M0 62 C360 150 560 168 800 168 C1040 168 1240 150 1600 62 L1600 180 L0 180 Z"
            fill="url(#hero-bottom-image)"
          />
          <path
            d="M0 62 C360 150 560 168 800 168 C1040 168 1240 150 1600 62 L1600 180 L0 180 Z"
            fill="rgba(0,0,0,0.5)"
          />
        </svg>
      </div>
    </section>
  );
}
