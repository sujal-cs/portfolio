import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Sujal Lokhande | Portfolio",
  description: "Discover Sujal Lokhande's portfolio showcasing projects, skills, and professional experiences.",
  keywords: ["Sujal Lokhande", "Portfolio", "Web Developer", "Projects", "Skills", "Experience"],
  authors: [{name: "Sujal Lokhande"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
