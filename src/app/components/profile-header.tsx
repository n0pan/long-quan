"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/resume", label: "resume" },
];

function ProfileHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "bg-bg px-10 py-10 flex justify-center",
        isHome ? "" : "border-b border-border",
      )}
    >
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        {/* Photo */}
        <div className="shrink-0 order-2 sm:order-1">
          <Image
            src="/images/header_pictures/lq.jpg"
            alt="Portrait of Long-Quan Hoang-Pham"
            width={100}
            height={100}
            quality={85}
            priority
            className="rounded-full object-cover border-2 border-border-strong"
          />
        </div>

        {/* Name + subtitle + nav */}
        <div className="flex flex-col items-center sm:items-start gap-3 order-1 sm:order-2">
          <div className="flex flex-col gap-1">
            <Logo />
            <p className="text-fg-muted text-sm m-0">
              Web Developer &bull; Montréal
            </p>
          </div>

          <nav>
            <ul className="list-none m-0 p-0 flex flex-row items-center gap-1">
              {navLinks.map(({ href, label }, i) => {
                const isActive = pathname === href;
                return (
                  <React.Fragment key={href}>
                    {i > 0 && (
                      <li aria-hidden className="text-fg-dim select-none px-1">
                        &bull;
                      </li>
                    )}
                    <li>
                      <Link
                        href={href}
                        className={cn(
                          "text-sm no-underline transition-colors duration-150",
                          isActive
                            ? "text-pink font-medium"
                            : "text-fg-muted hover:text-fg font-normal",
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
