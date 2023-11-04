import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import {
  FrameWhiteBlack,
  Layout,
  ServicesResultThree,
  ServicesSchedule,
  ServicesTextRight,
  TransitionPageEffect,
  Accordion,
  ServicesAdvantages,
  ServicesTitle,
  ButtonBack
} from "../../components";
import { articles } from "../../lib";

function ArticlePage() {
  const router = useRouter();
  const { slug } = router.query;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <h2 className="inline-block w-full font-bold capitalize text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
        Artykułu nie znaleziono!
      </h2>
    );
  }

  return (
    <>
      <Head>
        <title>Blog | Ginger</title>
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
      <section className="flex w-full flex-col items-center justify-center dark:text-light text-dark">
        <Layout className="pt-8">
          <div className="flex items-start lg:flex-col">
            <ButtonBack className="mr-4 lg:mr-0 lg:mb-4" />
            <h1 className="w-full mx-auto flex items-center justify-center text-center sm:py-0 font-bold capitalize text-8xl xl:text-6xl lg:text-5xl xs:text-3xl mb-16">
              {article.title}
            </h1>
          </div>
          <div className="grid w-full grid-cols-8 gap-16 lg:gap-6 sm:gap-8 items-center">
            <div className="col-span-4 xl:col-span-4 flex flex-col items-start justify-start md:order-2 lg:col-span-8">
              {article.text &&
                article.text.map(text => (
                  <p key={text} className="my-4 font-medium max-w-[480px] lg:max-w-full">
                    {text}
                  </p>
                ))}
              {article.resultThree &&
                article.resultThree.map(three => (
                  <ServicesResultThree
                    key={three}
                    name={three.name}
                    data={three.data}
                  />
                ))}
            </div>
            <FrameWhiteBlack className="col-span-4 min-h-full xl:col-span-4 md:order-1 lg:col-span-8 h-auto lg:min-h-[450px]">
              <Image
                src={article.imgURL}
                alt="BlackLady"
                className="absolute -z-1 p-2 rounded-2xl w-full h-auto"
                style={{ objectFit: "cover" }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
          </div>

          {article.servicesAdvantage && (
            <ServicesAdvantages list={article.servicesAdvantage.list} heading={article.servicesAdvantage.heading} />
          )}

          {article.additionalHeadingFirst && (
            <ServicesTitle additionalHeading={article.additionalHeadingFirst} />
          )}

          {article && article.blockAccordion && article.blockAccordion.map(item => (
            <Accordion heading={item.heading} data={item.data} />
          ))}

          {article.servicesSchedule &&
            article.servicesSchedule.map(schedule => (
              <ServicesSchedule name={schedule.name} data={schedule.data} key={schedule} />
            ))}

          {article.servicesAdvantageSecond && (
            <ServicesAdvantages list={article.servicesAdvantageSecond.list} heading={article.servicesAdvantageSecond.heading} />
          )}

          {article.additionalHeadingSecond && (
            <ServicesTitle additionalHeading={article.additionalHeadingSecond} />
          )}

          {article.servicesAdvantageThird && (
            <ServicesAdvantages list={article.servicesAdvantageThird.list} heading={article.servicesAdvantageThird.heading} />
          )}

          {article.servicesTextRight && (
            <ServicesTextRight data={article.servicesTextRight} />
          )}
          <ButtonBack className="my-12" label="Wszystkie artykuły" />
        </Layout>
      </section>
    </>
  );
}

export default ArticlePage;
