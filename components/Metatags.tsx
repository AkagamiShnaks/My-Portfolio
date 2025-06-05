import Head from "next/head";

function PortfolioMetaTags() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Ayon is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch."
      />
      <meta
        name="keywords"
        content="Ayon, software engineer, portfolio, web development, full stack development"
      />
      <meta name="author" content="Ayon" />
      <meta
        property="og:title"
        content="Ayon - Software Engineer Portfolio"
      />
      <meta
        property="og:description"
        content="Ayon is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch."
      />
      <meta
        property="og:image"
        content="https://yourdomain.com/path/to/your/image.jpg"
      />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ayon - Software Engineer Portfolio"
      />
      <meta
        name="twitter:description"
        content="Ayon is a skilled full stack software engineer with a passion for developing innovative solutions. Explore his portfolio to see his work and get in touch."
      />
      <meta
        name="twitter:image"
        content="https://yourdomain.com/path/to/your/image.jpg"
      />
      <title>Ayon - Software Engineer Portfolio</title>
    </Head>
  );
}

export default PortfolioMetaTags;
