/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion, useScroll } from 'framer-motion';
import { useContext } from 'react';
import {
  AnimatedText,
  BooksyButton,
  FrameWhiteBlack,
  GingerButton,
  Icon,
  Layout,
  PriceList,
  Tabs,
  TransitionPageEffect,
} from '../../components';
import BlackLadyPrice from '../../../public/images/price/2.webp';
import { CursorContext, priceDataEyes, priceDataNails, socialLink } from '../../lib';

export default function Price() {
  const { setHoveringText, setHoveringLink } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setHoveringText(true);
  };
  const handleMouseLeave = () => {
    setHoveringText(false);
  };

  const handleMouseEnterLink = () => {
    setHoveringLink(true);
  };
  const handleMouseLeaveLink = () => {
    setHoveringLink(false);
  };

  const AnimatedLink = motion(Link);

  const tabsPriceItems = [
    {
      title: 'Paznokcie',
      content: (
        <div className='p-4'>
          <PriceList categories={priceDataNails} />
        </div>
      ),
      // disabled: false,
    },
    {
      title: 'Brwi/Rzęsy/Makeup',
      content: (
        <div className='p-4'>
          <PriceList categories={priceDataEyes} />
        </div>
      ),
      // disabled: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Cennik | Ginger</title>
        <meta name="description" content="Teren Twojego Piękna w Warszawe" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Blog | Ginger" />
        <meta property="og:url" content="https://ginger-beauty-zone.com" />
        <meta property="og:image" content="/meta-tag.jpg" />
        <meta property="og:description" content="Teren Twojego Piękna" />
        <meta property="business:contact_data:street_address" content="278 Grochowska" />
        <meta property="business:contact_data:locality" content="Warsaw" />
        <meta property="business:contact_data:postal_code" content="03-841" />
        <meta property="business:contact_data:country_name" content="Poland" />
        <meta name="description" content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone." />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center">
        <Layout className="py-10 mt-28">
          <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 bg-cover relative lg:flex-col lg:p-0">
            <Image
              src={BlackLadyPrice}
              alt="beauty nails makeup BlackLadyPrice"
              style={{ objectFit: 'cover' }}
              fill
              className="absolute -z-1 p-2 rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
            <div className="w-1/3 lg:w-full">
              <GingerButton
                href="/"
                size={240}
                className="z-10"
                color="white"
              />
            </div>
            <div className="flex flex-col w-2/3 p-8 lg:w-full lg:text-center lg:pt-0">
              <CursorContext.Consumer>
                {({ isHoveringText }) => (
                  <AnimatedText
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={`${isHoveringText ? "text-dark bg-transparent dark:bg-transparent dark:text-light" : "text-dark dark:bg-transparent dark:text-light"
                      } !text-4xl pt-8 text-left z-10 text-light lg:text-center lg:pt-0 md:!text-2xl sm:!text-lg xs:!text-sm font-bold`}
                    text={`W naszym salonie zawsze obowiązuje system zbierania punktów rabatowych. Za każdą ósmą usługę otrzymujesz ${30} % zniżki`}
                  />
                )}
              </CursorContext.Consumer>
            </div>
          </FrameWhiteBlack>
          <h1
            className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          >Nasze ceny</h1>
          <Tabs items={tabsPriceItems} />

          <div className="grid place-content-center">
            <AnimatedLink
              className="inline-flex"
              href={socialLink.booksy}
              target="_blank"
              whileTap={{ scale: 0.9 }}
              onMouseEnter={handleMouseEnterLink}
              onMouseLeave={handleMouseLeaveLink}
            >
              <Icon name="booksy" size={140} className='fill-current text-dark dark:text-light' />
            </AnimatedLink>
          </div>
          <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
        </Layout>
      </section >
    </>
  );
}

export function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'center center'],
    layoutEffect: false,
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light sm:-left-5">
      <svg className="-rotate-45" width="75" height="75" viewBox="0 0 100 50">
        <circle
          cx="75"
          cv="50"
          r="20"
          className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cv="50"
          r="20"
          className=" stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cv="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}

LiIcon.propTypes = {
  reference: PropTypes.shape({
    prop1: PropTypes.string,
    prop2: PropTypes.number,
  }).isRequired,
};
