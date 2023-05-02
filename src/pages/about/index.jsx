import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  AnimatedText,
  AnimatedValue,
  Layount,
  FrameWhiteBlack,
  TransitionPageEffect,
} from '../../components';
import BlackLady from '../../../public/ginger/images/black-lady.webp';
import KateImage from '../../../public/ginger/images/KateDark22.png';

export default function About() {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const decemberSecond = new Date('December 02, 2022');
    const today = new Date();
    const timeDiff = Math.abs(today.getTime() - decemberSecond.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    setDaysSince(daysDiff);
  }, []);

  const motionSettings = {
    initial: { y: 50 },
    whileInView: { y: 0 },
    transition: { duration: 1, type: 'spring', delay: 0.1 },
  };

  const motionFrameWhiteBlack = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, type: 'spring', delay: 0.1 },
    viewport: { once: true },
  };

  return (
    <>
      <Head>
        <title>O nas | Ginger</title>
        <meta name="description" content="Teren Twojego Piękna" />
      </Head>
      <TransitionPageEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layount className="pt-8">
          <AnimatedText
            text="Dowiedz się więcej o salonie piękności Ginger"
            className="mb-16 xl:text-6xl lg:text-5xl xs:text-3xl xs:mb-12"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 items-center">
            <div className="col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
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

            <FrameWhiteBlack className="col-span-3 xl:col-span-4 min-h-full md:order-1 md:col-span-8 md:min-h-[450px]">
              <Image
                src={BlackLady}
                alt="BlackLady"
                className="absolurte -z-1 p-2 rounded-2xl w-full h-auto"
                style={{ objectFit: 'cover' }}
                fill
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </FrameWhiteBlack>
            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between h-full md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue value={400} className="dark:text-light/75 " />+
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  zadowolonych klientów
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue
                    value={daysSince}
                    className="dark:text-light/75"
                  />
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  dni pracy salonu
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center  xl:items-center">
                <span className="inline-block text-7xl font-bold dark:text-light/75 md:text-4xl xs:text-2xl">
                  <AnimatedValue value={54} className="dark:text-light/75" /> +
                </span>
                <h2 className="text-xl text-end font-medium capitalize text-dark/75 dark:text-light/75 lg:text-center xs:text-xs xs:mr-1">
                  łączny staż pracy zespołu
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full my-16 mx-auto">
            <motion.h3
              {...motionSettings}
              className="text-8xl font-bold text-center lg:text-5xl xs:text-3xl "
            >
              Nasi specjaliści od piękna
            </motion.h3>
            <div className="flex flex-col items-center justify-center w-full my-16">
              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full">
                  <div className="w-1/3 sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:mb-6 sm:max-w-full z-10 relative"
                    />
                  </div>
                  <div className="flex flex-col w-2/3 pl-8 lg:max-h-60 overflow-y-auto sm:w-full sm:pl-0">
                    <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                      Kate
                    </h4>
                    <h5 className="text-lg font-bold text-primary/75">
                      Manicurist
                    </h5>
                    <p className="my-4 font-medium xs:text-sm">
                      Mam na imię Katarzyna, od 10 lat pracuję w branży
                      kosmetycznej i mogę z całą pewnością powiedzieć, że
                      manicure to trochę więcej niż malowanie paznokci. To
                      prawdziwa magia dla duszy, fajny anty-stres, a czasem
                      zbawienna sesja psychoterapeutyczna. Zależało mi, aby
                      stworzyć dla Was ciepłe i przytulne miejsce, gdzie
                      będziecie mogli poczuć się komfortowo i pięknie.
                    </p>
                    <p className="font-medium xs:text-sm">
                      Trzy lata temu, kiedy przyjechałam do Polski z Ukrainy,
                      widziałam jak tutejsze dziewczyny (mężczyźni zresztą też)
                      lubią bardzo spersonalizowaną obsługę, kiedy kosmetyczka
                      zna Twoje osobiste preferencje - jaką kawę pijesz,
                      podkręcić głośniej muzykę, ściszyć ją bądź może całkowicie
                      wyłączyć. Dokładnie taki rodzaj spersonalizowanej obsługi
                      wraz z najwyższą jakością usług kosmetycznych oferuję w
                      Ginger
                    </p>
                  </div>
                </FrameWhiteBlack>
              </motion.div>

              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full">
                  <div className="flex flex-col w-2/3 pr-8 lg:max-h-60 overflow-y-auto sm:w-full sm:pr-0 sm:order-2">
                    <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                      Jana
                    </h4>
                    <h5 className="text-lg font-bold text-primary/75">
                      Manicurist
                    </h5>
                    <p className="my-4 font-medium xs:text-sm">
                      Oto nasza mistrzynia manicure i pedicure - Jana! Jana
                      pracuje w branży od ponad 3 lat i jest ekspertką w
                      zakresie pielęgnacji paznokci i stóp. Jej kreatywność i
                      zmysł artystyczny są wspaniałym dodatkiem do jej już
                      imponujących umiejętności w zakresie hybrydowych
                      stylizacji paznokci.
                    </p>
                    <p className="font-medium xs:text-sm">
                      Jana jest ciepłą i uśmiechniętą osobą, która zawsze stara
                      się stworzyć relaksującą i przyjemną atmosferę podczas
                      zabiegu. Zawsze słucha potrzeb swoich klientek i dokładnie
                      dopasowuje każdy zabieg do ich indywidualnych potrzeb. Jej
                      precyzja i dbałość o szczegóły sprawiają, że jej prace są
                      prawdziwymi dziełami sztuki. Jeśli szukasz profesjonalnej
                      i doświadczonej mistrzyni manicure i pedicure, to Jana
                      jest właśnie dla Ciebie!
                    </p>
                  </div>
                  <div className="w-1/3 sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:mb-6 sm:max-w-full"
                    />
                  </div>
                </FrameWhiteBlack>
              </motion.div>

              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full">
                  <div className="w-1/3 sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:mb-6 sm:max-w-full"
                    />
                  </div>
                  <div className="flex flex-col w-2/3 pl-8 lg:max-h-60 overflow-y-auto sm:w-full sm:pl-0">
                    <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                      Maria
                    </h4>
                    <h5 className="text-lg font-bold text-primary/75">
                      Manicurist
                    </h5>
                    <p className="my-4 font-medium xs:text-sm">
                      Oto Maria - nasza specjalistka od manicure i pedicure. Z
                      pasją i zaangażowaniem zajmuje się pielęgnacją dłoni i
                      stóp oraz wykonuje najmodniejsze trendy w dziedzinie
                      stylizacji paznokci. Maria posiada nie tylko bogate
                      doświadczenie, ale również wiedzę z zakresu kosmetyki,
                      dzięki czemu jest w stanie dopasować odpowiednie produkty
                      i zabiegi do indywidualnych potrzeb każdej klientki.
                    </p>
                    <p className="font-medium xs:text-sm">
                      Jej praca to nie tylko profesjonalne wykonywanie zabiegów,
                      ale również dbałość o komfort i zadowolenie klientki.
                      Zawsze stara się wysłuchać i doradzić najlepsze
                      rozwiązania dla danego problemu. Dzięki temu każda wizyta
                      u Marii to nie tylko poprawa kondycji paznokci czy stóp,
                      ale również relaks i chwila dla siebie.
                    </p>
                  </div>
                </FrameWhiteBlack>
              </motion.div>
              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full">
                  <div className="flex flex-col w-2/3 pr-8 lg:max-h-60 overflow-y-auto sm:w-full sm:pr-0 sm:order-2">
                    <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                      Liza
                    </h4>
                    <h5 className="text-lg font-bold text-primary/75">
                      Makeup artist | Brow artist | Lash stylist
                    </h5>
                    <p className="my-4 font-medium xs:text-sm">
                      Oto Liza - nasza specjalistka w dziedzinie makijażu,
                      laminacji, stylizacji brwi i rzęs. Młoda i pełna energii,
                      zawsze na bieżąco ze światowymi trendami, doskonale wie,
                      jak podkreślić naturalne piękno każdej kobiety. Liza nie
                      tylko wykonuje makijaż, ale również pomaga w doborze
                      odpowiednich kosmetyków i pielęgnacji skóry. Dzięki swojej
                      wiedzy i umiejętnościom potrafi dobrać odpowiedni kolor
                      podkładu czy cienia do powiek, aby uzyskać idealny efekt.
                    </p>
                    <p className="font-medium xs:text-sm">
                      Jej praca to nie tylko perfekcyjne wykonanie makijażu, ale
                      również dbałość o detale, takie jak kształtowanie brwi czy
                      stylizacja rzęs. Każda klientka zostaje obsłużona
                      indywidualnie, z uwzględnieniem jej potrzeb i oczekiwań.
                      Liza to nie tylko specjalistka w swoim fachu, ale również
                      osoba bardzo sympatyczna i pomocna. Jej pozytywne
                      podejście do życia i entuzjazm sprawiają, że wizyta u niej
                      to nie tylko zabieg kosmetyczny, ale również miła chwila
                      spędzona w towarzystwie profesjonalistki.
                    </p>
                  </div>
                  <div className="w-1/3 sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:mb-6 sm:max-w-full"
                    />
                  </div>
                </FrameWhiteBlack>
              </motion.div>
              <motion.div {...motionFrameWhiteBlack}>
                <FrameWhiteBlack className="flex min-h-full p-16 items-center justify-between mb-16 lg:max-h-[444px] overflow-hidden sm:flex-col sm:max-h-full">
                  <div className="w-1/3 sm:w-fit z-0 rounded-full bg-dark dark:bg-primary/75 relative overflow-hidden">
                    <Image
                      src={KateImage}
                      alt="KateImage"
                      className="h-auto w-full max-w-md rounded-2xl object-cover sm:mb-6 sm:max-w-full"
                    />
                  </div>
                  <div className="flex flex-col w-2/3 pl-8 lg:max-h-60 overflow-y-auto sm:w-full sm:pl-0">
                    <h4 className="text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                      Luda
                    </h4>
                    <h5 className="text-lg font-bold text-primary/75">
                      Masażystka
                    </h5>
                    <p className="my-4 font-medium xs:text-sm">
                      Nasza masażystka to osoba z wykształceniem medycznym oraz
                      ponad 30-letnim doświadczeniem w pracy. Jest to
                      profesjonalistka, która doskonale zna się na swoim fachu i
                      potrafi zaspokoić potrzeby każdego klienta. Jej
                      umiejętności i wiedza medyczna pozwalają jej na
                      wykonywanie różnorodnych masaży, w tym leczniczych,
                      relaksacyjnych i sportowych, zapewniając najlepsze efekty
                      terapeutyczne. Nasza masażystka jest również bardzo
                      cierpliwa i zawsze stara się zrozumieć potrzeby klientów,
                      co sprawia, że jest bardzo ceniona przez naszych klientów.
                    </p>
                  </div>
                </FrameWhiteBlack>
              </motion.div>
            </div>
          </div>
        </Layount>
      </main>
    </>
  );
}
