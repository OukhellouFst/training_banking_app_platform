import type { Metadata } from "next";
import {Inter,IBM_Plex_Serif}from "next/font/google"

// Adding inter and ibmPlexSerif fonts with their corresponding parameters.
const inter = Inter({subsets:["latin"],variable:'--font-inter'})
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:["latin"],
  weight: ['400','700'],
  variable: '--font-ibm-plex-serif'
})

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
