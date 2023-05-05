import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AnimatedText,
  AnimatedValue,
  Layount,
  FrameWhiteBlack,
  TransitionPageEffect,
} from '../../components';
import BlackLady from '../../../public/ginger/images/black-lady.webp';
import KateImage from '../../../public/ginger/images/KateDark22.png';
import { socialLink } from '../../lib/constant';

export default function About() {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const decemberSecond = new Date('December 02, 2022');
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysSince(daysDiff);
  }, []);

  const motionSettings = {
    initial: { y: 50 },
    whileInView: { y: 0 },
    transition: { duration: 1, type: 'spring', delay: 0.1 },
    viewport: { once: true },
  };

  const motionFrameWhiteBlack = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, type: 'spring', delay: 0.1 },
    viewport: { once: true },
  };

  return (
    <>
      <Head>
        <title>O nas | Ginger</title>
        <meta name="description" content="Dowiedz się więcej o naszym salonie Ginger Beauty Zone. Zapraszamy na profesjonalne zabiegi i miłą atmosferę." />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layount className="pt-8">
          <AnimatedText
            text="Dowiedz się więcej o salonie piękności Ginger"
            className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                O nas
              </h2>
              <p className="font-medium">
                Witaj w naszym nowym salonie piękna w Warszawie! Nasze usługi to
                coś więcej niż tylko zabiegi kosmetyczne - to sposób na odkrycie
                piękna, który drzemie w Tobie. Nasz salon to miejsce, w którym
                używamy tylko najlepszych materiałów, dbamy o pełną sterylizację
                narzędzi, a nasz personel wychodzi naprzeciw indywidualnym
                potrzebom każdego klienta.
              </p>
              <p className="my-4 font-medium">
                Jesteśmy dumni z naszego doświadczenia i zaangażowania w pracę,
                a nasze usługi obejmują pełen zakres zabiegów manicure i
                pedicure. Oferujemy również masaże, stylizację brwi i rzęs oraz
                makijaż.
              </p>
              <p className="font-medium">
                W naszym salonie każdy klient jest traktowany indywidualnie i z
                pełnym zaangażowaniem. Jest to miejsce, w którym każdy może
                poczuć się wyjątkowo i zrelaksować się w przyjemnej atmosferze.
                Zapraszamy do naszego prawdziwego miejsca piękna w Warszawie!
              </p>
            </div>

            <FrameWhiteBlack className="col-span-3 xl:col-span-4 min-h-full md:order-1 md:col-span-8 md:min-h-[450px]">
              <Image
                src={BlackLady}
                alt="BlackLady"
                className="absolurte -z-1 p-2 rounded-2xl w-full h-auto"
                style={{ objectFit: 'cover' }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between h-full md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue value={780} className="dark:text-light/75 " />+
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  zadowolonych klientów
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue
                    value={daysSince}
                    className="dark:text-light/75"
                  />
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  dni pracy salonu
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue value={24} className="dark:text-light/75" /> +
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  łączny staż pracy zespołu
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full my-16 mx-auto">
            <motion.h3
              {...motionSettings}
              className="text-8xl font-bold text-center lg:text-5xl xs:text-3xl "
            >
              Nasi specjaliści od piękna
            </motion.h3>
            <div className="flex flex-wrap gap-16 items-center justify-center w-full my-16">
              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex flex-col gap-4 min-h-full p-16 items-center justify-between lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full sm:min-w-[88vw]">
                  <div className="sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:max-w-full z-10 relative"
                    />
                  </div>
                  <div className='w-full flex items-center justify-center min-h-[84px]'>
                    <div className="flex flex-col w-full lg:max-h-60 overflow-y-auto sm:w-full">
                      <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Kate
                      </h4>
                      <h5 className="text-lg font-bold text-primary/75 dark:text-primaryDark/75">
                        Manicurist
                      </h5>
                    </div>
                    <Link
                      href={socialLink.booksyKate}
                      className="flex items-center justify-center bg-dark text-light shadow-md border border-solid border-dark w-32 h-12 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light "
                      target="_blank"
                    >
                      <span className="flex items-center justify-center text-center leading-5 md:text-xs">
                        Umów
                      </span>
                    </Link>
                  </div>
                </FrameWhiteBlack>
              </motion.div>

              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex flex-col gap-4 min-h-full p-16 items-center justify-between lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full sm:min-w-[88vw]">
                  <div className="sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:max-w-full z-10 relative"
                    />
                  </div>
                  <div className='w-full flex items-center justify-center min-h-[84px]'>
                    <div className="flex flex-col w-full lg:max-h-60 overflow-y-auto sm:w-full">
                      <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Jana
                      </h4>
                      <h5 className="text-lg font-bold text-primary/75 dark:text-primaryDark/75">
                        Manicurist
                      </h5>
                    </div>
                    <Link
                      href={socialLink.booksyJana}
                      className="flex items-center justify-center bg-dark text-light shadow-md border border-solid border-dark w-32 h-12 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light "
                      target="_blank"
                    >
                      <span className="flex items-center justify-center text-center leading-5 md:text-xs">
                        Umów
                      </span>
                    </Link>
                  </div>
                </FrameWhiteBlack>
              </motion.div>

              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex flex-col gap-4 min-h-full p-16 items-center justify-between lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full sm:min-w-[88vw]">
                  <div className="sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:max-w-full z-10 relative"
                    />
                  </div>
                  <div className='w-full flex items-center justify-center min-h-[84px]'>
                    <div className="flex flex-col w-full lg:max-h-60 overflow-y-auto sm:w-full">
                      <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Maria
                      </h4>
                      <h5 className="text-lg font-bold text-primary/75 dark:text-primaryDark/75">
                        Manicurist
                      </h5>
                    </div>
                    <Link
                      href={socialLink.booksyMaria}
                      className="flex items-center justify-center bg-dark text-light shadow-md border border-solid border-dark w-32 h-12 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light "
                      target="_blank"
                    >
                      <span className="flex items-center justify-center text-center leading-5 md:text-xs">
                        Umów
                      </span>
                    </Link>
                  </div>
                </FrameWhiteBlack>
              </motion.div>

              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex flex-col gap-4 min-h-full p-16 items-center justify-between lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full sm:min-w-[88vw]">
                  <div className="sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:max-w-full z-10 relative"
                    />
                  </div>
                  <div className='w-full flex items-center justify-center h-[84px]'>
                    <div className="flex flex-col w-full lg:max-h-60 overflow-y-auto sm:w-full">
                      <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Liza
                      </h4>
                      <h5 className="text-sm font-bold text-primary/75 dark:text-primaryDark/75 overflow-hidden max-w-[120px]">
                        Brow, Lash, and Makeup Artist
                      </h5>
                    </div>
                    <Link
                      href={socialLink.booksyLiza}
                      className="flex items-center justify-center bg-dark text-light shadow-md border border-solid border-dark w-32 h-12 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light "
                      target="_blank"
                    >
                      <span className="flex items-center justify-center text-center leading-5 md:text-xs">
                        Umów
                      </span>
                    </Link>
                  </div>
                </FrameWhiteBlack>
              </motion.div>

              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex flex-col gap-4 min-h-full p-16 items-center justify-between lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full sm:min-w-[88vw]">
                  <div className="sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:max-w-full z-10 relative"
                    />
                  </div>
                  <div className='w-full flex items-center justify-center min-h-[84px]'>
                    <div className="flex flex-col w-full lg:max-h-60 overflow-y-auto sm:w-full">
                      <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                        Luda
                      </h4>
                      <h5 className="text-lg font-bold text-primary/75 dark:text-primaryDark/75">
                        Masażysta
                      </h5>
                    </div>
                    <Link
                      href={socialLink.booksy}
                      className="flex items-center justify-center bg-dark text-light shadow-md border border-solid border-dark w-32 h-12 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light "
                      target="_blank"
                    >
                      <span className="flex items-center justify-center text-center leading-5 md:text-xs">
                        Umów
                      </span>
                    </Link>
                  </div>
                </FrameWhiteBlack>
              </motion.div>
            </div>
          </div>
        </Layount>
      </section>
    </>
  );
}
