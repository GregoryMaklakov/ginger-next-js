import { PropTypes } from "prop-types";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
        positions: isInView ? 1 : 0,
    };

    const positions = [
        { top: "-10%", left: "-50%" }, // 1
        { top: "-7%", right: "-44%" }, // 2
        { top: "22%", left: "-42%" }, // 3
        { top: "31%", right: "-53%" }, // 4
        { bottom: "-16%", left: "-9%" }, // 5
        { bottom: "21%", left: "-29%" }, // 6
        { bottom: "0%", right: "-40%" }, // 7
        { bottom: "-12%", right: "0%", zIndex: 2 }, // 8
        { bottom: "-32%", right: "23%" }, // 9
        { bottom: "-10%", left: "-52%", zIndex: 2 }, // 10
        { bottom: "-28%", right: "-45%" }, // 11
    ];

    // remove Draggable on touch screen
    const [isDraggable, setIsDraggable] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 || window.matchMedia("(pointer: coarse)").matches) {
                setIsDraggable(false);
            } else {
                setIsDraggable(true);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className={`${className} text-center relative `}>
                <TertiaryStoryText

                    className="leading-[4.25rem] lg:leading-10 z-20 relative"
                    textData={textData}
                    gradientWord={gradientWord}
                />
                <ul ref={ref} className="reviews lg:flex lg:flex-col lg:gap-2 lg:items-center lg:mt-16 " >
                    {data.map((item, index) => (
                        <motion.li
                            key={item.id}
                            animate={reviewCardAnimation}
                            transition={{ duration: 0.25, delay: index * 0.25, }}
                            className="absolute ease-ease-OutCubic lg:static"
                            {...(isDraggable && {
                                drag: true,
                                dragConstraints: { left: 30, right: 30, top: 30, bottom: 30 },
                                dragElastic: 0.2,
                                dragTransition: { bounceStiffness: 600, bounceDamping: 20 }
                            })}

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
                </ul>

            </div>
            <StoryLine year={year} className="pt-36 lg:hidden" />
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
