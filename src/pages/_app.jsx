import "../styles/globals.css";
import PropTypes from 'prop-types';
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Footer, Navigation } from "../components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({
    prop1: PropTypes.string,
    prop2: PropTypes.number,
    prop3: PropTypes.func,
    prop4: PropTypes.node,
    prop5: PropTypes.elementType,
  }).isRequired,
};
