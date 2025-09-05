import type { Metadata } from "next";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { FAQ } from "@/components/sections/Home/FAQ";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main className="pt-[55px] mb-32 px-4 sm:px-6 md:px-8 lg:px-5 xl:px-5 2xl:px-5 max-w-[1320px] mx-auto">
          {children}
        </main>
        <FAQ />
        <Footer />
        <Analytics />
      </ThemeProvider>
    </>
  );
}
