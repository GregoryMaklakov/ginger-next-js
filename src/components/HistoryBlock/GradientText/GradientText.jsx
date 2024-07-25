import { PropTypes } from "prop-types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function GradientText({ lines, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const lineAnimations = lines.map((line, index) => ({
        y: isInView ? 0 : "100%",
        transition: { delay: 0.45 * index + 0.8, duration: 0.8 },
        lineText: line,
    }));

    return (
        <motion.h5
            ref={ref}
            className={`${className} w-full font-bold capitalize `}
            style={{ WebkitBackgroundClip: "text", color: "transparent" }}
        >
            {lineAnimations.map((animation, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={index} className="overflow-hidden block">
                    <motion.em
                        className="not-italic inline-block pb-2 bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text ease-ease-OutCubic"
                        animate={animation}
                    >
                        {animation.lineText}
                    </motion.em>
                </span>
            ))}
        </motion.h5>
    );
}

GradientText.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
};
