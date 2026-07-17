import type { Metadata } from 'next';
import { siteConfig } from '../lib/site-config';
import organizationJsonLd from '../lib/organization.json';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadata.siteUrl),
  title: 'Hesed, a private investment holding company',
  description: siteConfig.metadata.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Hesed',
    title: 'Hesed, a private investment holding company',
    description: siteConfig.metadata.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hesed, a private investment holding company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hesed, a private investment holding company',
    description: siteConfig.metadata.description,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: '32x32' }, { url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/apple-touch-icon.png',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Heebo:wght@400;700;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
