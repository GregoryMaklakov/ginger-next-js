import Head from "next/head";
import { cardGridDataEmployees } from "../../lib";
import {
    AnimatedText,
    CardSmallItem,
    EmployeeCardPosition,
    Layout,
    TertiaryStoryText,
    TransitionPageEffect,
} from "../../components";

export default function Work() {
    return (
        <>
            <Head>
                <title>Oferty pracy | Ginger</title>
                <meta
                    name="description"
                    content="Dołącz do zespołu Ginger Beauty Zone w Warszawie i stań się częścią naszego profesjonalnego zespołu. Oferujemy doskonałe warunki pracy i możliwości rozwoju."
                />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content="Oferty pracy | Ginger Beauty Zone" />
                <meta property="og:url" content="https://ginger-beauty-zone.com/work" />
                <meta property="og:image" content="/meta-tag.jpg" />
                <meta
                    property="og:description"
                    content="Dołącz do zespołu Ginger Beauty Zone w Warszawie i stań się częścią naszego profesjonalnego zespołu. Oferujemy doskonałe warunki pracy i możliwości rozwoju."
                />
                <meta
                    property="business:contact_data:street_address"
                    content="278 Grochowska"
                />
                <meta property="business:contact_data:locality" content="Warsaw" />
                <meta property="business:contact_data:postal_code" content="03-841" />
                <meta property="business:contact_data:country_name" content="Poland" />
                <meta
                    name="description"
                    content="Obejrzyj naszą galerię zdjęć, aby zobaczyć, jakie efekty osiągamy w naszym salonie Ginger Beauty Zone."
                />
            </Head>
            <TransitionPageEffect />
            <main className="flex flex-col w-full items-center justify-center lg:pt-24">
                <Layout className="">
                    <div className="flex flex-col items-center justify-center">
                        <TertiaryStoryText
                            className="font-medium py-12"
                            textData="Make your career"
                            gradientWord="career"
                        />
                        <AnimatedText
                            text="Dołącz do naszego zespołu!"
                            className="mb-24 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12 font-bold text-8xl"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-2 max-w-7xl p-0 w-3/4 xl:w-full">
                            {cardGridDataEmployees.map(item => (
                                <CardSmallItem key={item.id} {...item} />
                            ))}
                        </div>
                        <TertiaryStoryText
                            className="font-medium py-12"
                            textData="Otwarte stanowiska"
                            gradientWord="stanowiska"
                        />
                        <AnimatedText
                            text="Przeglądaj otwarte stanowiska i dowiedz się więcej o pracy w Ginger Beauty Zone."
                            className="mb-24 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12 font-bold text-8xl"
                        />
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-2 max-w-7xl p-0 w-3/4 xl:w-full">
                            <EmployeeCardPosition
                                href="/"
                                title="Manikiurzystka - Stylistka paznokci"
                                gradientWord="Stylistka"
                                description="Pełny etat"
                            />
                            <EmployeeCardPosition
                                href="/"
                                title="Manikiurzystka - Stylistka paznokci"
                                gradientWord="Stylistka"
                                description="Pełny etat"
                                disabled
                            />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    );
}
