import { SITE, whatsappLink } from "@/lib/site";

export default function FinalCTA() {
  return (
    <section className="bg-night py-20 text-center text-white sm:py-24">
      <div className="container-page">
        <p className="section-eyebrow text-sun-400">Reservá tu estadía</p>
        <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
          Tu descanso en las sierras empieza en Lado Soleado
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80">
          Consultá disponibilidad y precios por WhatsApp, o reservá con confianza a través de
          Booking.com.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            Consultar por WhatsApp
          </a>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-booking">
            Reservar en Booking
          </a>
        </div>
      </div>
    </section>
  );
}
