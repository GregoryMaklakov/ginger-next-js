import Head from "next/head";
// import { PropTypes } from 'prop-types';
// import { useEffect } from "react";
// import Lenis from '@studio-freight/lenis'
import { Layout, ParallaxScrollBlock, TransitionPageEffect } from "../../components";
import { galleryData } from "../../lib";

export default function Gallery() {
    // useEffect(() => {
    //     const lenis = new Lenis()

    //     function raf(time) {
    //         lenis.raf(time)
    //         requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    // }, [])

    return (
        <>
            <Head>
                <title>Gallery | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna w Warszawe" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content="Blog | Ginger" />
                <meta property="og:url" content="https://ginger-beauty-zone.com" />
                <meta property="og:image" content="/meta-tag.jpg" />
                <meta property="og:description" content="Znajdź najlepsze usługi paznokciowe w Warszawie w Ginger Beauty Zone. Wybierz spośród manicure hybrydowego, żelowego, pedicure, nail art i wielu innych usług paznokciowych. Dołącz do Manicure Warszawy i ciesz się pięknymi paznokciami!" />
                <meta property="business:contact_data:street_address" content="278 Grochowska" />
                <meta property="business:contact_data:locality" content="Warsaw" />
                <meta property="business:contact_data:postal_code" content="03-841" />
                <meta property="business:contact_data:country_name" content="Poland" />
                <meta name="description" content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone." />
            </Head>
            <TransitionPageEffect />
            <main className="flex w-full items-center justify-center" >
                <Layout className="w-full max-w-[1920px] mx-auto h-full bg-light dark:bg-dark inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 py-10">
                    <div className="min-h-screen" />
                    {galleryData.map((data) => (
                        <ParallaxScrollBlock key={data.id} {...data} />
                    ))}
                </Layout>
            </main>
        </>
    )
}

Gallery.propTypes = {
};
