import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Head from 'next/head';
import Image from 'next/image';
// import { motion } from 'framer-motion';
import {
  AnimatedText,
  AnimatedValue,
  Layout,
  FrameWhiteBlack,
  TransitionPageEffect,
  // Employee,
  ServicesSchedule,
  HistoryCard,
} from '../../components';
import BlackLady from '../../../public/images/about/aboutHeroKate.webp';
import { stagesDataAboutSchedule, aboutMainText, aboutHistory } from '../../lib';


export default function About({ summary }) {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const decemberSecond = new Date('December 02, 2022');
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysSince(daysDiff);
  }, []);

  // const motionSettings = {
  //   initial: { y: 50 },
  //   whileInView: { y: 0 },
  //   transition: { duration: 1, type: 'spring', delay: 0.1 },
  //   viewport: { once: true },
  // };


  return (
    <>
      <Head>
        <title>O nas | Ginger</title>
        <meta name="description" content="Teren Twojego Piękna w Warszawe" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="O nas | Ginger" />
        <meta property="og:url" content="https://ginger-beauty-zone.com" />
        <meta property="og:image" content="/meta-tag.jpg" />
        <meta property="og:description" content="Odkryj najlepsze usługi paznokciowe i manicure hybrydowy w Warszawie. Wybierz spośród szerokiej gamy zabiegów, w tym manicure, pedicure, hybrydy, żelowe paznokcie i nail art. Odwiedź nasz salon kosmetyczny w Warszawie i zadbaj o swoje paznokcie!" />
        <meta property="business:contact_data:street_address" content="278 Grochowska" />
        <meta property="business:contact_data:locality" content="Warsaw" />
        <meta property="business:contact_data:postal_code" content="03-841" />
        <meta property="business:contact_data:country_name" content="Poland" />
        <meta name="description" content="Dowiedz się więcej o naszym salonie Ginger Beauty Zone. Zapraszamy na profesjonalne zabiegi i miłą atmosferę." />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-8">
          <AnimatedText
            text="Dowiedz się więcej o Ginger"
            className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {aboutMainText.heading}
              </h2>
              <p className="font-medium">
                {aboutMainText.paragraph01}
              </p>
              <p className="my-4 font-medium">
                {aboutMainText.paragraph02}
              </p>
              <p className="font-medium">
                {aboutMainText.paragraph03}
              </p>
            </div>

            <FrameWhiteBlack className="col-span-3 xl:col-span-4 md:order-1 md:col-span-8 min-h-[600px]">
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
                  <AnimatedValue value={1080} className="dark:text-light/75 " />+
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



          {/* //? Employee */}
          {/* 
          <div className="w-full my-16 mx-auto">
            <motion.h3
              {...motionSettings}
              className="text-8xl font-bold text-center lg:text-5xl xs:text-3xl "
            >
              Nasi specjaliści od piękna
            </motion.h3>

            <ul className="flex flex-wrap gap-16 items-center justify-center w-full my-16">
              {employeeData.map((employee) => (
                <Employee
                  key={employee.id}
                  name={employee.name}
                  position={employee.position}
                  imageSrc={employee.imageSrc}
                  booksyLink={employee.booksyLink}
                />
              ))}
            </ul>
          </div> */}
          <div className="w-full my-16 mx-auto">
            <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[29px] 2xl:gap-[44px]">
              <ServicesSchedule name="DLACZEGO WARTO NAS WYBRAĆ?" data={stagesDataAboutSchedule} />
            </div>
          </div>

          {/* //? Historia Ginger */}
          <div className='history'>
            <HistoryCard
              title={aboutHistory.title}
              image={aboutHistory.image}
              link='/about/history'
              subtitle={aboutHistory.subtitle}
            />
          </div>
        </Layout>
      </section>
    </>
  );
}
About.propTypes = {
  summary: PropTypes.string,
};