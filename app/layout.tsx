import "@/lib/polyfills";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashutosh Sagar",
  description: "Ashutosh Sagar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://relaay-eight.vercel.app/widget.js"
          data-org-id="45e31b47-e5bd-4c75-881f-d552d0e310ab"
          data-app-url="https://relaay-eight.vercel.app"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
