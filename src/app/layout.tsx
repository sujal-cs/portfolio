import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "../styles/globals.css";

const siteUrl = "https://sujal-lokhande-portfolio.vercel.app";
const siteDescription =
  "Sujal Lokhande's developer portfolio featuring projects, skills, achievements, and education.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sujal Lokhande | Developer Portfolio",
    template: "%s | Sujal Lokhande",
  },
  description: siteDescription,
  applicationName: "Sujal Lokhande Portfolio",
  keywords: [
    "Sujal Lokhande",
    "developer portfolio",
    "web developer",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "machine learning",
  ],
  authors: [{ name: "Sujal Lokhande" }],
  creator: "Sujal Lokhande",
  publisher: "Sujal Lokhande",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Sujal Lokhande Portfolio",
    title: "Sujal Lokhande | Developer Portfolio",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Lokhande | Developer Portfolio",
    description: siteDescription,
    creator: "@endermanCS",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1112,
        height: 742,
        alt: "Sujal Lokhande developer portfolio",
      },
    ],
  },
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
