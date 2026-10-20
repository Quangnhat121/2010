import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mẹ – Bông hoa đẹp nhất trong cuộc đời con",
  description: "Một món quà nhỏ từ trái tim dành tặng mẹ nhân ngày 20/10.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="antialiased">{children}</body>
    </html>
  );
}
