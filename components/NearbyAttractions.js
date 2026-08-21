const ATTRACTIONS = [
  {
    title: "Cristo Rey y vista panorámica",
    desc: "Uno de los miradores más conocidos de La Falda, con una vista amplia del valle y las sierras.",
  },
  {
    title: "Camino de las Cornisas",
    desc: "Recorrido escénico entre La Falda y Huerta Grande, muy elegido para caminar o andar en bici.",
  },
  {
    title: "Centro de La Falda",
    desc: "Comercios, gastronomía y la tradicional avenida Edén, a solo 10 cuadras de la cabaña.",
  },
  {
    title: "Fiesta Nacional del Alfajor",
    desc: "El evento más popular de la ciudad, con degustaciones, música y actividades cada año.",
  },
  {
    title: "Huerta Grande y Villa Giardino",
    desc: "Localidades vecinas del Valle de Punilla, ideales para una excursión de medio día.",
  },
  {
    title: "La Cumbre",
    desc: "A poca distancia en auto, conocida por su clima, aeroclub y paseos de altura.",
  },
];

export default function NearbyAttractions() {
  return (
    <section id="que-hacer" className="container-page py-20 sm:py-28">
      <p className="section-eyebrow text-center">Turismo</p>
      <h2 className="section-title mt-2 text-center">Qué hacer en La Falda y alrededores</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-night/70">
        La Falda es uno de los destinos más elegidos del Valle de Punilla. Desde Lado Soleado
        vas a estar cerca de todo lo que la ciudad y la región tienen para ofrecer.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ATTRACTIONS.map((a) => (
          <div key={a.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <p className="font-display text-lg font-semibold text-night">{a.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-night/70">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
