import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/layouts/Header";


export const metadata: Metadata = {
  title: "Burger Shop",
  description: "Best burger shop",
  icons: {
    icon: '/images/logo.png', 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      > 
        <Header/>
        {children}
      </body>
    </html>
  );
}
