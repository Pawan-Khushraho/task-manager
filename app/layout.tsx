import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/Components/SideBar";
import GlobalStyleProvider from "@/app/providers/GlobalStyleProvider";
import ContextProvider from "@/app/providers/ContextProvider";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
        />
      </head>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

      <ContextProvider>
        <GlobalStyleProvider>
          <Sidebar/>
          <div className="w-full">{children}</div>
        </GlobalStyleProvider>
      </ContextProvider>


      </body>
      </html>
  );
}
