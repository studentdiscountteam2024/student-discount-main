import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-[#a5c5c9] [background:radial-gradient(125%_125%_at_50%_10%,#a5c5c9_40%,#63e_90%)]"> */}
      <body
      
        className={`rounded-lg ${geistSans.variable} ${geistMono.variable} antialiased   `}
      >
        
        <Navbar />
        {children}
      </body>
      {/* </div> */}
    </html>
  );
}
