import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Card Management",
  description: "A Wallet-inspired control panel for managing your debit and credit cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-[family-name:var(--font-body)] antialiased">{children}</body>
    </html>
  );
}
