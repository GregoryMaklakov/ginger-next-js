/* eslint-disable react/no-array-index-key */
import { PropTypes, } from "prop-types";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { FrameWhiteBlack } from "../../FrameWhiteBlack";


function Letter({ letter, scrollYProgress, }) {
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [0, Math.floor(Math.random() * -25) + 75],
    );

    return (
        <motion.span style={{ top: y }} className="relative">
            {letter}
        </motion.span>
    );
}

export function ParallaxScrollBlock({ word, title, subtitle, picture1, picture2, picture3 }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        { src: picture1, y: 0 },
        { src: picture2, y: lg },
        { src: picture3, y: md },
    ];

    return (
        <div ref={container} className="mt-24 min-h-screen ">

            <div className="body">
                <motion.h2
                    style={{ y: sm }}
                    className="m-0 mt-3 text-8xl xl:text-6xl lg:text-5xl xs:text-3xl font-bold dark:text-light text-dark capitalize"
                >
                    {title}
                </motion.h2>
                <motion.h3 className="m-0 mt-3 text-8xl xl:text-6xl lg:text-5xl xs:text-3xl font-bold dark:text-light text-dark capitalize">
                    {subtitle}
                </motion.h3>

                <div className="word">
                    <p className="dark:text-light/75 text-2xl xs:text-lg  2xs:text-base font-bold capitalize text-gradientFrom">
                        {word.split("").map((letter, i) => (
                            <Letter
                                key={`l_${i}`}
                                letter={letter}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </p>
                </div>
            </div>
            <div className="flex justify-center relative mt-5vh w-full">
                {images.map(({ src, y }, i) => {
                    let containerClass = "absolute";
                    if (i === 0) {
                        containerClass += " z-10 h-[60vh] w-1/3 md:w-1/2 pt-32";
                    } else if (i === 1) {
                        containerClass +=
                            " left-[40vw] transform -translate-x-1/2 top-[15vh] z-20 h-40vh w-[20vw] md:w-1/3 md:left-[60vw] md:w-1/3 2xl:left-[55vw]";
                    } else {
                        containerClass += " right-[40vw] top-[30vh] z-30 h-[25vh] w-1/5 md:w-1/3 md:right-[60vw] lg:top-[40vw] 2xl:right-[54vw]";
                    }

                    return (
                        <motion.div style={{ y }} key={`i_${i}`} className={containerClass}>
                            <FrameWhiteBlack>
                                <Image
                                    width={500}
                                    height={500}
                                    src={src}
                                    alt="image"
                                    className="object-cover w-full rounded-2xl"
                                />
                            </FrameWhiteBlack>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    );
}

Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    scrollYProgress: PropTypes.instanceOf(Object).isRequired,
};

ParallaxScrollBlock.propTypes = {
    title: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    picture1: PropTypes.string.isRequired,
    picture2: PropTypes.string.isRequired,
    picture3: PropTypes.string.isRequired,
};
