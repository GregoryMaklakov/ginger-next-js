import { PropTypes } from "prop-types";
import { AccordionDesktop } from "./AccordionDesktop";
import { AccordionMobile } from "./AccordionMobile";


export function Accordion({ data, heading }) {
    return (
        <section className="overflow-x-hidden text-dark py-16 dark:text-light">
            <div className="mx-auto max-w-full">
                <h2 className="pb-[30px] border-b-[1px] dark:border-b-light/50 border-b-dark/75 font-bold capitalize text-center leading-[1.2] text-8xl xl:text-6xl lg:text-5xl xs:text-3xl">
                    {heading}
                </h2>
                <AccordionDesktop data={data} />
                <AccordionMobile data={data} />
            </div>
        </section>
    )
}

Accordion.propTypes = {
    heading: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            subtitle: PropTypes.string.isRequired,
            num: PropTypes.string,
            text: PropTypes.string.isRequired,
            img: PropTypes.string,
            bool: PropTypes.bool,
        }),
    ),
};
