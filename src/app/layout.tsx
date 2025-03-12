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
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: ["АЯКС", "Ajax"],
  authors: [{ name: "Rinya", url: "https://github.com/Rinya7" }],
  creator: "Rinya",
  icons: [{ rel: "icon", url: '/favicon.svg' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
         
        {children}
        
      </body>
    </html>
  );
}
