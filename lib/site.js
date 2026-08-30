// Central place for site-wide constants so contact details / links
// only need to be updated in one spot.

export const SITE = {
  name: "Lado Soleado",
  legalName: "Lado Soleado - Cabaña en La Falda",
  tagline: "Cabaña con pileta privada en La Falda, Córdoba",
  domain: "https://www.ladosoleado.com.ar",
  locality: "La Falda",
  region: "Córdoba",
  country: "Argentina",
  whatsappNumber: "5493548467865",
  whatsappDisplay: "+54 9 3548 46-7865",
  bookingUrl: "https://www.booking.com/hotel/ar/lado-soleado.es-ar.html",
  instagramUrl: "https://www.instagram.com/ladosoleado0/",
  defaultWhatsappMessage:
    "¡Hola! Vi la web de Lado Soleado y quiero consultar disponibilidad para la cabaña en La Falda.",
};

export function whatsappLink(message = SITE.defaultWhatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
