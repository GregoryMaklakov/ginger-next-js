import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useEffect } from 'react';
import { CursorContext, ThemeContext } from '../lib/context';
import HeroArtDark from "../../public/images/profile/heroDark.webp";
import HeroArtLight from "../../public/images/profile/heroLight.webp";
import {
  Layount,
  AnimatedText,
  Icon,
  BooksyButton,
  TransitionPageEffect,
} from "../components";

export default function Home() {
  const { setHoveringLink } = useContext(CursorContext);

  const { mode } = useContext(ThemeContext);
  const [heroArtSource, setHeroArtSource] = useState(HeroArtDark);

  const handleMouseEnter = () => {
    setHoveringLink(true);
  };
  const handleMouseLeave = () => {
    setHoveringLink(false);
  };

  useEffect(() => {
    setHeroArtSource(mode === 'dark' ? HeroArtDark : HeroArtLight);
  }, [mode])

  return (
    <>
      <Head>
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Ginger Beauty Zone" />
        <meta property="og:url" content="https://ginger-beauty-next-tailwind.netlify.app/" />
        <meta property="og:image" content="/meta-tag.jpg" />
        <meta property="og:description" content="Teren Twojego Piękna" />
        <meta property="business:contact_data:street_address" content="278 Grochowska" />
        <meta property="business:contact_data:locality" content="Warsaw" />
        <meta property="business:contact_data:region" content="" />
        <meta property="business:contact_data:postal_code" content="03-841" />
        <meta property="business:contact_data:country_name" content="Poland" />

        {/* <title>Ginger Beauty Zone</title>
        <meta name="description" content="Teren Twojego Piękna" />

        <meta property="og:url" content="https://ginger-beauty-next-tailwind.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ginger Beauty Zone" />
        <meta property="og:description" content="Teren Twojego Piękna" />
        <meta property="og:image" content="/meta-tag.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ginger-beauty-next-tailwind.netlify.app" />
        <meta property="twitter:url" content="https://ginger-beauty-next-tailwind.netlify.app/" />
        <meta name="twitter:title" content="Ginger Beauty Zone" />
        <meta name="twitter:description" content="Teren Twojego Piękna" />
        <meta name="twitter:image" content="https://ginger-beauty-next-tailwind.netlify.app/images/profile/meta-tag.jpg" /> */}
      </Head>
      {/* <Head>
        <title>Ginger Beauty Zone</title>
        <meta name="description" content="Teren Twojego Piękna" />
      </Head> */}
      <TransitionPageEffect />
      <main className="">
        <Layount className="pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16">
          <div className="w-full flex items-center justify-between lg:flex-col">
            <div className="w-1/2 -top-[30px] p-14 lg:p-0  md:w-full md:mb-6">
              <Image
                src={heroArtSource}
                alt="Beauty woman in the shadow"
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                className="flex items-center justify-center rounded-md lg:hidden z-10 md:inline-block md:w-full "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Twój wygląd nigdy nie był piękniejszy"
                className="!text-6xl text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium lg:text-center text-dark dark:text-light">
                Wiemy, jak ważne jest dla Was posiadanie niezawodnego miejsca, w
                którym możecie uporządkować nie tylko swoje paznokcie, ale także
                swoje myśli. Ginger to prawdziwie klimatyczne i uduchowione
                miejsce, które pomoże Wam się zrelaksować, naładować pięknem i
                dobrymi wibracjami.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center sm:flex-col">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4"
                  href="/dummy.pdf"
                  target="_blank"
                  download
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Odbierz zniżkę 30%
                  <Icon name="linkArrow" size={24} className="ml-2" />
                </Link>
                <Link
                  className="flex items-center text-dark ml-4 font-medium capitalize underline text-lg dark:text-light"
                  href="tel:48510001772"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Zadzwoń
                </Link>
              </div>
            </div>
          </div>
        </Layount>
        <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
      </main>
    </>
  );
}
