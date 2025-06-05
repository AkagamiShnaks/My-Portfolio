import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const url = "https://ayon-sen.vercel.app"; // update this to your real URL if different

export const metadata = {
  title: "Ayon Sen",
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    {
      name: "description",
      content:
        "Ayon Sen is a Machine Learning Engineer and Full-Stack Developer specializing in NLP, Computer Vision, and real-world AI solutions. Explore his portfolio to learn more.",
    },
    {
      name: "keywords",
      content:
        "Ayon Sen, Machine Learning, NLP, Computer Vision, Full-Stack Developer, React, Python, AI Engineer, Portfolio",
    },
    { name: "author", content: "Ayon Sen" },
    {
      property: "og:title",
      content: "Ayon Sen - ML Engineer & Developer Portfolio",
    },
    {
      property: "og:description",
      content:
        "Explore Ayon Sen's portfolio showcasing cutting-edge Machine Learning and Full-Stack projects that solve real-world problems.",
    },
    {
      property: "og:image",
      content: `${url}/ayon.jpg`, // Replace with your actual image path
    },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Ayon Sen - ML Engineer & Developer Portfolio",
    },
    {
      name: "twitter:description",
      content:
        "Explore Ayon Sen's portfolio showcasing cutting-edge Machine Learning and Full-Stack projects that solve real-world problems.",
    },
    {
      name: "twitter:image",
      content: `${url}/ayon.jpg`, // Replace with your actual image path
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ayon Sen is a Machine Learning Engineer and Full-Stack Developer specializing in NLP, Computer Vision, and real-world AI solutions. Explore his portfolio to learn more."
        />
        <meta
          name="keywords"
          content="Ayon Sen, Machine Learning, NLP, Computer Vision, Full-Stack Developer, React, Python, AI Engineer, Portfolio"
        />
        <meta name="author" content="Ayon Sen" />
        <meta
          property="og:title"
          content="Ayon Sen - ML Engineer & Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore Ayon Sen's portfolio showcasing cutting-edge Machine Learning and Full-Stack projects that solve real-world problems."
        />
        <meta property="og:image" content={`${url}/ayon.jpg`} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ayon Sen - ML Engineer & Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore Ayon Sen's portfolio showcasing cutting-edge Machine Learning and Full-Stack projects that solve real-world problems."
        />
        <meta name="twitter:image" content={`${url}/ayon.jpg`} />
        <title>Ayon Sen - ML Engineer & Developer Portfolio</title>
        <link rel="icon" href="/ayon.jpg" /> {/* Replace with actual image */}
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
