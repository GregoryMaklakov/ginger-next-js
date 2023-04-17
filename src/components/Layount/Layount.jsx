import React from "react";
import { PropTypes } from "prop-types";

export const Layount = ({ children, className }) => {
    return (
        <div
            className={`w-full h-full bg-light inline-block z-0 p-32 ${className}`}
        >
            {children}
        </div>
    );
};

Layount.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
