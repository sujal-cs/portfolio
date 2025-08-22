"use client";
import Link from "next/link";
import { navLinks, logos } from "@/data/data";
import Image from "next/image";
import { useState } from "react";

export const Navbar = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <nav className="flex items-center justify-between font-semibold mt-[-15px] md:mt-[-10px] md:text-xl">
      <div className="flex items-center gap-1">
        <div
          onClick={() => setImageIndex((prev) => (prev + 1) % logos.length)}
          className="cursor-pointer border-2 border-gray-300 dark:border-neutral-700 rounded-lg"
        >
          {logos.map((logo, index) => (
            <Image
              key={logo}
              src={`/images/${logo}`}
              height={30}
              width={30}
              alt="logo"
              priority={true} // preload
              className={`${index === imageIndex ? "block" : "hidden"} rounded-lg`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {navLinks.map((link, index) => (
          <div key={index}>
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-neutral-400"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
