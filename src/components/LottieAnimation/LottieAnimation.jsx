// eslint-disable-next-line import/no-extraneous-dependencies
import lottie from 'lottie-web';
import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import animationNails from '../../../public/ginger/lotie-animation.json';


export function LottieAnimation({ className }) {
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationNails,
        });
    }, []);

    return <div key={className} className={`${className}`} ref={container} />
}

LottieAnimation.propTypes = {
    className: PropTypes.string,
}