import { PropTypes } from "prop-types";

export function ServicesAdvantages({ heading, list }) {
    return (
        <section className="overflow-x-hidden text-dark py-16 dark:text-light">
            <div className="mx-auto max-w-full">
                <h2 className="pb-[30px] text-3xl font-bold capitalize lg:text-center">
                    {heading}
                </h2>
                <div className="ml-auto max-w-[75%] lg:max-w-full pl-[156px] lg:pl-0">
                    <ul className="flex flex-col gap-6">
                        {list.map((item) => (
                            <li key={item.id}>
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full self-start bg-primary pl-[6.75px] pr-[6.2px] pt-[8.25px] pb-[9px]">
                                        <svg
                                            className="h-[6.75px] w-[11.05px] xl:h-[9px] xl:w-[14.73px]"
                                            width="11.05"
                                            height="6.75"
                                            viewBox="0 0 13 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M0.75 3.70455L5.04545 8L11.7955 1.25"
                                                stroke="white"
                                                strokeWidth="1.4375"
                                            />
                                        </svg>
                                    </span>
                                    {item.title ? (
                                        <p className="text-base font-bold leading-[1.4]">
                                            {item.title}
                                        </p>
                                    ) : (
                                        <p className="text-base font-bold leading-[1.4]">
                                            {item}
                                        </p>
                                    )}
                                </div>
                                {Array.isArray(item.items) && (
                                    <ul className="ml-14 mt-2 xs:ml-0">
                                        {item.items.map((subItem) => (
                                            <li className="w-full mb-2" key={subItem.id}>- {subItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
}

ServicesAdvantages.propTypes = {
    heading: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({
                title: PropTypes.string,
                items: PropTypes.arrayOf(PropTypes.string),
            }),
        ])
    ).isRequired,
};