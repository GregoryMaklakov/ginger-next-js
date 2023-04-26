import Head from "next/head";
import { AnimatedText, HorizontalGalery, Layount, TransitionPageEffect } from "../../components";


export default function Galery() {

    return (
        <>
            <Head>
                <title>Galery | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna" />
            </Head>
            <TransitionPageEffect />
            <main>
                <Layount className="pt-8">
                    <AnimatedText text="Nasza galeria: zobacz nasze prace i czerp inspirację!" />
                </Layount>
                <HorizontalGalery />
            </main>
        </>
    )
}