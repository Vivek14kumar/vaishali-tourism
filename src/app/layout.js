import "../style/globals.css";
import localFont from "next/font/local";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
      <head>
        <link rel="canonical" href="https://vaishalitourism.in/" />
      </head>
      <body className="flex flex-col min-h-screen ">
        {/* Navbar fixed to top or static */}
        <Navbar />

        {/* Responsive main content */}
        <main className="flex-1 w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 bg-gradient-to-b from-emerald-50 to-white">
          {children}
        </main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
