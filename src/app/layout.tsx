import React from "react";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import MainLayout from "./components/MainLayout";

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
        <StyledComponentsRegistry>
          <MainLayout>{children}</MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
