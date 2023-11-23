import PropTypes from "prop-types";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "../AnimatedText";

const FramerHistoryImage = motion(Image);

export function HistoryCard({ image, title, subtitle, className }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardAnimation = {
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.85,
        borderRadius: isInView ? "20%" : "0%",
        transition: { delay: 0.5, duration: 1 },
    }
    const subtitleAnimation = {
        y: isInView ? [0, 2, -2, -1, 0] : 0,
        opacity: isInView ? 1 : 0,
        transition: {
            duration: 1,
            delay: 1,
            times: [0, 0.25, 0.5, 0.8, 1],
        },
    }

    return (
        <section className="card-container dark:text-light block w-full" >
            <div ref={ref} className="image-container h-auto relative w-full">
                <motion.div
                    className={`${className} max-w-[43vw] md:max-w-full block mx-auto rounded-3xl overflow-hidden m-6`}
                >
                    <FramerHistoryImage
                        className="max-w-[43vw] md:max-w-full grayscale"
                        src={image}
                        alt={title}
                        width={1920}
                        transition={{ ease: "linear" }}
                        height={1920}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQg..."
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
                        animate={cardAnimation}
                    />
                    <AnimatedText
                        text={title}
                        className="dark:mix-blend-difference tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] xs:ml-2 mix-blend-color-burn py-0 2xl:text-6xl lg:text-5xl sm:text-3xl  xs:text-xl absolute bottom-36 z-10"
                    />
                </motion.div>
                {subtitle && (
                    <motion.h4 className="flex items-center justify-center dark:text-light/75 text-xl font-bold py-4 text-center"
                        animate={subtitleAnimation}

                    >
                        {subtitle}
                    </motion.h4>
                )}
            </div>
        </section>
    );
}

HistoryCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    className: PropTypes.string,
};
