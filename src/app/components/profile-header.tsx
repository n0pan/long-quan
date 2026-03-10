"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "./logo";
import { cn } from "@/lib/utils";

function ProfileHeader() {
  const pathname = usePathname();
  return (
    <header className="[grid-area:header] bg-primary h-[325px] flex flex-col justify-center">
      <div
        className={cn(
          "text-white text-left grid gap-12",
          "max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:text-center max-[600px]:mb-8",
          "min-[600px]:[grid-template-areas:'photo_name']",
        )}
      >
        <div className="flex flex-col justify-center gap-3 items-end">
          <Image
            src="/images/header_pictures/lq.jpg"
            alt="portrait"
            width={200}
            height={200}
            quality={80}
            priority={true}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center gap-3">
          <Logo />
          <h2 className="text-[22px] m-0">Web Developer ● Montreal</h2>
        </div>
      </div>
      <nav className="flex flex-row justify-center">
        <ul className="list-none text-white m-0 p-0">
          <li className="inline mr-12">
            <Link
              href="/"
              className={cn(
                "font-medium no-underline transition-colors hover:text-pink",
                pathname === "/" ? "text-pink" : "text-white",
              )}
            >
              Home
            </Link>
          </li>
          <li className="inline mr-12">
            <Link
              href="/resume"
              className={cn(
                "font-medium no-underline transition-colors hover:text-pink",
                pathname === "/resume" ? "text-pink" : "text-white",
              )}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProfileHeader;
