import "../styles/globals.css";
import PropTypes from 'prop-types';
import Head from "next/head";
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { Footer, Navigation } from "../components";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps, }) {
  const router = useRouter();
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
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
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
