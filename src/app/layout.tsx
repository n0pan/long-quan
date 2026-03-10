import React from "react";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import MainLayout from "./components/main-layout";

const karla = Karla({ subsets: ["latin"] });

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
      <body className={karla.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
