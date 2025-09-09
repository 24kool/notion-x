import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Notion-X",
  description: "Clone of Notion",
  icons: {
    icon: "/x_logo.svg",
  },
  // icons for light and dark mode
  // icons: {
  //   icon: [
  //     {
  //       media: "(prefers-color-scheme: light)",
  //       url: "/x_logo.svg",
  //       href: "/x_logo.svg",
  //     },
  //     {
  //       media: "(prefers-color-scheme: dark)",
  //       url: "/x_logo.svg",
  //       href: "/x_logo.svg",
  //     }
  //   ]
  // }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
