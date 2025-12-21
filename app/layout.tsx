import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";

// export const dynamic = 'error';
// export const revalidate = false;

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  icons: {
    icon: '/icon_copy.png',
  },
  title: "Bipsos Pro - Solutions Digitales",
  description:
    "Agence web à Antananarivo, Madagascar. Site vitrine, e-commerce, application mobile.",
  keywords:
    "bipsos pro, agence web madagascar, développement web, application mobile",
  openGraph: {
    title: "Bipsos Pro",
    description: "Solutions digitales complètes à Madagascar",
    url: "https://bipsospro.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body
        className="bg-black text-white font-poppins"
        style={{ margin: 0 }}
      >
        <Navbar />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}