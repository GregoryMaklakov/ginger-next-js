/* eslint-disable react/no-unknown-property */
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { motion, useScroll } from 'framer-motion';
import { useRef, useContext } from 'react';
import { priceListData, socialLink } from '../../lib/constant';
import { CursorContext } from '../../lib/context';
import {
  AnimatedText,
  BooksyButton,
  FrameWhiteBlack,
  GingerButton,
  Icon,
  Layout,
  TransitionPageEffect,
} from '../../components';
import BlackLadyPrice from '../../../public/ginger/images/2.webp';

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

  return (
    <>
      <Head>
        <title>Cennik | Ginger</title>
        <meta name="description" content="Zapoznaj się z naszym cennikiem na zabiegi kosmetyczne w salonie Ginger Beauty Zone." />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center">
        <Layout className="py-10">
          <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 bg-cover relative overflow-hidden lg:flex-col lg:p-0">
            <Image
              src={BlackLadyPrice}
              alt="beauty nails makeup BlackLadyPrice"
              style={{ objectFit: 'cover' }}
              fill
              className="absolurte -z-1 p-2 rounded-2xl"
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
                      } !text-4xl pt-8 text-left z-10 text-light lg:text-center lg:pt-0 md:!text-2xl sm:!text-lg xs:!text-sm`}
                    text={`W naszym salonie zawsze obowiązuje system zbierania punktów rabatowych. Za każdą ósmą usługę otrzymujesz ${30} % zniżki`}
                  />
                )}
              </CursorContext.Consumer>
            </div>
          </FrameWhiteBlack>
          <h2
            className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          >Nasze ceny</h2>
          <PriceList />
          <div className="grid place-content-center">
            <AnimatedLink
              className="inline-flex"
              href={socialLink.booksy}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={handleMouseEnterLink}
              onMouseLeave={handleMouseLeaveLink}
            >
              <Icon name="booksy" size={140} color='#B63E96' />
            </AnimatedLink>
          </div>
          <BooksyButton className="fixed left-4 bottom-2 lg:bottom-0 lg:left-0" />
        </Layout>
      </section >
    </>
  );
}

export function PriceList() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 40%', 'end center'],
    layoutEffect: false,
  });

  return (
    <div className="mb-16 mt-0">
      <div ref={ref} className="w-[75%] mx-auto relative pt-16 xl:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute t-0 left-9 sm:left-4 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"
        />
        {priceListData.map(category => (
          <Category
            key={category.id}
            name={category.name}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
}

function Category({ name, items }) {
  const ref = useRef(null);
  return (
    <div ref={ref}>
      <LiIcon referece={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: 'spring', delay: 0.1 }}
        className="flex flex-col items-center justify-center mb-16 xl:pl-28 xl:items-start sm:pl-12"
      >
        <h3 className="font-bold capitalise text-2xl mb-6 dark:text-light/75 xl:text-xl">
          {name}
        </h3>
        <ul className="w-[60%] xl:w-full ">
          {items.map(item => (
            <PriceItem key={item.id} name={item.name} price={item.price} />
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

function PriceItem({ name, price }) {
  return (
    <li>
      <div className="flex items-center justify-between w-full mb-2">
        <p className="font-medium f-wull dark:text-light md:text-sm xs:text-xs xs:max-w-[220px] line-clamp-1">
          {name}
        </p>
        {typeof price === 'object' ? (
          <span className="capitalize text-primary font-bold xs:text-xs xs:text-right">
            {price.min}-{price.max} zl
          </span>
        ) : (
          <span className="capitalize text-primary font-bold xs:text-xs xs:text-right">
            {price} zl
          </span>
        )}
      </div>
    </li>
  );
}

PriceItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
  ]),
};

export function LiIcon({ referece }) {
  const { scrollYProgress } = useScroll({
    target: referece,
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
  referece: PropTypes.shape({
    prop1: PropTypes.string,
    prop2: PropTypes.number,
  }).isRequired,
};
