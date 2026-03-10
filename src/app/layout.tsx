import React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/main-layout";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Long-Quan",
  description: "A Montreal-based web developer's personal website.",
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
