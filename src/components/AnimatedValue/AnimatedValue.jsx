import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const AnimatedValue = ({ value, className }) => {

    const ref = useRef(null)
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span className={className} ref={ref}></span>
    )
}

AnimatedValue.propTypes = {
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
}
