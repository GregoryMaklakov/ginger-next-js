import { motion } from "framer-motion";
import PropTypes from "prop-types";

export function TertiaryStoryText({
    className,
    textData = "",
    gradientWord,
    variant = "default",
    gradientAnimation,
}) {
    const words = textData.split(" ");

    const colorVariants = {
        default: "text-dark dark:text-light",
        light: "text-light",
        animate: "bg-clip-text text-transparent",
    };

    return (
        <p
            className={`${className} inline text-center`}
            style={
                variant === "animate"
                    ? { WebkitBackgroundClip: "text", color: "transparent" }
                    : {}
            }
        >
            {words.map((word) => {
                const isGradientWord = word === gradientWord;
                const isAnimated = variant === "animate" && isGradientWord;

                return isAnimated ? (
                    <motion.span
                        key={word}
                        className={`${colorVariants[variant]} inline w-full capitalize max-w-5xl`}
                        animate={gradientAnimation.animate}
                    >
                        {word}{" "}
                    </motion.span>
                ) : (
                    <span
                        key={word}
                        className={`${isGradientWord
                            ? "bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent ease-ease-OutCubic"
                            : colorVariants[variant]
                            } inline w-full capitalize max-w-5xl`}
                    >
                        {word}{" "}
                    </span>
                );
            })}
        </p>
    );
}

TertiaryStoryText.propTypes = {
    className: PropTypes.string,
    textData: PropTypes.string,
    gradientWord: PropTypes.string,
    variant: PropTypes.oneOf(["default", "light", "animate"]),
    gradientAnimation: PropTypes.shape({
        animate: PropTypes.shape({
            backgroundImage: PropTypes.arrayOf(PropTypes.string),
            backgroundSize: PropTypes.arrayOf(PropTypes.string),
            transition: PropTypes.shape({
                duration: PropTypes.number,
                repeat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                repeatType: PropTypes.oneOf(["loop", "reverse"]),
                ease: PropTypes.string,
            }),
        }),
    }),
};
