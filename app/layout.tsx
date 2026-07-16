import './globals.css';

export const metadata = {
  title: 'Hesed — a private investment holding company',
  description: 'Hesed holds and builds companies in software and services — patiently, and for good.',
  icons: { icon: '/favicon.svg' },
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
      </head>
      <body>{children}</body>
    </html>
  );
}