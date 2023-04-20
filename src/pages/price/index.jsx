import { AnimatedText, FrameWhiteBlack, GingerButton, Layount, PriceList } from "@/components";
import BlackLadyPrice from "../../../public/ginger/images/2.jpg";

import Image from "next/image";

export default function Price() {
    return (
        <Layount className='py-2'>
            <FrameWhiteBlack
                className="flex min-h-full p-16 items-center justify-between mb-16 bg-cover relative overflow-hidden">
                <Image src={BlackLadyPrice} alt="BlackLadyPrice" style={{ objectFit: 'cover' }} layout="fill" className="absolurte -z-1 p-2 rounded-2xl" />
                <div className="w-1/3">
                    <GingerButton href="/" size={240} className="z-10" color="white" />
                </div>
                <div className="flex flex-col w-2/3 p-8">
                    <AnimatedText className='!text-4xl pt-8 text-left z-10 text-light' text={`W naszym salonie zawsze obowiązuje system zbierania punktów rabatowych. Za każdą ósmą usługę otrzymujesz ${30} % zniżki`} />
                </div>
            </FrameWhiteBlack>
            <PriceList />
        </Layount>
    )
}
