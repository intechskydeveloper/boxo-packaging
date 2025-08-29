import type { Metadata } from "next";
import { ClerkProvider, SignedIn } from "@clerk/nextjs";
import "../globals.css";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/layout/Sidebar";
import AuthNav from "@/components/dashboard/AuthNav";

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
    <ClerkProvider>
      <main className="relative flex w-full max-w-[1370px]">
        <AuthNav />
        <SignedIn>
          <Sidebar />
        </SignedIn>
        <>{children}</>
        <Analytics />
      </main>
    </ClerkProvider>
  );
}
