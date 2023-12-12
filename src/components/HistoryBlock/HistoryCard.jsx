import PropTypes from "prop-types";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatedText } from "../AnimatedText";
import { StoryLine } from ".";
import { aboutHistory } from "../../lib";

const FramerHistoryImage = motion(Image);

export function HistoryCard({ image, title, subtitle, className, year }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [isHovered, setIsHovered] = useState(false);


    const cardAnimation = {
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.85,
        borderRadius: isInView ? "20%" : "0%",
        y: isInView ? 0 : -50,
        transition: { delay: 0.5, duration: 1 },
    };

    const subtitleAnimation = {
        y: isInView ? 1 : 0,
        opacity: isInView ? 1 : 0,
        transition: {
            duration: 1,
            delay: 1,
        },
    };

    const handleLinkHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <section className="card-container dark:text-light block w-full">
            <div ref={ref} className="image-container h-auto relative w-full">
                <motion.div
                    className={`${className} max-w-[43vw] md:max-w-full block mx-auto rounded-3xl overflow-hidden m-6`}
                >
                    <FramerHistoryImage
                        className="max-w-[43vw] md:max-w-full grayscale origin-top"
                        src={image}
                        alt={title}
                        width={1920}
                        height={1920}
                        transition={{ ease: "linear" }}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQg..."
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
                        animate={cardAnimation}

                    />
                    <AnimatedText
                        text={title}
                        className={`${isHovered
                            ? "dark:text-light/25 text-primary"
                            : "dark:text-light text-dark"
                            }
                            transition-all duration-500
                            dark:mix-blend-difference tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] xs:ml-2 mix-blend-hard-light py-0 2xl:text-6xl lg:text-5xl sm:text-3xl  xs:text-xl absolute bottom-36 z-10"`}
                    />
                </motion.div>
                {subtitle && (
                    <motion.h4
                        className="flex items-center justify-center sm:flex-col sm:items-center sm:gap-3 dark:text-light/75 text-xl 2xs:text-base font-bold py-4 text-center"
                        animate={subtitleAnimation}
                    >
                        <Link
                            href="https://www.instagram.com/ket_maklakova/"
                            aria-label="Kate Maklakova"
                            className="flex items-center "
                            target="_blank"
                            onMouseEnter={handleLinkHover}
                            onMouseLeave={handleLinkHover}
                        >
                            <span
                                className={`${isHovered ? "shadow-fromShadow" : "shadow-current"} p-[2px] rounded-lg mr-4 transition-all duration-500`}
                                style={{
                                    background:
                                        "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                                }}
                            >
                                <Image
                                    src={aboutHistory.aboutHistoryCard.avatar}
                                    alt="InstagramKate"
                                    width={38}
                                    height={38}
                                    className="rounded-lg"
                                />
                            </span>
                            <span className="mr-2 underline">Kate Maklakova</span>
                        </Link>
                        <motion.span
                            className={`${isHovered
                                ? "dark:text-light/25 text-primary"
                                : "dark:text-light/75 text-dark"
                                } transition-all duration-500 `}
                        >
                            {subtitle}
                        </motion.span>
                    </motion.h4>
                )}
            </div>
            <StoryLine year={year} />
        </section>
    );
}

HistoryCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string,
    year: PropTypes.number,
};
