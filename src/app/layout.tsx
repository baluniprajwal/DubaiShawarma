import type { Metadata } from "next";
import AppShell from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Dubai Shawarma",
  title: {
    default: "Dubai Shawarma",
    template: "%s | Dubai Shawarma",
  },
  description: "Restaurant storefront for Dubai Shawarma and Park Shahri Naw.",
  keywords: [
    "Dubai Shawarma",
    "Park Shahri Naw",
    "shawarma",
    "grill",
    "restaurant",
    "menu",
    "book table",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
