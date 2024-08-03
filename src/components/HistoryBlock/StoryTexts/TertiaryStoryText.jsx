import { PropTypes } from "prop-types";



export function TertiaryStoryText({ className, textData = "", gradientWord, variant = "default" }) {
    const words = textData.split(" ");

    const colorVariants = {
        default: "text-dark dark:bg-inherit dark:text-light",
        light: "text-light",
    };

    return (
        <p
            className={`${className} inline text-center`}
            style={{ WebkitBackgroundClip: "text", color: "transparent" }}
        >
            {words.map(word => (
                <span
                    key={word}
                    className={`${word === gradientWord
                        ? "bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text ease-ease-OutCubic"
                        : colorVariants[variant] || colorVariants.default
                        } inline w-full capitalize max-w-5xl`}
                >
                    {word}{" "}
                </span>
            ))}
        </p>
    );
}

TertiaryStoryText.propTypes = {
    className: PropTypes.string,
    textData: PropTypes.string,
    gradientWord: PropTypes.string,
    variant: PropTypes.oneOf(["default", "light"]),
};
