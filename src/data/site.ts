export const siteConfig = {
  name: "Estudio Contable Fidencia Villa",
  shortName: "Fidencia Villa",
  phone: "+51 959 960 361",
  whatsapp: "51959960361",
  address: "San Francisco J - 5, distrito de Characato, Arequipa, Peru",
  whatsappMessage:
    "Hola, deseo recibir informacion sobre los servicios del Estudio Contable Fidencia Villa.",
};

export function getWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
