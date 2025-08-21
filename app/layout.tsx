import type { Metadata } from "next";
import {
  Instrument_Sans,
  Montserrat,
  Raleway,
  Work_Sans,
} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

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
  title: "Admin Boxo Packaging",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
