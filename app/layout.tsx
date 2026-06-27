import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import ThemeProvider from "@/components/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Joshi | Software Engineer",

  description:
    "Portfolio of Mohit Joshi — Computer Science student at IIIT Una, Full Stack Developer, Competitive Programmer and Open Source Contributor.",

  keywords: [
    "Mohit Joshi",
    "Portfolio",
    "IIIT Una",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Competitive Programming",
    "Open Source",
    "Apache",
    "Go",
    "Developer",
  ],

  authors: [{ name: "Mohit Joshi" }],
  creator: "Mohit Joshi",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Mohit Joshi | Software Engineer",
    description:
      "Computer Science student at IIIT Una building software, contributing to open source and solving real-world problems.",
    type: "website",
    siteName: "Mohit Joshi Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohit Joshi | Software Engineer",
    description:
      "Computer Science student at IIIT Una building software and contributing to open source.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen">
        <ThemeProvider>
          {children}

          <Toaster
            richColors
            position="top-right"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}