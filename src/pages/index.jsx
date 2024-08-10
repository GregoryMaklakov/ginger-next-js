import Head from "next/head";
import { useRef } from "react";
import { useScroll, } from "framer-motion";
import {
  BooksyButton,
  // TransitionPageEffect,
  ColumnsBlock,
  Hero,
  GetDiscountBlock,
  CardsGrid,
  EmployeesBlock,
  ParallaxText,
} from "../components";
import { trialImages, socialLink } from "../lib";

export default function Home() {

  const flippedTextHeroFirst = ["Glow", "Pure", "Vibe",];
  const flippedTextHeroSecond = ["Mani", "Shine", "Soft"];

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

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
      <main className="main flex w-full flex-col">
        <Hero />
        <div
          ref={container}
          className="relative h-full">
          <GetDiscountBlock
            wordsVariants1={flippedTextHeroFirst}
            wordsVariants2={flippedTextHeroSecond}
            images={trialImages}
            scrollYProgress={scrollYProgress}
          />
          <CardsGrid
            scrollYProgress={scrollYProgress}
          />
        </div>
        <EmployeesBlock />
        <ParallaxText link={socialLink.instagram} className="pt-24" baseVelocity={-10} count={20} icon="insta">Join us</ParallaxText>
        <ParallaxText link={socialLink.booksy} className="pb-24" baseVelocity={10} count={15}>See more reviews </ParallaxText>
        <ColumnsBlock />

        <BooksyButton className="fixed right-4 bottom-2 lg:bottom-0" />
      </main>
    </>
  );
}
