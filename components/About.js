import Image from "next/image";

export default function About() {
  return (
    <section id="cabana" className="container-page py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="section-eyebrow">La cabaña</p>
          <h2 className="section-title mt-2">
            Tu lugar para desconectar en el corazón de La Falda
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-night/80">
            <p>
              <strong>Lado Soleado</strong> es una cabaña de alquiler temporario en{" "}
              <strong>La Falda, Córdoba</strong>, pensada para disfrutar de unos días de descanso
              en familia, en un entorno tranquilo y con espacios propios para disfrutar al aire
              libre.
            </p>
            <p>
              Tiene capacidad para hasta <strong>5 huéspedes</strong>, distribuidos en 2
              dormitorios: uno con cama matrimonial y otro con una cama individual y una cucheta.
              Cuenta con baño, cocina equipada, espacios comunes, Wi-Fi, ventiladores y
              calefacción por tiro balanceado en los dormitorios para los días más frescos de la
              sierra.
            </p>
            <p>
              El exterior es uno de sus principales atractivos: <strong>pileta privada</strong> de
              material, parque, asador y cochera, todo de uso exclusivo durante la estadía. Desde
              el parque se disfrutan hermosos atardeceres y una vista relajada hacia las sierras.
              Se aceptan mascotas pequeñas.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/dormitorio-matrimonial.jpg"
              alt="Dormitorio matrimonial de la cabaña Lado Soleado en La Falda"
              fill
              sizes="(max-width: 1024px) 45vw, 300px"
              className="object-cover"
            />
          </div>
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/quincho-asador.jpg"
              alt="Quincho con asador y galería techada en la cabaña Lado Soleado, La Falda"
              fill
              sizes="(max-width: 1024px) 45vw, 300px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
