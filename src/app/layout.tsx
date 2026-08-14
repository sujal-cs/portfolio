import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div
            className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-canvas text-ink antialiased selection:bg-accent selection:text-white`}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
