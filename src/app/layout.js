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

export const metadata = {
  title: "Cadabruh - Seamless On-Chain Crypto Swaps",
  description:
      "Cadabruh simplifies on-chain swaps with optimized routes for over 4000 tokens. Transact securely, quickly, and anonymously in Standard or Private mode.",
  keywords: [
    "crypto swap",
    "on-chain transactions",
    "anonymous swaps",
    "crypto bridge",
    "token exchange",
    "Cadabruh",
    "Houdini Swap",
  ],
  openGraph: {
    title: "Cadabruh - Seamless On-Chain Crypto Swaps",
    description:
        "Make secure and optimized on-chain crypto swaps with Cadabruh. Exchange over 4000 tokens quickly and anonymously.",
    url: "https://yourdomain.com", // Replace with your actual domain
    siteName: "Cadabruh",
    images: [
      {
        url: "logo.svg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Cadabruh On-Chain Swap UI",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
      </body>
      </html>
  );
}
