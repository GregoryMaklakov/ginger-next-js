import React from 'react'
import PropTypes from 'prop-types'

export function FrameWhiteBlack ({ children, className, style }) {
    return (
        <div style={style} className={`relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-5 shadow-2xl dark:bg-dark dark:border-light  ${className}`} >
            <span className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            {children}
        </div>
    )
}

FrameWhiteBlack.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.string,
}