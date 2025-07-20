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
  title: "Shahnawaz Saddam Butt || Portfolio",
  description: "Shahnawaz Saddam Butt is a 15-year-old full-stack web developer skilled in React, Node.js, Tailwind CSS, MongoDB, and Next.js.",
  keywords: ["Shahnawaz Saddam Butt", "portfolio", "web developer", "React", "Next.js", "MongoDB", "Tailwind", "full-stack"],
  authors: [{ name: "Shahnawaz Saddam Butt", url: "https://buttnetworks.vercel.app" }],
  creator: "Shahnawaz Saddam Butt",
  publisher: "Shahnawaz Saddam Butt",
  openGraph: {
    title: "Shahnawaz Saddam Butt || Portfolio",
    description: "Explore the projects, skills, and certificates of Shahnawaz Saddam Butt, a passionate full-stack web developer.",
    url: "https://buttnetworks.vercel.app",
    siteName: "Shahnawaz Saddam Portfolio",
    images: [
      {
        url: "/butt.png", 
        width: 1200,
        height: 630,
        alt: "Shahnawaz Saddam Butt Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahnawaz Saddam Butt || Portfolio",
    description: "Explore the full-stack projects and skills of Shahnawaz Saddam Butt.",
    creator: "@yourTwitterHandle", 
    images: ["/butt.png"],
  },
  metadataBase: new URL("https://buttnetworks.vercel.app"),
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
