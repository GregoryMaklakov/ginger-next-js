import { useState, useEffect, useRef } from 'react';

import { AnimatedText, Layount } from "@/components"
import Head from "next/head";
import Image from "next/image";
import KateImage from "../../../public/ginger/images/KateDark.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedValue = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}> </span>
    )
}

export default function About() {

    const [daysSince, setDaysSince] = useState(0);

    useEffect(() => {
        const decemberSecond = new Date('December 02, 2022');
        const today = new Date();
        const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        setDaysSince(daysDiff);
    }, []);

    return (
        <>
            <Head>
                <title>O nas | Ginger</title>
                <meta name="description" content="Teren Twojego Piękna" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layount className="pt-16">
                    <AnimatedText text="Dowiedz się więcej o salonie piękności Ginger" className="mb-16" />
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

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8" >
                            <span className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image src={KateImage} alt="KateImage" className="w-full h-auto rounded-2xl" />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    <AnimatedValue value={400} />+
                                </span>
                                <h2 className='text-xl text-end font-medium capitalize text-dark/75'>zadowolonych klientów</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    <AnimatedValue value={daysSince} />
                                </span>
                                <h2 className='text-xl text-end font-medium capitalize text-dark/75'>dni pracy salonu</h2>
                            </div >
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold '>
                                    <AnimatedValue value={54} />+
                                </span>
                                <h2 className='text-xl text-end font-medium capitalize text-dark/75'>łączny staż pracy zespołu</h2>
                            </div>
                        </div>
                    </div>
                </Layount>
            </main>
        </>
    );
}
