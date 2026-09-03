import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
      <Image
        src="/images/pileta-2.jpg"
        alt="Pileta privada de la cabaña Lado Soleado en La Falda, Córdoba, con quincho y parque"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/10" />

      <div className="container-page relative z-10 pb-16 pt-40 text-white">
        <p className="section-eyebrow text-sun-400">La Falda · Valle de Punilla · Córdoba</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Cabaña en La Falda con pileta privada, parque y asador
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Lado Soleado es una cabaña de alquiler temporario para hasta 5 huéspedes, en una zona
          tranquila a 5 cuadras de la avenida principal y 3 de la terminal de ómnibus. Pileta de uso exclusivo, vista a las
          sierras y el mejor punto de partida para recorrer el Valle de Punilla.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-booking">
            Reservar en Booking
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Consultar por WhatsApp
          </a>
        </div>

        <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/20 pt-6 sm:grid-cols-4">
          {[
            ["5", "huéspedes"],
            ["2", "dormitorios"],
            ["1", "pileta privada"],
            ["5", "cuadras al centro"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="font-display text-2xl font-bold text-sun-400">{value}</dt>
              <dd className="text-xs uppercase tracking-wide text-white/70">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
