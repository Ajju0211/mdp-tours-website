import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "MDP Tours | Your Gateway to Global Adventures",
  description:
    "Premium tours, handpicked destinations, unforgettable journeys. MDP Tours delivers exceptional travel experiences with seamless planning.",
  keywords: [
    "premium tours",
    "travel packages",
    "global destinations",
    "luxury travel",
    "vacation packages",
  ],
  icons: {
    icon: [
      {
        url: "/assets/logo.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/assets/logo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/logo.jpeg",
        type: "image/jpeg",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2D9CDB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
