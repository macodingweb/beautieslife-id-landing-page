import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beautieslife.id",
  description: "Beautieslife.id Using Next.js, TailwindCSS - MACoding4U",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
