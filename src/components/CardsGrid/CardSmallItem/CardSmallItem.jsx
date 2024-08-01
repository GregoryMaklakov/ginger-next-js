import Image from "next/image";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from "../../Icons";
import { CursorContext } from "../../../lib";
import { TertiaryStoryText } from '../../HistoryBlock/StoryTexts/TertiaryStoryText';

export function CardSmallItem({ description, image, link, icon, title, gradientWord }) {
    const { setHoveringLink } = useContext(CursorContext);

    const handleMouseEnterLink = () => {
        setHoveringLink(true);
    };
    const handleMouseLeaveLink = () => {
        setHoveringLink(false);
    };


    const AnimatedLink = motion(Link);

    return (
        <div className="flex flex-[50%] items-center justify-center flex-col rounded-3xl flex-nowrap relative overflow-hidden h-full flex-grow bg-cardGrey pb-3 border border-1 border-solid border-borderWhite20">
            <div className="flex items-start justify-start flex-row flex-grow flex-nowrap w-full p-8 relative overflow-hidden">
                <div className="flex flex-col items-start p-0 justify-end h-min gap-[6px] relative w-full">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-lg text-dark dark:text-light font-medium">
                            <TertiaryStoryText
                                textData={title}
                                gradientWord={gradientWord}
                            />
                        </h3>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="text-sm text-dark/75 dark:text-light/75">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-[75%] flex-col flex-nowrap">
                <div className="flex items-center flex-auto justify-center overflow-hidden p-0 w-full h-3/4 flex-nowrap">
                    <Image
                        alt="Card dialog window"
                        src={image}
                        width={400}
                        height={400}
                        className="w-full"
                        loading="lazy"
                    />
                </div>
                {link && (
                    <div
                        className="grid place-content-center">
                        <AnimatedLink
                            className="inline-flex"
                            href={link}
                            target="_blank"
                            whileTap={{ scale: 0.9 }}
                            onMouseEnter={handleMouseEnterLink}
                            onMouseLeave={handleMouseLeaveLink}
                        >
                            <Icon
                                name={icon}
                                size={40}
                                className="fill-current text-dark dark:text-light"
                            />
                        </AnimatedLink>
                    </div>
                )}
            </div>
        </div>
    );
}

CardSmallItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
    icon: PropTypes.string,
    gradientWord: PropTypes.string,
};
