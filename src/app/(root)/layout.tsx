import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const poppins = Poppins(
  { subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', 
}
);

export const metadata: Metadata = {
  title: "Uncaged Events",
  description: "Uncaged Events is an event management platform.",
  icons: {
    icon: "assets/images/logo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Header/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
