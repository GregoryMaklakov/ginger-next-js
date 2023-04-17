
import Head from "next/head";
import Image from "next/image";
import HeroPictures from "../../public/images/profile/developer-pic-1.png";
import { Layount, AnimatedText, Icon } from "../components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ginger Beauty Zone</title>
        <meta name="description" content="Teren Twojego Piękna" />
      </Head>
      <main className="flex items-center w-full min-h-screen text-dark">
        <Layount className="pt-0">
          <div className="w-full flex items-center justify-between">
            <div className="w-1/2">
              <Image src={HeroPictures} alt="HeroImage" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText text='Twój wygląd nigdy nie był piękniejszy' className='!text-6xl text-left' />
              <p className="my-4 text-base font-medium">
                Wiemy, jak ważne jest dla Was posiadanie niezawodnego miejsca, w którym możecie uporządkować nie tylko swoje paznokcie, ale także swoje myśli. Ginger to prawdziwie klimatyczne i uduchowione miejsce, które pomoże Wam się zrelaksować, naładować pięknem i dobrymi wibracjami.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" href='/dummy.pdf' target="_blank" download={true}>Odbierz zniżkę 30%
                  <Icon name='linkArrow' className='w-6 ml-2' />
                </Link>
                <Link className="flex items-center text-dark ml-4 font-medium capitalize underline text-lg" href='tel:48510001772'>Zadzwoń</Link>
              </div>
            </div>
          </div>
        </Layount>
      </main>
    </>
  );
}
