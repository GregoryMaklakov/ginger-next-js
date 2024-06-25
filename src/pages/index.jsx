import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
import { trialImages, CursorContext } from "../lib";
import {
  Layout,
  Icon,
  BooksyButton,
  // TransitionPageEffect,
  FlippedText,
  BackgroundBlock,
  ColumnsBlock,
  AnimatedText,
  MouseImageTrail,
} from "../components";

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
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      filter: "blur(0px)",
      scale: 1,
      opacity: 1,
      transition: { duration: 1 },
      visibility: 1,
    });
  }, [controls]);

  const flippedTextHero = ["styl", "blask", "nails", "spojrzenie"];
  const flippedTextHeroSecond = ["delikatność", "pewność", "troska"];

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

      {/* <TransitionPageEffect /> */}
      <main className="">
        <section className="flex w-full flex-col">
          <motion.div
            className="relative min-h-screen w-[100vw] dark:bg-dark overflow-hidden bg-no-repeat bg-cover bg-top dark:bg-hero-dark bg-hero-light"
            initial={{
              filter: "blur(12px)",
              scale: 1.125,
              opacity: 0,
              visibility: 0,
            }}
            animate={controls}
          >
            <span className="z-1 block w-full absolute top-0 left-0 right-0 z-[1] dark:bg-gradient-to-b from-dark via-transparent to-transparent h-2/3" />
            <span className="z-1 block w-full absolute bottom-0 left-0 right-0 z-[1] dark:bg-gradient-to-t from-dark via-transparent to-transparent h-full" />
          </motion.div>
          <div className="flex items-center justify-center h-screen w-full max-w-[1920px] mx-auto absolute left-0 right-0">
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
                : "dark:text-light text-primary"
                }
                  w-min transition-all duration-500
                            tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] z-20"`}
            />
          </div>

          <div className="min-h-screen flex flex-col pt-12">
            <MouseImageTrail
              renderImageBuffer={50}
              rotationRange={25}
              images={trialImages}>
              <Layout className="pt-0 pb-0 2xl:pb-4 md:pt-16 sm:pt-0 flex items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center">
                  <CursorContext.Consumer>
                    {({ isHoveringText }) => (
                      <div
                        className={`inline-flex flex-col gap-2 w-full font-bold capitalize text-center text-6xl 2xl:text-4xl 2xs:text-2xl  ${isHoveringText
                          ? "text-dark bg-inherit dark:bg-inherit dark:text-light"
                          : "text-dark dark:bg-inherit dark:text-light"
                          } md:text-4xl dark:bg-inherit text-dark`}
                        onMouseEnter={handleMouseEnterText}
                        onMouseLeave={handleMouseLeaveText}
                      >
                        <div>
                          <FlippedText textVariants={flippedTextHero} />
                        </div>
                        <div>
                          <FlippedText textVariants={flippedTextHeroSecond} />
                        </div>
                        <div>Razem z Ginger Beauty Zone</div>
                      </div>
                    )}
                  </CursorContext.Consumer>
                  <div className="w-2/3 h-[50vh] relative rounded-xl my-12 2xl:my-6 xl:w-full 2xl:w-1/2 md:h-[40vh] 2xs:h-[28vh]">
                    <Image
                      src="/images/home/second-section-02.jpg"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="squad ginger"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>

                </div>
              </Layout>
            </MouseImageTrail>
            <div className="flex items-center justify-center sm:flex-col xs:w-full pt-3 lg:p-16 md:p-12 sm:p-6">
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

          <div className="flex flex-col w-full items-center justify-center">
            <BackgroundBlock />

            <ColumnsBlock />

          </div>
        </section>
        <BooksyButton className="fixed right-4 bottom-2 lg:bottom-0" />
      </main>
    </>
  );
}
