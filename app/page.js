import Hero from "@/components/Hero";
import About from "@/components/About";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import NearbyAttractions from "@/components/NearbyAttractions";
import FAQ, { FAQ_ITEMS } from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { SITE } from "@/lib/site";

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const lodgingJsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE.name,
    description:
      "Cabaña de alquiler temporario en La Falda, Córdoba, con pileta privada, parque, asador y cochera. Capacidad para 5 huéspedes en 2 dormitorios.",
    url: SITE.domain,
    image: [`${SITE.domain}/images/pileta-2.jpg`, `${SITE.domain}/images/pileta-1.jpg`],
    telephone: `+${SITE.whatsappNumber}`,
    priceRange: "$$",
    petsAllowed: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: "AR",
    },
    amenityFeature: [
      "Pileta privada",
      "Parque y asador",
      "Cochera para 1 auto",
      "Wi-Fi",
      "Calefacción",
      "Apto mascotas",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    sameAs: [SITE.bookingUrl],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Location />
      <NearbyAttractions />
      <FAQ />
      <FinalCTA />
    </>
  );
}
