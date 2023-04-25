import Head from "next/head";
import { Layount, TransitionPageEffect } from "../../components";

export default function Galery() {
    return (
        <>
            <Head>
                <title>Galery | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna" />
            </Head>
            <TransitionPageEffect />
            <main>
                <Layount>
                    <h1 className="text-2xl font-bold text-dark dark:text-light">Soon......</h1>
                </Layount>
            </main>
        </>
    )
}