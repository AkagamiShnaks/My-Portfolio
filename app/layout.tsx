import type { Metadata } from "next";
import {
  DM_Sans,
  JetBrains_Mono,
  Kodchasan,
  Rethink_Sans,
} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

const kodchasan = Kodchasan({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-kodchasan",
});

const fontDisplay = localFont({
  src: "../public/fonts/MonumentExtended-Regular.otf",
  variable: "--font-monument",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ayon - Full Stack Developer & AI Engineer",
  description: "Machine Learning Engineer & Full-Stack Developer",
  keywords: [
    "Ayon Sen",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Bangladesh",
    "AI Researcher",
    "Computer Vision",
    "Natural Language Processing",
    "React Developer",
    "Python Developer",
    "TensorFlow",
    "PyTorch",
    "Data Analyst",
    "AI Engineer",
  ].join(", "),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={inter.style} lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${fontDisplay.variable} ${fontMono.variable}`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
