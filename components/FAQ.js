export const FAQ_ITEMS = [
  {
    q: "¿Cuántas personas pueden alojarse en la cabaña?",
    a: "Lado Soleado tiene capacidad para hasta 5 huéspedes, distribuidos en 2 dormitorios: uno con cama matrimonial y otro con una cama individual y una cucheta.",
  },
  {
    q: "¿La pileta es privada?",
    a: "Sí, la pileta de material, el parque, el asador y la cochera son de uso exclusivo de quienes se alojan en la cabaña durante toda la estadía.",
  },
  {
    q: "¿A qué distancia está del centro de La Falda?",
    a: "Se encuentra en una zona residencial y tranquila, a aproximadamente 10 cuadras del centro de La Falda, cerca de comercios, restaurantes y servicios.",
  },
  {
    q: "¿Aceptan mascotas?",
    a: "Sí, se aceptan mascotas pequeñas. Te recomendamos avisarlo al momento de consultar por WhatsApp o al reservar.",
  },
  {
    q: "¿Cómo reservo Lado Soleado?",
    a: "Podés reservar directamente a través de nuestra publicación en Booking.com o consultar disponibilidad y precios por WhatsApp.",
  },
  {
    q: "¿Tiene calefacción para el invierno?",
    a: "Sí, los dormitorios cuentan con calefacción por tiro balanceado, además de ventiladores para los meses de calor.",
  },
  {
    q: "¿Hay cochera para el auto?",
    a: "Sí, la cabaña cuenta con cochera propia dentro del predio para un auto, sin costo adicional.",
  },
];

export default function FAQ() {
  return (
    <section id="preguntas" className="bg-white py-20 sm:py-28">
      <div className="container-page max-w-3xl">
        <p className="section-eyebrow text-center">Preguntas frecuentes</p>
        <h2 className="section-title mt-2 text-center">Todo lo que necesitás saber</h2>

        <div className="mt-12 divide-y divide-black/5">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-night">
                {item.q}
                <span className="ml-4 text-sun-600 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-night/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
