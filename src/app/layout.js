import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import NewsletterPopup from '@/components/NewsletterPopup/NewsletterPopup';
import StickyContactBar from '@/components/StickyContactBar/StickyContactBar';

export const metadata = {
  metadataBase: new URL('https://www.sarl2sauto.dz'),
  title: {
    default: 'SARL 2S Auto | Showroom & Concessionnaire Automobile à Alger',
    template: '%s | SARL 2S Auto',
  },
  description: "Achetez des véhicules neufs, d'occasion ou sur commande chez SARL 2S Auto à Alger. Distributeur de marques premium comme Jetour, Volkswagen, et plus.",
  keywords: ['voitures', 'automobile', 'luxe', 'Algérie', 'showroom', 'véhicules', 'Jetour', 'Volkswagen', 'Alger'],
  openGraph: {
    title: 'SARL 2S Auto | Showroom & Concessionnaire Automobile à Alger',
    description: "Achetez des véhicules neufs, d'occasion ou sur commande chez SARL 2S Auto à Alger. Distributeur de marques premium comme Jetour, Volkswagen, et plus.",
    url: 'https://www.sarl2sauto.dz',
    siteName: 'SARL 2S Auto',
    images: [
      {
        url: '/images/hero-poster.jpg',
        width: 1200,
        height: 630,
        alt: 'Showroom SARL 2S Auto à Alger',
      },
    ],
    locale: 'fr_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SARL 2S Auto | Showroom & Concessionnaire Automobile à Alger',
    description: "Achetez des véhicules neufs, d'occasion ou sur commande chez SARL 2S Auto à Alger.",
    images: ['/images/hero-poster.jpg'],
  },
  icons: {
    icon: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'SARL 2S Auto',
    image: 'https://www.sarl2sauto.dz/images/logo.webp',
    '@id': 'https://www.sarl2sauto.dz',
    url: 'https://www.sarl2sauto.dz',
    telephone: '0550599437',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pres de P9F7, طريق النخيل',
      addressLocality: 'Ouled Hedadj',
      addressRegion: 'Alger',
      postalCode: '35000',
      addressCountry: 'DZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.72314187226924,
      longitude: 3.36106017572543
    }
  };

  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <NewsletterPopup />
        <StickyContactBar />
      </body>
    </html>
  );
}
