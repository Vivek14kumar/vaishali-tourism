import "../style/globals.css";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/next"

const mozillaHeadline = localFont({
  src: "../../public/fonts/MozillaHeadline-VariableFont_wdth,wght.ttf",
  variable: "--font-mozilla-headline",
  weight: "200 700", // range if available
  display: "swap",
});

export const metadata = {
  title: "Vaishali Tourism - Travel Guide & Historical Places",
  description:
    "Vaishali tourism, Vaishali travel guide, Vaishali historical places, Discover Vaishali, a Buddhist pilgrimage and historic site in Bihar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mozillaHeadline.variable}`}>
      <Head>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://vaishalitourism.in/" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vaishalitourism.in/" />
        <meta property="og:image" content="https://vaishalitourism.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Vaishali Tourism",
              url: "https://vaishalitourism.in",
              logo: "https://vaishalitourism.in/logo.png",
              description:
                "Discover Vaishali, a Buddhist pilgrimage and historic site in Bihar.",
            }),
          }}
        />
        
      </Head>
      <body className="flex flex-col min-h-screen ">
        {/* Navbar fixed to top or static */}
        <Navbar />

        {/* Responsive main content */}
        <main className="flex-1 w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-b from-emerald-50 to-white">
          {children}
          <Analytics />   {/* Add Analytics here */}
        </main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
