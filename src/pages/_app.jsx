import "../styles/globals.css";
import PropTypes from 'prop-types';
import Head from "next/head";
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { useMemo, useState } from "react";
import { CustomCursor, Footer, Navigation } from "../components";
import { CursorContext, ThemeContext } from '../lib/context';
import { useThemeSwitcher } from "../hooks/useThemeSwicher";
import { GOOGLE_ANALITICS_KEY } from "../utils/key";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps, }) {
  const router = useRouter();
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [mode, setMode] = useThemeSwitcher();

  // Google Analytics
  // <!-- Google tag (gtag.js) -->
  // <script async src="https://www.googletagmanager.com/gtag/js?id=G-FEZ3384TFD"></script>
  // <script>
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());

  //   gtag('config', 'G-FEZ3384TFD');
  // </script>

  const contextValue = useMemo(
    () => ({
      cursor: {
        isHoveringLink,
        setHoveringLink: setIsHoveringLink,
        isHoveringText,
        setHoveringText: setIsHoveringText,
        isHoveringLogo,
        setHoveringLogo: setIsHoveringLogo,
        isHoveringImage,
        setHoveringImage: setIsHoveringImage,
      },
      theme: {
        mode,
        toggleTheme: () => setMode(mode === "dark" ? "light" : "dark"),
      },
    }),
    [isHoveringLink, isHoveringText, isHoveringLogo, isHoveringImage, mode, setMode]
  );
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        srtategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALITICS_KEY}`}
      />
      <Script
        id="googleAn"
        srtategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${GOOGLE_ANALITICS_KEY}');`
        }
      </Script>
      <CursorContext.Provider value={contextValue.cursor}>
        <ThemeContext.Provider value={contextValue.theme}>
          <CustomCursor />
          <main
            className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
          >
            <Navigation />
            <AnimatePresence mode="wait">
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
          </main>
        </ThemeContext.Provider>
      </CursorContext.Provider>
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
