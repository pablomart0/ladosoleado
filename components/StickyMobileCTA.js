import { SITE, whatsappLink } from "@/lib/site";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/5 bg-white/95 p-3 backdrop-blur md:hidden">
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex-1 py-2.5 text-[13px]">
        WhatsApp
      </a>
      <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-booking flex-1 py-2.5 text-[13px]">
        Reservar en Booking
      </a>
    </div>
  );
}
