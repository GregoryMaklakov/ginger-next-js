import Head from "next/head";
import { AnimatedText, Layount, TransitionPageEffect } from "../../components";


export default function Gallery() {
    return (
        <>
            <Head>
                <title>Galery | Ginger</title>
                <meta name="description" content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone." />
            </Head>
            <TransitionPageEffect />
            <section >
                <Layount className="pt-8 max-w-full">
                    <AnimatedText text="Nasza galeria: zobacz nasze prace i czerp inspirację!"
                        className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12" />
                </Layount>
            </section>
        </>
    )
}