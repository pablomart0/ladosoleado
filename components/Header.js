import Link from "next/link";
import { SITE, whatsappLink } from "@/lib/site";

const NAV = [
  { href: "#cabana", label: "La cabaña" },
  { href: "#comodidades", label: "Comodidades" },
  { href: "#galeria", label: "Galería" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#que-hacer", label: "Qué hacer" },
  { href: "#preguntas", label: "Preguntas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[#fffaf3]/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="#top" className="font-display text-xl font-bold text-night">
          Lado <span className="text-sun-500">Soleado</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegación principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-night/80 hover:text-sun-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-4 py-2 text-xs">
            WhatsApp
          </a>
          <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-booking px-4 py-2 text-xs">
            Reservar
          </a>
        </div>
      </div>
    </header>
  );
}
