/* eslint-disable react/no-array-index-key */
import { PropTypes } from "prop-types";
import { useState } from "react";
import { AccordionDesktopItem } from "./AccordionDesktopItem";

export function AccordionDesktop({ data }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="relative flex lg:hidden">
            <div className="flex flex-col min-w-[24%] pt-6 pr-6">
                {data.map((item, index) => (
                    <button
                        type="button"
                        className={`flex lg:w-full text-left lg:border-light/75${selectedIndex === index ? "text-primary" : "text-light"
                            } `}
                        onClick={() => setSelectedIndex(index)}
                        key={index}
                    >
                        <AccordionDesktopItem
                            subtitle={item.subtitle}
                            data={{ ...item, bool: selectedIndex === index }}
                        />
                    </button>
                ))}
            </div>
            <div className="dark:border-l-light/50 border-l-dark/75 border-l-[1px] pt-8 pl-24">
                <div className="flex">
                    <div className="max-w-[540px] 2xl:max-w-[400px]">
                        <div className="mb-[20px] flex items-center gap-[18px] lg:mb-[41px] xl:mb-[18px] 2xl:mb-[34px]">
                            <span className="text-xl font-bold leading-[1.4] text-dark/50 dark:text-light/75">
                                {data[selectedIndex].num}
                            </span>
                            <h4 className="text-xl font-bold uppercase leading-[1.3]">
                                {data[selectedIndex].subtitle}
                            </h4>
                        </div>
                        <p className="pt-5 pb-10 font-medium text-base leading-[1.4] lg:pt-[32px] xl:pt-[0px] xl:leading-[1.5] ">
                            {data[selectedIndex].text}
                        </p>
                        {data[selectedIndex].textSecond && (
                            <p className="pb-10 font-medium text-base leading-[1.4] lg:pt-[32px] xl:pt-[0px] xl:leading-[1.5] ">
                                {data[selectedIndex].textSecond}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

AccordionDesktop.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            subtitle: PropTypes.string.isRequired,
            num: PropTypes.string,
            text: PropTypes.string.isRequired,
            textSecond: PropTypes.string,
        }),
    ),
};
