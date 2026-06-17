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
  title: "Mathanraj Rajendran",
  description: "Personal website of Mathanraj Rajendran — Research Assistant at Chungbuk National University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          var sc_project=13304891;
          var sc_invisible=1;
          var sc_security="b1e9f25c";
        `}} />
        <script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async />
        <noscript>
          <img src="https://c.statcounter.com/13304891/0/b1e9f25c/1/" alt="" referrerPolicy="no-referrer-when-downgrade" style={{display:'none'}} />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
