import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "KULTURFESTIVALEN",
  description: "KULTUR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased font-verdana bg-black"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
