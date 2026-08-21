import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Lado Soleado | Cabaña en La Falda, Córdoba con Pileta Privada",
    template: "%s | Lado Soleado",
  },
  description:
    "Cabaña en La Falda, Córdoba para hasta 5 personas, con pileta privada, parque, asador y cochera. A 8 cuadras del centro. Reservá por WhatsApp o Booking.",
  keywords: [
    "cabaña en La Falda",
    "alojamiento en La Falda",
    "cabaña con pileta privada en La Falda",
    "alojamiento para familias en La Falda",
    "cabañas La Falda Córdoba",
    "alquiler temporario La Falda",
    "Valle de Punilla alojamiento",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Lado Soleado" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE.domain,
    siteName: "Lado Soleado",
    title: "Lado Soleado | Cabaña en La Falda, Córdoba con Pileta Privada",
    description:
      "Cabaña para hasta 5 personas en La Falda, Córdoba. Pileta privada, parque, asador y cochera a 8 cuadras del centro.",
    images: [{ url: "/images/pileta-2.jpg", width: 1200, height: 800, alt: "Pileta privada de la cabaña Lado Soleado en La Falda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lado Soleado | Cabaña en La Falda, Córdoba",
    description: "Cabaña con pileta privada para hasta 5 personas en La Falda, Córdoba.",
    images: ["/images/pileta-2.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#fd7f13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans pb-16 md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
