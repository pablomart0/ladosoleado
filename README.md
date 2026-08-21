# Lado Soleado

Landing page oficial de **Lado Soleado**, cabaña de alquiler temporario en La Falda,
Córdoba (Valle de Punilla). Construida con Next.js (App Router) + Tailwind CSS,
pensada para SEO local y con llamadas a la acción directas a WhatsApp y Booking.

## Stack

- Next.js 14 (App Router, Metadata API, `sitemap.js` / `robots.js`)
- Tailwind CSS
- Despliegue en Vercel

## Desarrollo local

```bash
npm install
npm run dev
```

## Contenido editable

- Datos de contacto, WhatsApp y Booking: [`lib/site.js`](lib/site.js)
- Secciones de la página: [`components/`](components)
- Fotos y videos: [`public/images`](public/images) y [`public/videos`](public/videos)
- Preguntas frecuentes (con schema FAQPage): [`components/FAQ.js`](components/FAQ.js)

## SEO

- Metadata completa (title, description, Open Graph, Twitter Card) en
  [`app/layout.js`](app/layout.js).
- Datos estructurados `LodgingBusiness` y `FAQPage` (JSON-LD) en
  [`app/page.js`](app/page.js).
- `sitemap.xml` y `robots.txt` generados automáticamente.
- Recordá actualizar `SITE.domain` en `lib/site.js` cuando se configure el
  dominio propio, y dar de alta el sitio en Google Search Console.
