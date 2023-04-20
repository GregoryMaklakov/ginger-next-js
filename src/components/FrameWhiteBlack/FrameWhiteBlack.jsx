import React from 'react'
import PropTypes from 'prop-types'

export const FrameWhiteBlack = ({ children }) => {
    return (
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-5" >
            <span className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
            {children}
        </div>
    )
}

FrameWhiteBlack.propTypes = {
    children: PropTypes.node,
}