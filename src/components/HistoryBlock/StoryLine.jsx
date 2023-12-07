import { PropTypes } from "prop-types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LogoImage } from "../Logo";

export function StoryLine({ year, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const lineAnimation = {
        scaleY: isInView ? 1 : 0,
        transition: {
            duration: 1,
            delay: 0.8,
            ease: "backInOut",
        },
    };

    const yearWrapperAnimation = {
        y: isInView ? [0, 2, -2, -1, 0] : 0,
        scale: isInView ? 1 : 0,
        transition: {
            duration: 1,
            delay: 1,
            ease: "backInOut",
            times: [0, 0.54, 0.8, 1],
        },
    };

    return (
        <div
            ref={ref}
            className={`${className} flex items-center justify-center flex-col`}
        >
            <motion.div
                className="line w-[1px] h-[15rem] dark:bg-gradient-to-b dark:from-dark dark:to-light/25 bg-gradient-to-b from-light to-dark/25 mb-6 ease-ease-OutCubic"
                animate={lineAnimation}
            />
            {year && (
                <motion.div
                    className="year flex items-center justify-center gap-1 rounded-2xl py-0 pl-3 pr-4 dark:bg-light bg-dark"
                    animate={yearWrapperAnimation}
                >
                    <LogoImage size={32} className="fill-gradientFrom" />
                    <span className="dark:text-dark font-bold text-light/75">{year}</span>
                </motion.div>
            )}
        </div>
    );
}

StoryLine.propTypes = {
    className: PropTypes.string,
    year: PropTypes.number,
};
