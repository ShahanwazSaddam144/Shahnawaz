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

// app/layout.tsx or app/layout.js

export const metadata = {
  title: "Shahnawaz Saddam Butt | Full-Stack Developer",
  description:
    "I'm Shahnawaz Saddam Butt — a 15-year-old full-stack developer from Lahore. I build fast, modern websites using Next.js, React, Tailwind, Node.js & MongoDB.",
  keywords: [
    "Shahnawaz Saddam Butt",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Teen Programmer",
    "Web Developer Lahore",
    "MongoDB",
    "Portfolio Website",
  ],
  metadataBase: new URL("https://yourdomain.com"), // Replace with your real domain

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Shahnawaz Saddam Butt | Full-Stack Developer",
    description:
      "Modern web developer with React, Next.js, Tailwind, and Node.js. Building responsive, full-stack apps at just 15.",
    url: "https://shahnawaz.buttnetworks.com/",
    siteName: "Shahnawaz Saddam Butt",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Shahnawaz Saddam Butt — Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shahnawaz Saddam Butt | Full-Stack Developer",
    description:
      "Teen full-stack dev building modern sites with React, Next.js, Tailwind, MongoDB & more.",
  },

  authors: [
    {
      name: "Shahnawaz Saddam Butt",
      url: "https://shahnawaz.buttnetworks.com/",
    },
  ],

  creator: "Shahnawaz Saddam Butt",
  publisher: "Shahnawaz Saddam Butt",
  applicationName: "Portfolio of Shahnawaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
