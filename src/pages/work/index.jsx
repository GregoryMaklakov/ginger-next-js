import Head from "next/head";
// import { useEffect } from "react";
// import Lenis from '@studio-freight/lenis'
import { TransitionPageEffect, } from "../../components";

export default function Work() {
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
                <title>Oferty pracy</title>
                <meta name="description" content="Dołącz do zespołu Ginger Beauty Zone w Warszawie i stań się częścią naszego profesjonalnego zespołu. Oferujemy doskonałe warunki pracy i możliwości rozwoju." />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content="Oferty pracy | Ginger Beauty Zone" />
                <meta property="og:url" content="https://ginger-beauty-zone.com/work" />
                <meta property="og:image" content="/meta-tag.jpg" />
                <meta property="og:description" content="Dołącz do zespołu Ginger Beauty Zone w Warszawie i stań się częścią naszego profesjonalnego zespołu. Oferujemy doskonałe warunki pracy i możliwości rozwoju." />
                <meta property="business:contact_data:street_address" content="278 Grochowska" />
                <meta property="business:contact_data:locality" content="Warsaw" />
                <meta property="business:contact_data:postal_code" content="03-841" />
                <meta property="business:contact_data:country_name" content="Poland" />
                <meta name="description" content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone." />
            </Head>
            <TransitionPageEffect />
            <main className="flex flex-col w-full items-center justify-center" />



        </>
    )
}

