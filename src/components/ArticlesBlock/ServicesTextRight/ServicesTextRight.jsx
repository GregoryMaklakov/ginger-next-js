import PropTypes from "prop-types";

export function ServicesTextRight({ data }) {
    const { heading, paragraphFirst, paragraphSecond, paragraphThird } = data;

    return (
        <section className="pt-[33px] pb-[40px] dark:text-light lg:pt-[50px] lg:pb-[60px]">
            <div className="mx-auto max-w-full ">
                <div className="mb-[31px] lg:mb-[42px] xl:mb-[51px] 2xl:mb-[81px]">
                    <h2 className="text-8xl xl:text-6xl lg:text-5xl xs:text-3xl font-bold capitalize leading-[1.2] ">
                        {heading}
                    </h2>
                </div>
                <div className="text-[20px] flex flex-col gap-[20px] ml-auto max-w-[66%] md:max-w-full">
                    <div className="text-[20px] font-medium leading-[1.4] xl:text-[21px] 2xl:text-[32px]">
                        {paragraphFirst}
                    </div>
                    <div className="text-[20px] font-medium leading-[1.4] xl:text-[21px] 2xl:text-[32px]">
                        {paragraphSecond}
                    </div>
                    {paragraphThird && (
                        <div className="text-[20px] font-medium leading-[1.4] xl:text-[21px] 2xl:text-[32px]">
                            {paragraphThird}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
ServicesTextRight.propTypes = {
    data: PropTypes.shape({
        heading: PropTypes.string,
        paragraphFirst: PropTypes.string.isRequired,
        paragraphSecond: PropTypes.string,
        paragraphThird: PropTypes.string,
    }),
};
