import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Frozen Assets | Fantasy Hockey Keeper League",
  description:
    "Home of the Frozen Assets fantasy hockey keeper league. View past champions, league rules, scoring categories, and more.",
  openGraph: {
    title: "Frozen Assets | Fantasy Hockey Keeper League",
    description:
      "Home of the Frozen Assets fantasy hockey keeper league.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${geist.variable} font-sans bg-navy-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
