import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Staple",
  description: "A hidden cafe in the Athens of Pampanga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${outfit.variable} ${roboto.variable} antialiased`}
        >
          {children}
          <Analytics />
        </body>
      </ReactLenis>
    </html>
  );
}
