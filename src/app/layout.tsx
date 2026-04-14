import type { Metadata } from "next";
import "./globals.css";

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
      <body className="font-sans bg-navy-950 text-white">
        {children}
      </body>
    </html>
  );
}
