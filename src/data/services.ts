export type ServiceItem = {
  title: string;
  description: string;
};

export type ServiceCategory = {
  slug: string;
  title: string;
  summary: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "servicios-contables",
    title: "Servicios Contables",
    summary:
      "Mantenemos la informacion de tu empresa ordenada, actualizada y lista para la toma de decisiones.",
    items: [
      {
        title: "Contabilidad mensual y anual",
        description:
          "Llevamos el control contable de tu empresa, registrando operaciones, revisando documentacion y preparando informacion organizada para el cumplimiento y la gestion.",
      },
      {
        title: "Elaboracion de estados financieros",
        description:
          "Preparamos estados financieros claros para conocer la situacion economica de la empresa, evaluar resultados y tomar decisiones con informacion confiable.",
      },
      {
        title: "Libros contables electronicos",
        description:
          "Gestionamos la preparacion y presentacion de libros electronicos conforme a las exigencias vigentes.",
      },
      {
        title: "Cierre contable y conciliaciones",
        description:
          "Realizamos cierres contables, conciliaciones bancarias y revision de cuentas para reflejar correctamente la realidad del negocio.",
      },
      {
        title: "Outsourcing contable",
        description:
          "Brindamos soporte contable externo para empresas que desean delegar su gestion contable en un equipo profesional.",
      },
      {
        title: "Contabilidad para MYPE y PYMES",
        description:
          "Acompanamos a micro, pequenas y medianas empresas con soluciones adaptadas a su tamano, regimen y necesidades de crecimiento.",
      },
    ],
  },
  {
    slug: "asesoria-tributaria",
    title: "Asesoria Tributaria",
    summary:
      "Ayudamos a cumplir correctamente las obligaciones fiscales y prevenir contingencias frente a SUNAT.",
    items: [
      {
        title: "Declaraciones mensuales IGV y Renta",
        description:
          "Preparamos y presentamos declaraciones mensuales, revisando la informacion contable y tributaria para reducir errores.",
      },
      {
        title: "Declaracion anual del Impuesto a la Renta",
        description:
          "Elaboramos la declaracion anual con una revision integral de la informacion financiera y tributaria de la empresa.",
      },
      {
        title: "Planeamiento tributario",
        description:
          "Analizamos la situacion tributaria para proponer estrategias legales que optimicen el cumplimiento y reduzcan riesgos.",
      },
      {
        title: "Fiscalizaciones",
        description:
          "Acompanamos procesos de fiscalizacion, requerimientos y revisiones tributarias con soporte tecnico y documental.",
      },
      {
        title: "Fraccionamiento y aplazamiento",
        description:
          "Asesoramos en la gestion de alternativas de pago para ordenar obligaciones tributarias pendientes.",
      },
      {
        title: "Devoluciones y creditos tributarios",
        description:
          "Revisamos y gestionamos solicitudes de devoluciones, saldos a favor y creditos tributarios.",
      },
    ],
  },
  {
    slug: "auditorias-contables-tributarias",
    title: "Auditorias Contables y Tributarias",
    summary:
      "Detectamos riesgos, validamos informacion y fortalecemos controles internos con un enfoque preventivo.",
    items: [
      {
        title: "Auditoria financiera",
        description:
          "Revisamos la informacion financiera de la empresa para evaluar su razonabilidad, consistencia y respaldo documental.",
      },
      {
        title: "Auditoria tributaria preventiva",
        description:
          "Analizamos el cumplimiento tributario para identificar riesgos o inconsistencias antes de una fiscalizacion.",
      },
      {
        title: "Auditoria interna",
        description:
          "Evaluamos procesos, controles y procedimientos administrativos para fortalecer la gestion.",
      },
      {
        title: "Revision de cumplimiento SUNAT",
        description:
          "Verificamos declaraciones, libros electronicos, documentacion tributaria y obligaciones formales.",
      },
      {
        title: "Informe de hallazgos y riesgos",
        description:
          "Elaboramos informes con observaciones, riesgos detectados y recomendaciones de mejora.",
      },
      {
        title: "Acompanamiento en fiscalizaciones",
        description:
          "Organizamos informacion requerida y apoyamos las respuestas durante procedimientos de fiscalizacion.",
      },
    ],
  },
  {
    slug: "asesoria-legal-empresarial",
    title: "Asesoria Legal Empresarial",
    summary:
      "Brindamos soporte legal para decisiones societarias, contractuales y administrativas.",
    items: [
      {
        title: "Constitucion de empresas",
        description:
          "Orientamos el proceso de constitucion, estructura empresarial y pasos necesarios para iniciar actividades formalmente.",
      },
      {
        title: "Modificacion de estatutos",
        description:
          "Brindamos soporte en cambios societarios, modificaciones estatutarias y actualizacion legal de la empresa.",
      },
      {
        title: "Contratos laborales y comerciales",
        description:
          "Apoyamos en la elaboracion y revision de contratos claros para proteger los intereses de la empresa.",
      },
      {
        title: "Asesoria societaria",
        description:
          "Orientamos en documentacion societaria, acuerdos y decisiones empresariales que requieren respaldo formal.",
      },
      {
        title: "Procedimientos administrativos",
        description:
          "Acompanamos procedimientos ante entidades publicas con preparacion documental y orientacion.",
      },
      {
        title: "Defensa ante entidades publicas",
        description:
          "Brindamos soporte ante requerimientos, observaciones o procedimientos administrativos.",
      },
    ],
  },
  {
    slug: "recursos-humanos-gestion-laboral",
    title: "Recursos Humanos y Gestion Laboral",
    summary:
      "Ayudamos a administrar planillas, contratos, beneficios y obligaciones laborales con mayor seguridad.",
    items: [
      {
        title: "Elaboracion de planillas",
        description:
          "Gestionamos planillas de remuneraciones, considerando conceptos laborales, aportes, descuentos y obligaciones.",
      },
      {
        title: "Contratos y liquidaciones",
        description:
          "Preparamos contratos laborales y liquidaciones de beneficios sociales conforme a la normativa aplicable.",
      },
      {
        title: "Calculo de beneficios sociales",
        description:
          "Realizamos calculos de CTS, gratificaciones, vacaciones, indemnizaciones y otros beneficios laborales.",
      },
      {
        title: "Cumplimiento laboral SUNAFIL",
        description:
          "Asesoramos en obligaciones laborales y preparacion de informacion ante revisiones o fiscalizaciones.",
      },
      {
        title: "Reglamentos internos",
        description:
          "Apoyamos en la elaboracion y revision de reglamentos internos y documentos laborales.",
      },
      {
        title: "Gestion de asistencias y vacaciones",
        description:
          "Brindamos soporte en control de asistencias, descansos, vacaciones y registros vinculados al personal.",
      },
    ],
  },
  {
    slug: "servicios-financieros",
    title: "Servicios Financieros",
    summary:
      "Analizamos rentabilidad, liquidez y proyecciones para apoyar decisiones de inversion y crecimiento.",
    items: [
      {
        title: "Analisis financiero",
        description:
          "Evaluamos informacion financiera para identificar tendencias, fortalezas, riesgos y oportunidades de mejora.",
      },
      {
        title: "Presupuestos y flujo de caja",
        description:
          "Elaboramos presupuestos y proyecciones para planificar pagos, inversiones y necesidades de financiamiento.",
      },
      {
        title: "Evaluacion de proyectos",
        description:
          "Analizamos viabilidad, costos, retorno esperado y riesgos asociados a nuevos proyectos empresariales.",
      },
      {
        title: "Costos y rentabilidad",
        description:
          "Revisamos costos, margenes y rentabilidad para mejorar decisiones sobre precios, gastos y resultados.",
      },
      {
        title: "Reportes para bancos e inversionistas",
        description:
          "Preparamos reportes financieros organizados para entidades bancarias, inversionistas u otros interesados.",
      },
      {
        title: "Asesoria para creditos empresariales",
        description:
          "Acompanamos la preparacion de informacion financiera para solicitudes de credito o alternativas de financiamiento.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((service) => service.slug === slug);
}
