import type { Metadata } from "next";

import { JetBrains_Mono } from "next/font/google";
import React from "react";

import "./globals.css";
import MainLayout from "./components/main-layout";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  description: "A Montreal-based software developer's personal website.",
  title: "Long-Quan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
