import { AnimatedText, Layount, PriceList } from "@/components";

export default function Price() {
    return (
        <Layount className='py-2'>
            <AnimatedText className='!text-6xl pt-8' text={`W naszym salonie zawsze obowiązuje system zbierania punktów rabatowych. Za każdą ósmą usługę otrzymujesz ${30} % zniżki`} />
            <PriceList />
        </Layount>
    )
}
