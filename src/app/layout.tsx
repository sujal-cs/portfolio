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
  // icons: {
  //   icon: "/favicon.png"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="favicon" href="/favicon.png" sizes="any" />  */}
      <body
        className={`${inter.variable} antialiased bg-light text-dark dark:bg-dark dark:text-light selection:bg-dark selection:text-light dark:selection:bg-light dark:selection:text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
