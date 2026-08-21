import { SITE, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-night text-white/80">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold text-white">
            Lado <span className="text-sun-400">Soleado</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            Cabaña de alquiler temporario en La Falda, Córdoba. Pileta privada, parque, asador y
            cochera a metros del centro y de las sierras del Valle de Punilla.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Explorar</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-sun-300" href="#cabana">La cabaña</a></li>
            <li><a className="hover:text-sun-300" href="#comodidades">Comodidades</a></li>
            <li><a className="hover:text-sun-300" href="#galeria">Galería de fotos y videos</a></li>
            <li><a className="hover:text-sun-300" href="#ubicacion">Ubicación</a></li>
            <li><a className="hover:text-sun-300" href="#que-hacer">Qué hacer en La Falda</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Reservas</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-sun-300" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp: {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-sun-300" href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
                Reservar en Booking.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Ubicación</p>
          <p className="mt-3 text-sm leading-relaxed">
            Zona residencial de {SITE.locality}, a unas 8 cuadras del centro. {SITE.region}, {SITE.country}.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Lado Soleado — Cabaña en La Falda, Córdoba. Todos los derechos reservados.
      </div>
    </footer>
  );
}
