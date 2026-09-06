import { SITE, whatsappLink } from "@/lib/site";
import { IconShieldAlert } from "./icons";

export default function SecurityNotice() {
  return (
    <section className="bg-sun-50 py-12">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-sun-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start sm:p-8">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-600">
            <IconShieldAlert />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-night">Evitá estafas al reservar</h3>
            <p className="mt-2 text-sm leading-relaxed text-night/75">
              Por tu seguridad, las consultas y reservas de Lado Soleado se atienden únicamente por
              nuestro WhatsApp oficial{" "}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-semibold text-sun-700 hover:underline">
                {SITE.whatsappDisplay}
              </a>{" "}
              o a través de nuestra publicación verificada en Booking.com. No tenemos otros números
              de contacto ni intermediarios.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-night/75">
              Antes de hacer una transferencia o seña, validá que el contacto se está realizando
              desde el WhatsApp publicado en esta web. Desconfiá de precios muy por debajo de lo
              habitual, de quienes te contacten por otros medios o te apuren a pagar sin resolver tus
              dudas. Ante cualquier sospecha, no transfieras y escribinos para confirmar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
