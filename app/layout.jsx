import './globals.css';
import { Inter, Barlow_Condensed } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallBar from '@/components/MobileCallBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/lib/site';
import { localBusinessJsonLd, JsonLd } from '@/lib/seo';
import Analytics from '@/components/Analytics';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — Foundation Repair, Concrete & Mold in Ottawa`,
    template: `%s — ${site.name}`,
  },
  description: site.shortPitch,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    siteName: site.fullName,
    title: `${site.fullName} — Foundation Repair, Concrete & Mold`,
    description: site.shortPitch,
  },
};

export const viewport = {
  themeColor: '#0F172A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA" className={`${sans.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col pb-14 lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <WhatsAppButton />
        <JsonLd data={localBusinessJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}
