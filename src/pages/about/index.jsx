import { useState, useEffect } from "react";
import {
    AnimatedText,
    AnimatedValue,
    Layount,
    FrameWhiteBlack,
} from "@/components";
import Head from "next/head";
import Image from "next/image";

import BlackLady from "../../../public/ginger/images/black-lady.jpg";
import KateImage from "../../../public/ginger/images/KateDark.png";

import { motion } from "framer-motion";

export default function About() {
    const [daysSince, setDaysSince] = useState(0);

    useEffect(() => {
        const decemberSecond = new Date("December 02, 2022");
        const today = new Date();
        const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setDaysSince(daysDiff);
    }, []);

    const motionSettings = {
        initial: { y: 50 },
        whileInView: { y: 0 },
        transition: { duration: 1, type: "spring", delay: 0.1 },
    };

    const motionFrameWhiteBlack = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1, type: "spring", delay: 0.1 }
    };

    return (
        <>
            <Head>
                <title>O nas | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layount className="pt-8">
                    <AnimatedText
                        text="Dowiedz się więcej o salonie piękności Ginger"
                        className="mb-16"
                    />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                                O nas
                            </h2>
                            <p className="font-medium">
                                Witaj w naszym nowym salonie piękna w Warszawie! Nasze usługi to
                                coś więcej niż tylko zabiegi kosmetyczne - to sposób na odkrycie
                                piękna, który drzemie w Tobie. Nasz salon to miejsce, w którym
                                używamy tylko najlepszych materiałów, dbamy o pełną sterylizację
                                narzędzi, a nasz personel wychodzi naprzeciw indywidualnym
                                potrzebom każdego klienta.
                            </p>
                            <p className="my-4 font-medium">
                                Jesteśmy dumni z naszego doświadczenia i zaangażowania w pracę,
                                a nasze usługi obejmują pełen zakres zabiegów manicure i
                                pedicure. Oferujemy również masaże, stylizację brwi i rzęs oraz
                                makijaż.
                            </p>
                            <p className="font-medium">
                                W naszym salonie każdy klient jest traktowany indywidualnie i z
                                pełnym zaangażowaniem. Jest to miejsce, w którym każdy może
                                poczuć się wyjątkowo i zrelaksować się w przyjemnej atmosferze.
                                Zapraszamy do naszego prawdziwego miejsca piękna w Warszawie!
                            </p>
                        </div>

                        <FrameWhiteBlack className="col-span-3 h-4/5">
                            <Image
                                src={BlackLady}
                                alt="BlackLady"
                                className="absolurte -z-1 p-2 rounded-2xl"
                                style={{ objectFit: 'cover' }} layout="fill"
                            />
                        </FrameWhiteBlack>
                        <div className="col-span-2 flex flex-col items-end justify-between">
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold ">
                                    <AnimatedValue value={400} />+
                                </span>
                                <h2 className="text-xl text-end font-medium capitalize text-dark/75">
                                    zadowolonych klientów
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold ">
                                    <AnimatedValue value={daysSince} />
                                </span>
                                <h2 className="text-xl text-end font-medium capitalize text-dark/75">
                                    dni pracy salonu
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center">
                                <span className="inline-block text-7xl font-bold ">
                                    <AnimatedValue value={54} /> +
                                </span>
                                <h2 className="text-xl text-end font-medium capitalize text-dark/75">
                                    łączny staż pracy zespołu
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full my-16 mx-auto">
                        <motion.div
                            {...motionSettings}
                            className="text-8xl font-bold text-center"
                        >
                            Nasi specjaliści od piękna
                        </motion.div>
                        <div className="flex flex-col items-center justify-center w-full my-16">

                            <motion.div {...motionFrameWhiteBlack}>
                                <FrameWhiteBlack
                                    className="flex min-h-full p-32 items-center justify-between mb-16">
                                    <div className="w-1/3">
                                        <Image
                                            src={KateImage}
                                            alt="KateImage"
                                            className="h-auto w-full max-w-md rounded-2xl object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col w-2/3 p-8">
                                        <h4 className="text-lg font-bold uppercase text-dark/75">Kate</h4>
                                        <p className="my-4 font-medium">
                                            Mam na imię Katarzyna, od 10 lat pracuję w branży
                                            kosmetycznej i mogę z całą pewnością powiedzieć, że manicure
                                            to trochę więcej niż malowanie paznokci. To prawdziwa magia
                                            dla duszy, fajny anty-stres, a czasem zbawienna sesja
                                            psychoterapeutyczna. Zależało mi, aby stworzyć dla Was
                                            ciepłe i przytulne miejsce, gdzie będziecie mogli poczuć się
                                            komfortowo i pięknie.
                                        </p>
                                        <p className="font-medium">
                                            Trzy lata temu, kiedy przyjechałam do Polski z Ukrainy, widziałam jak tutejsze dziewczyny (mężczyźni zresztą też) lubią bardzo spersonalizowaną obsługę, kiedy kosmetyczka zna Twoje osobiste preferencje - jaką kawę pijesz, podkręcić głośniej muzykę, ściszyć ją bądź może całkowicie wyłączyć. Dokładnie taki rodzaj spersonalizowanej obsługi wraz z najwyższą jakością usług kosmetycznych oferuję w Ginger
                                        </p>
                                    </div>
                                </FrameWhiteBlack>
                            </motion.div>
                            <motion.div {...motionFrameWhiteBlack}>
                                <FrameWhiteBlack className="flex min-h-full p-32 items-center justify-between mb-16">
                                    <div className="flex flex-col w-2/3 p-8">
                                        <h4 className="text-lg font-bold uppercase text-dark/75">Jana</h4>
                                        <p className="my-4 font-medium">
                                            Oto nasza mistrzynia manicure i pedicure - Jana! Jana pracuje w branży od ponad 3 lat i jest ekspertką w zakresie pielęgnacji paznokci i stóp. Jej kreatywność i zmysł artystyczny są wspaniałym dodatkiem do jej już imponujących umiejętności w zakresie hybrydowych stylizacji paznokci.
                                        </p>
                                        <p className="font-medium">
                                            Jana jest ciepłą i uśmiechniętą osobą, która zawsze stara się stworzyć relaksującą i przyjemną atmosferę podczas zabiegu. Zawsze słucha potrzeb swoich klientek i dokładnie dopasowuje każdy zabieg do ich indywidualnych potrzeb. Jej precyzja i dbałość o szczegóły sprawiają, że jej prace są prawdziwymi dziełami sztuki. Jeśli szukasz profesjonalnej i doświadczonej mistrzyni manicure i pedicure, to Jana jest właśnie dla Ciebie!
                                        </p>
                                    </div>
                                    <div className="w-1/3">
                                        <Image
                                            src={KateImage}
                                            alt="KateImage"
                                            className="h-auto w-full max-w-md rounded-2xl object-cover"
                                        />
                                    </div>
                                </FrameWhiteBlack>
                            </motion.div>
                            <motion.div {...motionFrameWhiteBlack}>
                                <FrameWhiteBlack className="flex min-h-full p-32 items-center justify-between mb-16">
                                    <div className="w-1/3">
                                        <Image
                                            src={KateImage}
                                            alt="KateImage"
                                            className="h-auto w-full max-w-md rounded-2xl object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col w-2/3 p-8">
                                        <h4 className="text-lg font-bold uppercase text-dark/75">Maria</h4>
                                        <p className="my-4 font-medium">
                                            Oto Maria - nasza specjalistka od manicure i pedicure. Z pasją i zaangażowaniem zajmuje się pielęgnacją dłoni i stóp oraz wykonuje najmodniejsze trendy w dziedzinie stylizacji paznokci. Maria posiada nie tylko bogate doświadczenie, ale również wiedzę z zakresu kosmetyki, dzięki czemu jest w stanie dopasować odpowiednie produkty i zabiegi do indywidualnych potrzeb każdej klientki.
                                        </p>
                                        <p className="font-medium">
                                            Jej praca to nie tylko profesjonalne wykonywanie zabiegów, ale również dbałość o komfort i zadowolenie klientki. Zawsze stara się wysłuchać i doradzić najlepsze rozwiązania dla danego problemu. Dzięki temu każda wizyta u Marii to nie tylko poprawa kondycji paznokci czy stóp, ale również relaks i chwila dla siebie.
                                        </p>
                                    </div>
                                </FrameWhiteBlack>
                            </motion.div>
                            <motion.div {...motionFrameWhiteBlack}>
                                <FrameWhiteBlack className="flex min-h-full p-32 items-center justify-between mb-16">
                                    <div className="flex flex-col w-2/3 p-8">
                                        <h4 className="text-lg font-bold uppercase text-dark/75">Liza</h4>
                                        <p className="my-4 font-medium">
                                            Oto Liza - nasza specjalistka w dziedzinie makijażu, laminacji, stylizacji brwi i rzęs. Młoda i pełna energii, zawsze na bieżąco ze światowymi trendami, doskonale wie, jak podkreślić naturalne piękno każdej kobiety. Liza nie tylko wykonuje makijaż, ale również pomaga w doborze odpowiednich kosmetyków i pielęgnacji skóry. Dzięki swojej wiedzy i umiejętnościom potrafi dobrać odpowiedni kolor podkładu czy cienia do powiek, aby uzyskać idealny efekt.
                                        </p>
                                        <p className="font-medium">
                                            Jej praca to nie tylko perfekcyjne wykonanie makijażu, ale również dbałość o detale, takie jak kształtowanie brwi czy stylizacja rzęs. Każda klientka zostaje obsłużona indywidualnie, z uwzględnieniem jej potrzeb i oczekiwań. Liza to nie tylko specjalistka w swoim fachu, ale również osoba bardzo sympatyczna i pomocna. Jej pozytywne podejście do życia i entuzjazm sprawiają, że wizyta u niej to nie tylko zabieg kosmetyczny, ale również miła chwila spędzona w towarzystwie profesjonalistki.
                                        </p>
                                    </div>
                                    <div className="w-1/3">
                                        <Image
                                            src={KateImage}
                                            alt="KateImage"
                                            className="h-auto w-full max-w-md rounded-2xl object-cover"
                                        />
                                    </div>
                                </FrameWhiteBlack>
                            </motion.div>

                        </div>
                    </div>
                </Layount>
            </main >
        </>
    );
}
