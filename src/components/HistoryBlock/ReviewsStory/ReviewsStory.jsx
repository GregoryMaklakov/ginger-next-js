import { PropTypes } from "prop-types";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { TertiaryStoryText } from "../StoryTexts";
import { ReviewItem, StoryLine } from "..";

export function ReviewsStory({
    textData,
    gradientWord,
    year,
    className,
    data,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const reviewCardAnimation = {
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0,
    };



    const positions = [
        { top: "-10%", left: "-50%" }, // 1
        { top: "-7%", right: "-44%" }, // 2
        { top: "22%", left: "-42%" }, // 3
        { top: "31%", right: "-53%" }, // 4
        { bottom: "-16%", left: "-9%" }, // 5
        { bottom: "21%", left: "-24%" }, // 6
        { bottom: "0%", right: "-40%" }, // 7
        { bottom: "-12%", right: "0%", zIndex: 2 }, // 8
        { bottom: "-32%", right: "23%" }, // 9

    ];

    return (
        <>
            <div ref={ref} className={`${className} text-center relative `}>
                <TertiaryStoryText

                    className="leading-[4.25rem] z-20 relative"
                    textData={textData}
                    gradientWord={gradientWord}
                />
                <ul className="reviews " >
                    <AnimatePresence >
                        {data.map((item, index) => (
                            <motion.li
                                key={item.id}
                                animate={reviewCardAnimation}
                                transition={{ duration: 0.25, delay: index * 0.25 }}
                                className="absolute ease-ease-OutCubic"
                                style={{
                                    top: positions[index] ? positions[index].top : '0%',
                                    left: positions[index] ? positions[index].left : '0%',
                                    right: positions[index] ? positions[index].right : '0%',
                                    bottom: positions[index] ? positions[index].bottom : '0%',
                                    zIndex: positions[index] ? positions[index].zIndex : 0,
                                }}
                            >
                                <ReviewItem {...item} />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
            <StoryLine year={year} className="pt-36" />
            <Link
                className="flex items-center justify-center bg-dark text-light p-2.5 px-6 xs:px-4 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 xs:w-full ease-ease-OutCubic"
                href="https://booksy.com/pro/uk-pl/162702/profile/reviews"
                target="_blank"

            >
                Zobacz więcej opinii
            </Link>
        </>
    );
}

ReviewsStory.propTypes = {
    className: PropTypes.string,
    textData: PropTypes.string,
    gradientWord: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            avatarImg: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            review: PropTypes.string.isRequired,
        }),
    ),
    year: PropTypes.number,
};
