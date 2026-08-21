import Image from "next/image";

const PHOTOS = [
  { src: "/images/pileta-1.jpg", alt: "Pileta privada de la cabaña Lado Soleado con solárium en La Falda", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/quincho-asador.jpg", alt: "Quincho techado con parrilla y mesa exterior en la cabaña de La Falda" },
  { src: "/images/comedor.jpg", alt: "Comedor interior de la cabaña Lado Soleado" },
  { src: "/images/dormitorio-matrimonial.jpg", alt: "Dormitorio con cama matrimonial en la cabaña" },
  { src: "/images/dormitorio-detalle.jpg", alt: "Dormitorio con placard y TV en la cabaña Lado Soleado" },
  { src: "/images/bano.jpg", alt: "Baño completo de la cabaña Lado Soleado" },
  { src: "/images/fachada-noche.jpg", alt: "Fachada iluminada de la cabaña Lado Soleado de noche" },
];

const VIDEOS = [
  { src: "/videos/pileta-hidromasaje.mp4", poster: "/images/poster-pileta-hidromasaje.jpg", label: "Pileta privada en movimiento" },
  { src: "/videos/recorrido-interior.mp4", poster: "/images/poster-recorrido-interior.jpg", label: "Recorrido por el interior de la cabaña" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="container-page py-20 sm:py-28">
      <p className="section-eyebrow text-center">Galería</p>
      <h2 className="section-title mt-2 text-center">Fotos y videos de la cabaña</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-night/70">
        Un recorrido visual por la pileta, el parque, el quincho y los dormitorios de Lado
        Soleado.
      </p>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
        {PHOTOS.map((p) => (
          <div key={p.src} className={`relative overflow-hidden rounded-xl ${p.span ?? ""}`}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {VIDEOS.map((v) => (
          <div key={v.src} className="overflow-hidden rounded-2xl bg-black shadow-lg">
            <video
              controls
              preload="none"
              poster={v.poster}
              className="aspect-[9/16] w-full max-h-[560px] object-cover sm:aspect-video sm:max-h-none"
            >
              <source src={v.src} type="video/mp4" />
            </video>
            <p className="bg-night px-4 py-2 text-xs text-white/70">{v.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
