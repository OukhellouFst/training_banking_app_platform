import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter,IBM_Plex_Serif}from "next/font/google"
import "./globals.css";

// Adding inter and ibmPlexSerif fonts with their corresponding parameters.
const inter = Inter({subsets:["latin"],variable:'--font-inter'})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:["latin"],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})

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

// chaning the default metadata
export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking platform for everyone.",
  icons:{
    icon: '/icons/logo.svg'
  }
};

// root layout : changing the className so it will contain inter and ibmPlexSerif variables.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
