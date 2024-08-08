import Link from 'next/link'
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { PropTypes } from "prop-types";
import { TertiaryStoryText } from '../../HistoryBlock/StoryTexts/TertiaryStoryText';
import { CursorContext } from '../../../lib/context';

const MotionEmployeeLink = motion(Link);

export function EmployeeCardPosition({ href, title, gradientWord, description, disabled }) {
    const { setHoveringLink } = useContext(CursorContext);

    const handleMouseEnter = () => {
        if (!disabled) {
            setHoveringLink(true);
        }
    };

    const handleMouseLeave = () => {
        if (!disabled) {
            setHoveringLink(false);
        }
    };

    return (
        <MotionEmployeeLink
            whileTap={disabled ? {} : { scale: 0.98 }}
            whileHover={disabled ? {} : { scale: 1.02 }}
            href={disabled ? '#' : href}
            target={disabled ? '' : '_blank'}
            className={`flex flex-[50%] items-center justify-center flex-col rounded-3xl flex-nowrap relative overflow-hidden h-full flex-grow transition-all duration-200 pb-3 border border-1 border-solid ${disabled ? 'bg-darkGrey border-darkGrey cursor-not-allowed opacity-80' : 'bg-gradient-to-b from-[#353535] to-[#242323] hover:bg-gradient-to-r hover:border-gradientFrom border-borderWhite20'
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ pointerEvents: disabled ? 'none' : 'auto' }}
        >
            <span className="flex items-start justify-start flex-row flex-grow flex-nowrap w-full p-8 relative overflow-hidden">
                <span className="flex flex-col items-start p-0 justify-end h-min gap-[6px] relative w-full">
                    <span className="flex flex-col justify-start">
                        <motion.span className="text-lg font-medium">
                            <TertiaryStoryText
                                textData={title}
                                gradientWord={gradientWord}
                                variant="light"
                                className="text-2xl"
                            />
                        </motion.span>
                    </span>
                    <span className="flex flex-col justify-start">
                        <p className="text-light/75 text-base">
                            {description}
                        </p>
                    </span>
                </span>
            </span>
        </MotionEmployeeLink>
    )
}

EmployeeCardPosition.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gradientWord: PropTypes.string,
    disabled: PropTypes.bool,
};
