import Head from "next/head";
import { AnimatedText, Layount, TransitionPageEffect } from "../../components";


export default function Gallery() {
    return (
        <>
            <Head>
                <title>Galery | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna" />
            </Head>
            <TransitionPageEffect />
            <main data-scroll-container>
                <Layount className="pt-8 max-w-full">
                    <AnimatedText text="Nasza galeria: zobacz nasze prace i czerp inspirację!" />
                </Layount>
            </main>
        </>
    )
}