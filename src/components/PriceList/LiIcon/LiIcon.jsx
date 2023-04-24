/* eslint-disable react/no-unknown-property */
import React from "react";
import { motion, useScroll } from "framer-motion";
import PropTypes  from 'prop-types';

export function LiIcon ({ referece }) {
    const { scrollYProgress } = useScroll({
        target: referece,
        offset: ["center end", "center center"],
    });
    return (
        <figure className="absolute left-0 stroke-dark dark:stroke-light">
            <svg className="-rotate-45" width="75" height="75" viewBox="0 0 100 50">
                <circle
                    cx="75"
                    cv="50"
                    r="20"
                    className="stroke-primary stroke-1 fill-none dark:stroke-primaryDark"
                />
                <motion.circle
                    cx="75"
                    cv="50"
                    r="20"
                    className=" stroke-[5px] fill-light dark:fill-dark"
                    style={{
                        pathLength: scrollYProgress,
                    }}
                />
                <circle cx="75" cv="50" r="10" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
            </svg>
        </figure>
    );
};

LiIcon.propTypes = {
    referece: PropTypes.shape({
        prop1: PropTypes.string,
        prop2: PropTypes.number,
      }).isRequired,
}