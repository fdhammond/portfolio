import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth w-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dzkqopnby/image/upload/v1685206109/icon_lljf4f.png"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&display=swap"
          rel="stylesheet"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
