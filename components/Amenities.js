import { IconUsers, IconBed, IconPool, IconGrill, IconCar, IconWifi, IconHeat, IconPaw, IconTree } from "./icons";

const ITEMS = [
  [IconUsers, "Hasta 5 huéspedes", "Capacidad ideal para familias o grupos de amigos."],
  [IconBed, "2 dormitorios", "Uno con cama matrimonial y otro con individual + cucheta."],
  [IconPool, "Pileta privada", "Pileta de material de uso exclusivo durante toda la estadía."],
  [IconGrill, "Parque y asador", "Quincho techado con parrilla, ideal para el mediodía al aire libre."],
  [IconCar, "Cochera para 1 auto", "Cochera propia dentro del predio para un vehículo, sin costo adicional."],
  [IconWifi, "Wi-Fi", "Conexión disponible en toda la cabaña."],
  [IconHeat, "Calefacción", "Tiro balanceado en los dormitorios y ventiladores en verano."],
  [IconPaw, "Pet friendly", "Aceptamos mascotas pequeñas, previa consulta."],
  [IconTree, "Vista a las sierras", "Atardeceres y vista serrana desde el parque."],
];

export default function Amenities() {
  return (
    <section id="comodidades" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <p className="section-eyebrow text-center">Comodidades</p>
        <h2 className="section-title mt-2 text-center">Todo lo que necesitás para tu estadía</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-night/70">
          Un espacio equipado y cómodo, con lo justo para relajarse en familia y disfrutar del
          aire libre de las sierras de Córdoba.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(([Icon, title, desc]) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-black/5 bg-sun-50/40 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sun-100 text-sun-700">
                <Icon />
              </div>
              <div>
                <p className="font-semibold text-night">{title}</p>
                <p className="mt-1 text-sm text-night/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
