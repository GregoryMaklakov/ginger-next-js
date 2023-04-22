import Head from "next/head";
import Image from "next/image";
import HeroArt from "../../public/images/profile/hero-art.png";
import {
  Layount,
  AnimatedText,
  Icon,
  BooksyButton,
  NailPolishIcon,
} from "../components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginger Beauty Zone</title>
        <meta name="description" content="Teren Twojego Piękna" />
      </Head>
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layount className="pt-0 pb-16 md:pt-16 sm:pt-0">
          <div className="w-full flex items-center justify-between lg:flex-col">
            <div className="w-1/2 relative -top-[30px] p-14 lg:hidden">
              <Image
                src={HeroArt}
                alt="HeroImage"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                className="flex items-center justify-center rounded-md -z-10 md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Twój wygląd nigdy nie był piękniejszy"
                className="!text-6xl text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium lg:text-center">
                Wiemy, jak ważne jest dla Was posiadanie niezawodnego miejsca, w
                którym możecie uporządkować nie tylko swoje paznokcie, ale także
                swoje myśli. Ginger to prawdziwie klimatyczne i uduchowione
                miejsce, które pomoże Wam się zrelaksować, naładować pięknem i
                dobrymi wibracjami.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light"
                  href="/dummy.pdf"
                  target="_blank"
                  download={true}
                >
                  Odbierz zniżkę 30%
                  <Icon name="linkArrow" size={24} className="ml-2" />
                </Link>
                <Link
                  className="flex items-center text-dark ml-4 font-medium capitalize underline text-lg dark:text-light"
                  href="tel:48510001772"
                >
                  Zadzwoń
                </Link>
              </div>
            </div>
          </div>
        </Layount>
        <BooksyButton />
        <div className="absolute inline-block right-8 bottom-8">
          <NailPolishIcon />
        </div>
      </main>
    </>
  );
}
