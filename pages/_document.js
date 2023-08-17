import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="icon"
          href="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-id1128229893?k=20&m=1128229893&s=612x612&w=0&h=uOQYRr-vTDnW60Mn8MWSwt6i9uK2SGni8jR1CKKELK8="
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
