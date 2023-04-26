import Head from "next/head";
import { AnimatedText, Layount, TransitionPageEffect } from "../../components";


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
                    <AnimatedText text="Nasza galeria: zobacz nasze prace i czerp inspirację!"
                        className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12" />
                </Layount>
            </main>
        </>
    )
}