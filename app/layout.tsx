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
        <script
  src="https://www.trychatrelay.com/widget.js"
  data-embed-key="6cb60b81-d7eb-4f8d-8e10-99c3a0826bdc"
  data-show-human-button="true"
  data-app-url="https://www.trychatrelay.com"
></script>
      </body>
    </html>
  );
}
