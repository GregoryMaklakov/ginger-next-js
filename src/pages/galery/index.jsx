import Head from "next/head";
import { Layount } from "../../components";

export default function Galery() {
    return (
        <>
            <Head>
                <title>Galery | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna" />
            </Head>
            <main>
                <Layount>
                    Galery
                </Layount>
            </main>
        </>
    )
}