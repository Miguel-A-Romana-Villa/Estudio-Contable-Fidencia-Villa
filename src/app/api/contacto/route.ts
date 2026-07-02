import { NextResponse } from "next/server";

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  telefono?: string;
  correo?: string;
  servicio?: string;
  mensaje?: string;
  website?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "La solicitud no tiene un formato valido." },
      { status: 400 }
    );
  }

  if (cleanValue(body.website)) {
    return NextResponse.json({ message: "Mensaje recibido correctamente." });
  }

  const nombre = cleanValue(body.nombre);
  const empresa = cleanValue(body.empresa);
  const telefono = cleanValue(body.telefono);
  const correo = cleanValue(body.correo);
  const servicio = cleanValue(body.servicio);
  const mensaje = cleanValue(body.mensaje);

  if (!nombre || !telefono || !correo || !mensaje) {
    return NextResponse.json(
      { message: "Completa nombre, telefono, correo y mensaje." },
      { status: 400 }
    );
  }

  if (!emailRegex.test(correo)) {
    return NextResponse.json(
      { message: "Ingresa un correo valido." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "Estudio Contable Fidencia Villa <onboarding@resend.dev>";

  if (!resendApiKey || !toEmail) {
    return NextResponse.json(
      {
        message:
          "El envio de correos todavia no esta configurado. Falta RESEND_API_KEY o CONTACT_TO_EMAIL.",
      },
      { status: 503 }
    );
  }

  const subject = `Nueva consulta web de ${nombre}`;
  const html = `
    <h2>Nueva consulta desde la web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(empresa || "No indicada")}</p>
    <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
    <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
    <p><strong>Servicio:</strong> ${escapeHtml(servicio || "No indicado")}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(mensaje).replaceAll("\n", "<br />")}</p>
  `;

  const text = [
    "Nueva consulta desde la web",
    `Nombre: ${nombre}`,
    `Empresa: ${empresa || "No indicada"}`,
    `Telefono: ${telefono}`,
    `Correo: ${correo}`,
    `Servicio: ${servicio || "No indicado"}`,
    "",
    "Mensaje:",
    mensaje,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: correo,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "No se pudo enviar el correo. Revisa la configuracion del proveedor." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Mensaje enviado correctamente. Nos comunicaremos contigo pronto.",
  });
}
