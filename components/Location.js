import { IconMap } from "./icons";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-eyebrow">Ubicación</p>
          <h2 className="section-title mt-2">A pasos del centro, en calma serrana</h2>
          <p className="mt-5 text-[15px] leading-relaxed text-night/80">
            Lado Soleado está ubicada en una zona residencial y tranquila de{" "}
            <strong>La Falda, Córdoba</strong>, a aproximadamente <strong>10 cuadras del centro</strong>.
            Un equilibrio ideal entre el descanso del entorno serrano y la cercanía a comercios,
            restaurantes, servicios y las propuestas turísticas de la ciudad.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-night/80">
            Además, es un excelente punto de partida para recorrer el{" "}
            <strong>Valle de Punilla</strong> y localidades cercanas como{" "}
            <strong>Huerta Grande</strong>, <strong>Villa Giardino</strong> y{" "}
            <strong>La Cumbre</strong>.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-sun-50 p-4 text-sm text-night/80">
            <span className="mt-0.5 text-sun-600"><IconMap /></span>
            <span>
              La ubicación exacta y cómo llegar se comparten al confirmar la reserva por
              WhatsApp o Booking.
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Mapa de La Falda, Córdoba"
            src="https://www.google.com/maps?q=La+Falda,+C%C3%B3rdoba,+Argentina&output=embed"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
