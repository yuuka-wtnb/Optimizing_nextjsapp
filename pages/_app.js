import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events"></meta>
        <meta
          name="viewport"
          content="initial-scales=1.0, width=device-width"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
