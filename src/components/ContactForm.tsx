"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { serviceCategories } from "@/data/services";

type ContactFormProps = {
  variant?: "home" | "contact";
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const baseInputClass =
  "w-full min-w-0 rounded-lg border px-4 py-3 outline-none transition focus:border-brand-primary";

const variants = {
  home: {
    form: "w-full min-w-0 rounded-2xl border border-white/25 bg-white/30 p-6 shadow-xl shadow-black/10 ring-1 ring-white/20 backdrop-blur-md",
    input:
      "border-slate-200 bg-white text-slate-800 placeholder:text-slate-500",
    text: "text-slate-700",
  },
  contact: {
    form: "w-full min-w-0 rounded-2xl border border-white/25 bg-white/30 p-7 shadow-xl shadow-black/10 backdrop-blur-md ring-1 ring-white/20",
    input:
      "border-white/40 bg-white/70 text-slate-800 placeholder:text-slate-500",
    text: "text-slate-700",
  },
};

export function ContactForm({ variant = "home" }: ContactFormProps) {
  const styles = variants[variant];
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setMessage(data.message || "Mensaje enviado correctamente.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje. Intentalo nuevamente."
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {variant === "contact" ? (
        <>
          <h2 className="text-2xl font-bold text-brand-primary-dark">Enviar consulta</h2>
          <p className={`mt-3 leading-7 ${styles.text}`}>
            Cuentanos que servicio necesitas y nos comunicaremos contigo a la brevedad.
          </p>
        </>
      ) : null}

      <div className={variant === "contact" ? "mt-6 grid min-w-0 gap-4" : "grid min-w-0 gap-4"}>
        <input
          name="nombre"
          className={`${baseInputClass} ${styles.input}`}
          placeholder="Nombre y apellido"
          required
        />
        <input
          name="empresa"
          className={`${baseInputClass} ${styles.input}`}
          placeholder="Empresa"
        />
        {variant === "contact" ? (
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            <input
              name="telefono"
              className={`${baseInputClass} ${styles.input}`}
              placeholder="Telefono"
              required
            />
            <input
              name="correo"
              type="email"
              className={`${baseInputClass} ${styles.input}`}
              placeholder="Correo"
              required
            />
          </div>
        ) : (
          <>
            <input
              name="telefono"
              className={`${baseInputClass} ${styles.input}`}
              placeholder="Telefono"
              required
            />
            <input
              name="correo"
              type="email"
              className={`${baseInputClass} ${styles.input}`}
              placeholder="Correo"
              required
            />
          </>
        )}

        {variant === "contact" ? (
          <select
            name="servicio"
            className={`${baseInputClass} ${styles.input}`}
            defaultValue=""
          >
            <option value="" disabled>
              Servicio de interes
            </option>
            {serviceCategories.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        ) : null}

        <textarea
          name="mensaje"
          className={`${baseInputClass} min-h-32 ${styles.input} ${
            variant === "contact" ? "min-h-36" : ""
          }`}
          placeholder="Mensaje"
          required
        />
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <button
          className="rounded-full bg-brand-primary px-6 py-3 font-semibold text-white transition hover:bg-brand-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Enviando..." : "Enviar consulta"}
        </button>
        {variant === "home" ? (
          <Link href="/contactanos" className="text-center font-semibold text-brand-primary">
            Ir a la pagina de contacto
          </Link>
        ) : null}
        {message ? (
          <p
            className={`text-center text-sm font-semibold ${
              status === "success" ? "text-emerald-700" : "text-red-700"
            }`}
          >
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
