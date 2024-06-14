import Head from "next/head";
import Link from "next/link";
import { useContext, useState } from "react";
import { CursorContext } from "../lib/context";

import {
  Layout,
  Icon,
  BooksyButton,
  TransitionPageEffect,
  FlippedText,
  BackgroundBlock,
  ParallaxScrollBlock,
  ColumnsBlock,
  LogoImage,
  AnimatedText,
} from "../components";
import { galleryData } from "../lib";

export default function Home() {
  const { setHoveringLink } = useContext(CursorContext);
  const [isHovered] = useState(false);

  const handleMouseEnter = () => {
    setHoveringLink(true);
  };
  const handleMouseLeave = () => {
    setHoveringLink(false);
  };
  const { setHoveringText } = useContext(CursorContext);
  const handleMouseEnterText = () => {
    setHoveringText(true);
  };
  const handleMouseLeaveText = () => {
    setHoveringText(false);
  };

  const flippedTextHero = ["paznokcie", "urodę", "spojrzenie"];
  const flippedTextHeroSecond = ["troskę", "delikatność", "pewność"];

  return (
    <>
      <Head>
        <title>Ginger Beauty Zone</title>
        <meta name="description" content="Teren Twojego Piękna w Warszawe" />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:title"
          content="Usługi Paznokciowe i Manicure w Warszawie | Ginger Beauty Zone"
        />
        <meta property="og:url" content="https://ginger-beauty-zone.com" />
        <meta
          property="og:image"
          content="https://d375139ucebi94.cloudfront.net/region2/pl/162702/logo/87abe39eef5d4f5cb4968854db35be-ginger-beauty-zone-logo-0b4580ef172240329bb5c6e7f314b3-booksy.jpeg"
        />
        <meta property="og:description" content="Teren Twojego Piękna" />
        <meta
          property="business:contact_data:street_address"
          content="278 Grochowska"
        />
        <meta property="business:contact_data:locality" content="Warsaw" />
        <meta property="business:contact_data:postal_code" content="03-841" />
        <meta property="business:contact_data:country_name" content="Poland" />
      </Head>

      <TransitionPageEffect />
      <main className="">
        <section className="flex w-full flex-col">
          <div className="relative min-h-screen w-[100vw] dark:bg-dark overflow-hidden bg-no-repeat bg-cover bg-top dark:bg-hero-dark bg-hero-light">
            <span className="z-1 block w-full absolute top-0 left-0 right-0 z-[1] dark:bg-gradient-to-b from-dark via-transparent to-transparent h-2/3" />
            <span className="z-1 block w-full absolute bottom-0 left-0 right-0 z-[1] dark:bg-gradient-to-t from-dark via-transparent to-transparent h-full" />
            <div className="flex items-center justify-center h-screen relative w-full max-w-[1920px] mx-auto">
              <AnimatedText
                text="GINGER"
                className={`${isHovered
                  ? "dark:text-light text-light"
                  : "dark:text-primary text-dark"
                  }
                            w-min transition-all duration-500 
                            tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] "`}
              />

              <AnimatedText
                text="Warsaw"
                className={`${isHovered
                  ? "dark:text-primary text-primary"
                  : "dark:text-light text-light"
                  }
                  w-min transition-all duration-500
                            tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] z-20"`}
              />
            </div>
          </div>
          <Layout className="pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16 min-h-screen flex items-center justify-center">
            <div className="w-full flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center self-center">
                <CursorContext.Consumer>
                  {({ isHoveringText }) => (
                    <div
                      className={`inline-flex flex-col gap-2 w-full font-bold capitalize text-left text-8xl 2xl:text-6xl xl:text-4xl  ${isHoveringText
                        ? "text-dark bg-inherit dark:bg-inherit dark:text-light"
                        : "text-dark dark:bg-inherit dark:text-light"
                        } md:text-4xl dark:bg-inherit text-dark`}
                      onMouseEnter={handleMouseEnterText}
                      onMouseLeave={handleMouseLeaveText}
                    >
                      <div>
                        <div className="inline sm:block sm:mb-3">
                          Zadbaj o swoje
                        </div>{" "}
                        <FlippedText textVariants={flippedTextHero} />
                      </div>
                      <div>
                        <div className="inline sm:block sm:mb-3">I poczuj</div>{" "}
                        <FlippedText textVariants={flippedTextHeroSecond} />
                      </div>
                      <div>razem z Ginger</div>
                    </div>
                  )}
                </CursorContext.Consumer>
              </div>

              <p className="my-4 text-base font-medium self-start text-dark dark:text-light w-[80%] xs:w-full">
                Wiemy, jak ważne jest dla Was posiadanie niezawodnego miejsca, w
                którym możecie uporządkować nie tylko swoje paznokcie, ale także
                swoje myśli. Ginger to prawdziwie klimatyczne i uduchowione
                miejsce, które pomoże Wam się zrelaksować, naładować pięknem i
                dobrymi wibracjami.
              </p>
              <div className="flex items-center self-start mt-2 sm:flex-col xs:w-full">
                <Link
                  className="flex items-center justify-center bg-dark text-light p-2.5 px-6 xs:px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 xs:w-full"
                  href="/dummy.pdf"
                  target="_blank"
                  download
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Odbierz zniżkę 20%
                  <Icon name="linkArrow" size={24} className="ml-2" />
                </Link>
                <Link
                  className="flex items-center sx:w-full xs:mt-4 ml-4 xs:ml-0 font-medium capitalize underline text-lg dark:text-light text-dark "
                  href="tel:48510001772"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Zadzwoń
                </Link>
              </div>
            </div>
          </Layout>
          <div className="flex flex-col w-full items-center justify-center">
            <BackgroundBlock />
            {/* <Layout className="w-full max-w-[1920px] mx-auto h-full sm:p-6w-full inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 py-10">
              {galleryData.slice(0, 1).map((data) => (
                <ParallaxScrollBlock key={data.id} {...data} />
              ))}
            </Layout> */}
            <ColumnsBlock />
            {/* <Layout className="w-full max-w-[1920px] mx-auto h-full sm:p-6w-full inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 py-10">

              {galleryData.slice(1, 2).map((data) => (
                <ParallaxScrollBlock key={data.id} {...data} />
              ))}
            </Layout> */}
          </div>
        </section>
        <BooksyButton className="fixed right-4 bottom-2 lg:bottom-0" />
      </main>
    </>
  );
}
