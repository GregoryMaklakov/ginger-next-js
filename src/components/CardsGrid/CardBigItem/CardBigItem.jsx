import Image from "next/image";

export function CardBigItem() {
  return (
    <div className="flex items-center justify-center bg-cardGrey rounded-3xl flex-none flex-row flex-nowrap gap-0 h-[600px] max-w-7xl overflow-hidden p-0 relative w-3/4 xl:w-full">
      <div className="flex items-center flex-row justify-center flex-grow flex-shrink-0 flex-nowrap gap-[10px] h-full overflow-hidden p-12 relative w-1">
        <div className=" flex items-start justify-end flex-col flex-nowrap gap-2 h-min p-0 overflow-hidden relative">
          <div className="flex flex-col justify-start flex-shrink-0">
            <h3 className="text-lg text-dark dark:text-primary font-medium">Read an audio message transcription</h3>
          </div>
          <div className="flex flex-col justify-start flex-shrink-0">
            <p className="text-4xl text-dark/75 dark:text-light/75">Audio messages are now transcribed, so you can read them in the moment and listen later.</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-none flex-row flex-nowrap gap-[10px] h-full justify-center overflow-hidden p-0 w-1/2 relative">
        <div className="flex items-center justify-center flex-none flex-col flex-nowrap gap-0 overflow-visible p-0 bottom-11 absolute transform translate-x-12">
          <Image
            alt="Card dialog window"
            src="/images/home/cardsGrid/grid-big.png"
            width={400}
            height={400}
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

