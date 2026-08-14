"use client";
import Link from "next/link";
import { navLinks, logos } from "@/data/data";
import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const currentLogo = logos[imageIndex];

  return (
    <nav
      aria-label="Primary navigation"
      className="flex min-h-10 items-center justify-between gap-4 py-1"
    >
      <div className="flex shrink-0 items-center">
        <button
          type="button"
          aria-label="Show next decorative image"
          onClick={() => setImageIndex((prev) => (prev + 1) % logos.length)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-surface p-1 shadow-sm shadow-stone-950/5 transition-colors hover:border-accent/40 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Image
            src={`/images/${currentLogo}`}
            height={30}
            width={30}
            alt=""
            className="rounded-lg"
          />
        </button>
      </div>

      <div className="flex items-center gap-1.5 text-sm font-medium md:text-base">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="inline-flex h-10 items-center rounded-md px-2.5 text-muted transition-colors hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {link.name}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};
