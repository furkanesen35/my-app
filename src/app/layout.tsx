import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Volunteer Bootcamp", // Customize this
  description: "Your custom description here", // Customize this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}