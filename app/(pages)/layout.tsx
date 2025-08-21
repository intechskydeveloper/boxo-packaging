import type { Metadata } from "next";
import {
  Instrument_Sans,
  Montserrat,
  Raleway,
  Work_Sans,
} from "next/font/google";
import "../globals.css";
import { FAQ } from "../../components/sections/home/FAQ";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const instrumentSans = Work_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Raleway({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Boxo Packaging",
  description: "Your Custom Packaging Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <FAQ />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
