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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />

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

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
  );
}

export default MyApp;
