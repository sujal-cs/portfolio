import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sujal Lokhande | Portfolio",
  description:
    "Discover Sujal Lokhande's portfolio showcasing projects, skills, and professional experiences.",
  keywords: [
    "Sujal Lokhande",
    "Portfolio",
    "Web Developer",
    "Projects",
    "Skills",
    "Experience",
  ],
  authors: [{ name: "Sujal Lokhande" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-light text-dark 
        dark:bg-dark dark:text-gray-200 
        selection:bg-dark selection:text-light 
        dark:selection:bg-light dark:selection:text-dark`}
    >
      <body>
          
          {children}
      </body>
    </html>
  );
}
