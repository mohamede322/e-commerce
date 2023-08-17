import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import { createContext, useState } from "react";

export const ctx = createContext();

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>E-Commerce</title>
      </Head>
      <ctx.Provider
        value={{
          cartItems,
          setCartItems,
          subTotal,
          setSubTotal,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ctx.Provider>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></Script>    </>
  );
}

export default MyApp;
