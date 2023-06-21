import React from "react";
import { PropTypes } from "prop-types";

// Container
export function Layout({ children, className }) {
    return (
        <div
            className={`w-full max-w-[1920px] mx-auto h-full bg-light dark:bg-dark inline-block z-0 p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6 ${className}`}
        >
            {children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
