import PropTypes from "prop-types";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StoryLine, TwoCardInOnePicture } from "..";

export function TwoCardInOne({ year, card01, card02, alt }) {

    const ref = useRef(null);
    const isInView = useInView(ref);

    const cardToRight = {
        rotate: isInView ? "-8deg" : 0,
        x: isInView ? "-45%" : 0,
        y: isInView ? "-5%" : 0,
        transition: { delay: 0.5, duration: 0.6 },
    };

    const cardToLeft = {
        rotate: isInView ? "9deg" : 0,
        x: isInView ? "45%" : 0,
        transition: { delay: 0.5, duration: 0.6 },
    };
    return (
        <div>
            <StoryLine year={year} className="mb-24" />
            <div ref={ref} className="cards-wrapper text-center relative">
                <motion.div
                    animate={cardToRight} className="block z-[1] relative ease-ease-OutCubic">
                    <TwoCardInOnePicture
                        image={card01} alt={alt} className="relative  origin-bottom-left"
                    />
                </motion.div>
                <motion.div
                    animate={cardToLeft} className="absolute w-full h-auto top-0 left-0 ease-ease-OutCubic">
                    <TwoCardInOnePicture
                        image={card02} alt={alt} className="block"
                    />
                </motion.div>
            </div>
        </div>
    )
}

TwoCardInOne.propTypes = {
    year: PropTypes.number,
    card01: PropTypes.string.isRequired,
    card02: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};
