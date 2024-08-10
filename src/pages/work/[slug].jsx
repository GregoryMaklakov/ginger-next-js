import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import {
  Layout,
  TransitionPageEffect,
  ButtonBack,
  ServicesResultThree,
  FrameWhiteBlack,
  Accordion,
  ServicesAdvantages
} from "../../components";
import { hiringEmployeesData, socialLink } from "../../lib";
import { ButtonLink } from '../../components/ButtonLink/ButtonLink';

function OfferPage() {
  const router = useRouter();
  const { slug } = router.query;
  const offer = hiringEmployeesData.find(a => a.slug === slug);

  if (!offer) {
    return (
      <h2 className="inline-block w-full font-bold capitalize pt-40 text-8xl text-dark dark:bg-dark dark:text-light text-center xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl">
        Artykułu nie znaleziono!
      </h2>
    );
  }

  return (
    <>
      <Head>
        <title>Oferty pracy | Ginger</title>
        <meta
          name="description"
          content="Dołącz do zespołu Ginger Beauty Zone w Warszawie i stań się częścią naszego profesjonalnego zespołu. Oferujemy doskonałe warunki pracy i możliwości rozwoju."
        />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Oferty pracy | Ginger Beauty Zone" />
        <meta property="og:url" content="https://ginger-beauty-zone.com/work" />
        <meta property="og:image" content="/meta-tag.jpg" />
        <meta
          property="og:description"
          content="Dołącz do zespołu Ginger Beauty Zone w Warszawie i stań się częścią naszego profesjonalnego zespołu. Oferujemy doskonałe warunki pracy i możliwości rozwoju."
        />
        <meta
          property="business:contact_data:street_address"
          content="278 Grochowska"
        />
        <meta property="business:contact_data:locality" content="Warsaw" />
        <meta property="business:contact_data:postal_code" content="03-841" />
        <meta property="business:contact_data:country_name" content="Poland" />
        <meta
          name="description"
          content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone."
        />
      </Head>
      <TransitionPageEffect />
      <section className="flex w-full flex-col items-center justify-center dark:text-light text-dark mt-28">
        <Layout className="pt-8">
          <div className="flex items-start lg:flex-col">
            <ButtonBack className="mr-4 lg:mr-0 lg:mb-4" />
            <h1 className="w-full mx-auto flex items-center justify-center text-center sm:py-0 font-bold capitalize text-8xl xl:text-6xl lg:text-5xl xs:text-3xl mb-16">
              {offer.title}
            </h1>
          </div>
          <div className="grid w-full grid-cols-8 gap-16 lg:gap-6 sm:gap-8 items-center">
            <FrameWhiteBlack className="col-span-4 min-h-full xl:col-span-4 md:order-1 lg:col-span-8 h-auto lg:min-h-[450px]">
              <Image
                src={offer.imgURL}
                alt="BlackLady"
                className="absolute -z-1 p-2 rounded-2xl w-full h-auto"
                style={{ objectFit: "cover" }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
            <div className="col-span-4 xl:col-span-4 flex flex-col items-start justify-start md:order-2 lg:col-span-8">
              {offer.resultThree &&
                offer.resultThree.map((three) => (
                  <ServicesResultThree
                    key={three}
                    name={three.name}
                    data={three.data}
                  />
                ))}
            </div>
          </div>
          {offer && offer.blockAccordion && offer.blockAccordion.map(item => (
            <Accordion heading={item.heading} data={item.data} />
          ))}
          {offer.servicesAdvantage && (
            <ServicesAdvantages list={offer.servicesAdvantage.list} heading={offer.servicesAdvantage.heading} />
          )}
          {offer.servicesAdvantageSecond && (
            <ServicesAdvantages list={offer.servicesAdvantageSecond.list} heading={offer.servicesAdvantageSecond.heading} />
          )}
          <div className="flex items-center pb-24 xs: justify-center gap-4 sm:flex-col xs:w-full pt-3 lg:p-16 md:p-12 sm:p-6 w-full lg:flex-col">
            <ButtonLink
              variant="primary"
              href="tel:48510001772"
              className="min-w-[280px]"
            >
              Aplikuy telefonicznie
            </ButtonLink>
            <ButtonLink
              variant="instagram"
              href={socialLink.instagram}
              target="_blank"
              className="min-w-[280px]"
            >
              Aplikuy przez Instagram
            </ButtonLink>
          </div>
          <ButtonBack className="my-12" />
        </Layout>
      </section>
    </>
  );
}

export default OfferPage;
