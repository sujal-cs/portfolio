"use client"

import Link from "next/link"
import { navLinks } from "@/data/data"
import Image from "next/image"
import { useState } from "react"

export const Navbar = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
      <nav className="flex items-center justify-between font-semibold mt-[-15px] md:mt-[-10px]">
        <div className="flex items-center gap-1">
          <Image 
            src={`/images/${["monkey.png", "space-shuttle.png", "electronics.png", "camera.png"][imageIndex]}`}
            height={30}
            width={30}
            alt="logo"
            onClick={(e) => {
              e.preventDefault();
              setImageIndex((prev) => (prev + 1) % 3);
            }}
            className="cursor-pointer hover:translate-y-[-3px] border-2 border-gray-500 rounded-lg"

          />
          <Link href={"/"}>SL.</Link>
        </div>
        <div className="flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-secondary-accent"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
  )
}
