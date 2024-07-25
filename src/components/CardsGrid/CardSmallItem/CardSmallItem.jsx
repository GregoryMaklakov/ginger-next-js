import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "../../Icons";
import { CursorContext, socialLink } from "../../../lib";

export function CardSmallItem() {

    const { setHoveringLink } = useContext(CursorContext);


    const handleMouseEnterLink = () => {
        setHoveringLink(true);
    };
    const handleMouseLeaveLink = () => {
        setHoveringLink(false);
    };

    const AnimatedLink = motion(Link);

    return (
        <div className="flex items-center justify-center flex-col rounded-3xl flex-nowrap relative overflow-hidden h-full flex-grow flex-shrink-0 bg-cardGrey">
            <div className="flex items-start justify-start flex-row flex-grow flex-nowrap flex-shrink-0 w-full p-8 relative overflow-hidden">
                <div className="flex flex-col items-start p-0 justify-end h-min gap-[6px] relative w-full">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-lg text-dark dark:text-light">Read an audio message transcription</h3>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="text-sm text-dark/75 dark:text-light/75">Audio messages are now transcribed, so you can read them in the moment and listen later.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-nowrap">
                <div className="flex items-center justify-center overflow-hidden p-0 w-full h-3/4 flex-nowrap">
                    <Image
                        alt="Card dialog window"
                        src="/images/home/cardsGrid/grid-01.png"
                        width={400}
                        height={400}
                        className="w-full"
                        loading="lazy"
                    />
                </div>
                <div className="grid place-content-center">
                    <AnimatedLink
                        className="inline-flex"
                        href={socialLink.booksy}
                        target="_blank"
                        whileTap={{ scale: 0.9 }}
                        onMouseEnter={handleMouseEnterLink}
                        onMouseLeave={handleMouseLeaveLink}
                    >
                        <Icon name="booksy" size={140} className='fill-current text-dark dark:text-light' />
                    </AnimatedLink>
                </div>
            </div>
        </div>
    )
}

