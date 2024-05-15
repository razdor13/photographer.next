import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import MainFooter from "./components/mainFooter/MainFooter";

const myFont = localFont({ src: './fonts/NAMU-Pro.ttf' })

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
      <body className={myFont.className}>
        <div>header</div>
        {children}
        <MainFooter/>
        </body>
    </html>
  );
}