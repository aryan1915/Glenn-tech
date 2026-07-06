import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://eleks.com/wp-content/themes/eleks/css/style.min.css?ver=1.4.4" />
        <link rel="stylesheet" href="https://eleks.com/wp-content/themes/eleks/front-end/libs/slick-carousel/slick/slick.css?ver=1.8.0" />
        <link rel="stylesheet" href="https://eleks.com/wp-content/themes/eleks/css/chat.min.css?ver=1.4.4" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
