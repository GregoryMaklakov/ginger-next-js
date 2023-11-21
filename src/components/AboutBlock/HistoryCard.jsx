import PropTypes from "prop-types";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatedText } from "../AnimatedText";

const FramerHistoryImage = motion(Image);

export function HistoryCard({ image, title, subtitle, className }) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <section className="card-container dark:text-light block w-full" ref={ref}>
            <div className="image-container h-auto relative w-full">
                <div className={`${className} max-w-[43vw] md:max-w-full block mx-auto rounded-3xl overflow-hidden m-6`} >
                    <FramerHistoryImage
                        className="max-w-[43vw] md:max-w-full grayscale"
                        src={image}
                        alt={title}
                        width={1920}
                        height={1920}
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQg..."
                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={isInView ? { y: 0, opacity: 1, transition: { duration: 1, delay: 1 } } : {}}
                        custom={isHovered}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                    <AnimatedText
                        text={title}
                        className="dark:mix-blend-difference tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] xs:ml-2 mix-blend-color-burn py-0 2xl:text-6xl lg:text-5xl sm:text-3xl  xs:text-xl absolute bottom-36 z-10"
                    />
                </div>
                {subtitle && <h4 className="flex items-center justify-center dark:text-light/75 text-xl font-bold py-4 text-center">{subtitle}</h4>}
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
