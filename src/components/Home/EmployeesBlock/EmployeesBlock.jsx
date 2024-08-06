import { useContext } from "react";
import Link from "next/link";
import { Icon } from "../../Icons";
import { StoryLine, TertiaryStoryText } from "../../HistoryBlock";
import { RoundedFrame } from "../RoundedFrame";
import { CursorContext } from "../../../lib";

export function EmployeesBlock() {

    const { setHoveringLink } = useContext(CursorContext);
    const handleMouseEnter = () => {
        setHoveringLink(true);
    };
    const handleMouseLeave = () => {
        setHoveringLink(false);
    };

    return (
        <div
            className="relative min-h-screen pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16 z-[999] flex flex-col items-center justify-center w-full max-w-[1920px] mx-auto p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6"
        >
            <StoryLine />
            <div className="flex flex-col items-center pt-24 content-center flex-wrap relative justify-center gap-6 xl:gap-3 w-full font-bold capitalize text-left text-8xl 2xl:text-6xl xl:text-4xl text-dark bg-inherit dark:bg-inherit dark:text-light md:text-4xl">
                <TertiaryStoryText
                    className="leading-[5.25rem] lg:leading-10 z-20 relative font-bold text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl"
                    textData="Dołącz do naszego zespołu!"
                    gradientWord="zespołu!"
                />
                <p className="my-4 text-base font-medium text-center text-dark dark:text-light xs:w-full">
                    "Jeśli szukasz miejsca, gdzie możesz się rozwijać i realizować swoje pasje, dołącz do nas!
                    "
                </p>
                <div className="flex flex-row gap-6 xl:gap-3 flex-wrap justify-center items-center ">
                    <RoundedFrame
                        src="/images/home/frame/employees-frame.mp4"
                        size="videoHeight"
                        variant="video"
                        alt="Our studio"
                    />
                </div>
                <Link
                    className="flex items-center justify-center mt-4 mb-12 bg-dark text-light p-2.5 px-6 xs:px-4 rounded-lg text-lg 2xs:text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 xs:w-full"
                    href="/work"
                    download
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Zobacz dostępne oferty
                    <Icon name="linkArrow" size={24} className="ml-2" />
                </Link>
            </div>
            <StoryLine />
        </div>
    )
}

