"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getWhatsAppUrl, siteConfig } from "@/data/site";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contactanos", label: "Contactanos" },
];

const socialItems = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M14.2 8.2V6.7c0-.7.5-.9.9-.9h2.2V2.1L14.3 2c-3.3 0-4.1 2.5-4.1 4v2.2H7.6V12h2.6v10h4V12h2.9l.5-3.8h-3.4Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-none stroke-current stroke-2">
        <rect width="16" height="16" x="4" y="4" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17" cy="7" r="0.8" className="fill-current stroke-none" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M15.5 3c.3 2.5 1.7 4.2 4.2 4.4v3.6a7 7 0 0 1-4.1-1.3v5.8c0 3.7-2.4 6-5.8 6A5.4 5.4 0 0 1 4.2 16c0-3.7 3-6.2 6.7-5.5v3.8c-1.7-.5-3 .4-3 1.8 0 1.2.8 2 1.9 2 1.2 0 2-.8 2-2.3V3h3.7Z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M6.5 8.8H3V21h3.5V8.8ZM4.8 3a2 2 0 1 0 0 4.1 2 2 0 0 0 0-4.1Zm16 11.2c0-3.3-1.8-5.4-4.6-5.4a3.8 3.8 0 0 0-3.3 1.8V8.8H9.5V21H13v-6.3c0-1.7.9-2.7 2.2-2.7s2.1.9 2.1 2.7V21h3.5v-6.8Z" />
      </svg>
    ),
  },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 overflow-visible border-b border-white/10 bg-brand-primary-dark/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-5 lg:gap-6">
        <Link
          href="/"
          className="relative flex min-w-0 items-center gap-4 overflow-visible sm:gap-6"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative block h-12 w-20 shrink-0 overflow-visible sm:w-24">
            <Image
              src="/icono.png"
              alt="Logo del Estudio Contable Fidencia Villa"
              width={517}
              height={483}
              sizes="132px"
              className="absolute left-0 top-1/2 z-10 h-auto w-[132px] max-w-none -translate-y-1/2 object-contain"
              priority
            />
          </span>
          <span className="truncate text-xs font-semibold uppercase tracking-[0.14em] sm:text-base sm:tracking-[0.18em]">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-6 xl:text-md">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="grid size-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:-translate-y-0.5 hover:bg-white/18 hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-secondary px-4 py-2 text-sm font-semibold text-brand-primary-dark shadow-sm transition hover:bg-brand-secondary-hover"
          >
            WhatsApp
          </a>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/18 lg:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        className={`border-t border-white/10 bg-brand-primary-dark/98 px-5 shadow-xl shadow-black/25 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[32rem] opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col py-4 text-sm font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/10 py-3 text-white/85 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 py-4">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                onClick={() => setMenuOpen(false)}
                className="grid size-10 place-items-center rounded-full border border-white/20 bg-white/10 text-white/80 transition hover:bg-white/18 hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-brand-primary-dark transition hover:bg-brand-secondary-hover"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
