import Head from "next/head";
import { AnimatedText, Layout, TransitionPageEffect } from "../../components";


export default function Gallery() {
    return (
        <>
            <Head>
                <title>Galery | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna w Warszawe" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content="Gallery | Ginger" />
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
            <section >
                <Layout className="pt-8 max-w-full">
                    <AnimatedText text="Nasza galeria: zobacz nasze prace i czerp inspirację!"
                        className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12" />
                    <h2 className="mb-16 text-2xl font-bold lg:text-5xl xs:text-3xl xs:mb-12 text-dark dark:text-light ">Soon....</h2>
                </Layout>
            </section>
        </>
    )
}