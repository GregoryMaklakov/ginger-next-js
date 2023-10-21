import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import {
  FrameWhiteBlack,
  Layout,
  TransitionPageEffect,
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
      <section className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-8">
          <h1 className="w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0 font-bold capitalize text-8xl xl:text-6xl lg:text-5xl xs:text-3xl mb-16">
            {article.title}
          </h1>
          <div className="grid w-full grid-cols-8 gap-16 lg:gap-6 sm:gap-8 items-center">
            <div className="col-span-4 xl:col-span-4 flex flex-col items-start justify-start md:order-2 lg:col-span-8">
              {article.text.map(text => (
                <p key={text.id} className="my-4 font-medium">
                  {text}
                </p>
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
        </Layout>
      </section>
    </>
  );
}

export default ArticlePage;
