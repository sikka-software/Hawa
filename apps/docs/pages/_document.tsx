import { Html, Head, Main, NextScript } from "next/document";
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://hawa.style/docs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hawa UI Kit - Sikka Software" />
        <meta property="og:description" content="undefined" />
        <meta
          property="og:image"
          content="https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-opengraph-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="hawa.style" />
        <meta property="twitter:url" content="https://hawa.style/docs" />
        <meta name="twitter:title" content="Hawa UI Kit - Sikka Software" />
        <meta name="twitter:description" content="undefined" />
        <meta
          name="twitter:image"
          content="https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-opengraph-image.jpg"
        />
      </Head>
      <body className="hawa-m-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
