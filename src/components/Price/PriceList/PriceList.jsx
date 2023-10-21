import { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useScroll } from 'framer-motion';
import { Category } from '../Category';

export function PriceList({ categories }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 40%', 'end center'],
        layoutEffect: false,
    });
    return (
        <div className="mb-16 mt-0">
            <div ref={ref} className="w-[75%] mx-auto relative pt-16 xl:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute t-0 left-9 sm:left-4 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"
                />
                {categories.map((category) => (
                    <Category key={category.id} {...category} />
                ))}
            </div>
        </div>
    );
}

PriceList.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            heading: PropTypes.string,
            items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        })
    ).isRequired,
};
