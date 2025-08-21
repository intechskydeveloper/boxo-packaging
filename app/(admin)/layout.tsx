import type { Metadata } from "next";

import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/layout/Sidebar";

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
    <main className={`flex w-full`}>
      <Sidebar />
      <>{children}</>
      <Analytics />
    </main>
  );
}
