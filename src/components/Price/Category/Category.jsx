import PropTypes from "prop-types";
import { useRef } from "react";
import { motion } from "framer-motion";
import { LiIcon } from "../../../pages/price";
import { PriceItem } from "../PriceItem";

export function Category({ name, items, heading }) {
    const ref = useRef(null);
    return (
        <div ref={ref}>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1, type: "spring", delay: 0.1 }}
                className="flex flex-col items-center justify-center mb-16 xl:pl-28 xl:items-start sm:pl-12"
            >
                {heading && (
                    <h3 className="font-bold max-w-lg text-center uppercase underline text-2xl mb-2 dark:text-light xl:text-xl">
                        {heading}
                    </h3>
                )}
                <h3 className="font-bold max-w-lg text-center capitalize text-2xl mb-6 dark:text-light/75 xl:text-xl">
                    {name}
                </h3>
                <ul className="w-[60%] xl:w-full ">
                    {items.map(item => (
                        <PriceItem
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            priceUsd={item.priceUsd}
                            description={item.description}
                        />
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

Category.propTypes = {
    name: PropTypes.string.isRequired,
    heading: PropTypes.string,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
