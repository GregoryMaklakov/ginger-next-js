import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image'

export function StoryPictures({ image, title, className }) {
    const [isHovered, setIsHovered] = useState(false);

    const HistoryImageAnimated = motion(Image)

    const imageVariants = {
        rest: {
            filter: "grayscale(100%)",
            transition: { type: "tween" },
        },
        hover: {
            filter: "grayscale(0%)",
            transition: { type: "tween" },
        },
    };
    return (
        <HistoryImageAnimated
            src={image}
            alt={title}
            width={1920}
            height={1920}
            className={`${className} rounded-2xl`}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQg..."
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
            transition={{ duration: 0.2 }}
            initial={isHovered ? "hover" : "rest"}
            animate={isHovered ? "hover" : "rest"}
            variants={imageVariants}
            custom={isHovered}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} />
    )
}

StoryPictures.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,

};

