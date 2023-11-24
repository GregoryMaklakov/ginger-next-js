import { PropTypes } from "prop-types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "../../Icons";

export function StoryLine({ year }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const lineAnimation = {
        scaleY: isInView ? 1 : 0,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "backInOut",
        },
    };

    const yearAnimation = {
        y: isInView ? [0, 2, -2, -1, 0] : 0,
        scale: isInView ? 1 : 0,
        transition: {
            duration: 1,
            delay: 0.5,
            ease: "backInOut",
            times: [0, 0.54, 0.8, 1],
        },
    };
    return (
        <div
            ref={ref}
            className="wrapper flex items-center justify-center flex-col"
        >
            <motion.div
                className="line w-[1px] h-[15rem] dark:bg-gradient-to-b dark:from-dark dark:to-light/25 bg-gradient-to-b from-light to-dark/25 mb-6"
                animate={lineAnimation}
            />
            {year && (
                <motion.div
                    animate={yearAnimation}
                    className="year flex items-center justify-center gap-1 rounded-2xl py-1 pl-3 pr-4 dark:bg-light bg-dark"
                >
                    <Icon size={20} name="year" />
                    <div className="dark:text-dark font-bold text-light/75">{year}</div>
                </motion.div>
            )}
        </div>
    );
}

StoryLine.propTypes = {
    year: PropTypes.number,
};
