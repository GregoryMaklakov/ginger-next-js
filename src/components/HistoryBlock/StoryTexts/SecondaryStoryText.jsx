import { PropTypes } from "prop-types";
import { StoryPictures } from ".";
import { StoryLine } from "..";

export function SecondaryStoryText({
    className,
    image,
    text,
    title,
    reverse,
    year,
}) {
    return (
        <>
            <div
                className={`${className} 
            flex items-center justify-center pb-24 lg:grid-cols-1 lg:relative 
            ${reverse ? "flex-row-reverse" : "flex-row"}
            `}
            >
                <div className="max-w-[600px] col-span-4 lg:relative">
                    <StoryPictures
                        className="max-w-full h-auto"
                        image={image}
                        title={title}
                    />
                    <span className="hidden lg:block w-full lg:absolute bottom-0 left-0 right-0 z-[1] bg-gradient-to-t from-dark via-transparent to-transparent h-full" />
                </div>
                <p
                    className={`text-dark dark:text-light col-span-4 max-w-[600px]  font-semibold text-2xl lg:text-lg sm:text-base 2xs:text-[14px] lg:absolute lg:bottom-24 lg:p-4 z-[2] xs:leading-4 xs:p-2 
               ${reverse ? "pr-20" : "pl-20"}
                `}
                >
                    {text}
                </p>
            </div>
            <StoryLine year={year} />
        </>
    );
}

SecondaryStoryText.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    year: PropTypes.number,
};

SecondaryStoryText.defaultProps = {
    reverse: false,
};
