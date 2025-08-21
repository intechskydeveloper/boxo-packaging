import type { Metadata } from "next";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { FAQ } from "@/components/sections/home/FAQ";



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
    <>
      <Navbar />
      <main className="pt-[55px] mb-20">{children}</main>
      <FAQ />
      <Footer />
      <Analytics />
    </>
  );
}
