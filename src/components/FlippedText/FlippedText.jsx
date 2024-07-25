import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";


export function FlippedText({ textVariants }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === textVariants.length - 1 ? 0 : prevIndex + 1
            );
        }, 3500);

        return () => clearInterval(interval);
    }, [textVariants]);

    return (
        <div className="inline-flex items-center justify-center w-80 2xl:w-60 xl:w-40 text-dark/75 dark:text-light/75 border-solid border-2 rounded-[2rem] py-3 px-4 border-primary normal-case dark:bg-dark bg-light">
            <FlipItem key={textVariants[currentTextIndex]} text={textVariants[currentTextIndex]} />
        </div>
    );
}

FlippedText.propTypes = {
    textVariants: PropTypes.arrayOf(PropTypes.string).isRequired,
};


const DURATION = 0.5;
const STAGGER = 0.025;

function FlipItem({ text }) {
    return (
        <motion.div
            className="relative inline-block overflow-hidden whitespace-nowrap "
            style={{ lineHeight: 0.75 }}
            initial="initial"
            animate="animate"
        >
            <div>
                {text.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                                opacity: 0
                            },
                            animate: {
                                y: "-100%",
                                opacity: 1
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0">
                {text.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                                opacity: 0,
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

FlipItem.propTypes = {
    text: PropTypes.string.isRequired,
};

