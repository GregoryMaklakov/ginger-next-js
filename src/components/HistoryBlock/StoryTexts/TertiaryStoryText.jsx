import { PropTypes } from "prop-types";

export function TertiaryStoryText({ className, textData, gradientWord }) {
    const words = textData.split(" ");

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
                        : "text-dark dark:bg-inherit dark:text-light"
                        } inline w-full font-bold capitalize max-w-5xl text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl`}
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
};
