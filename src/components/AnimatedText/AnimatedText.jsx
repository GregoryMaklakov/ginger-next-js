import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext, useRef } from 'react';
import { CursorContext } from '../../lib/context';

const appearanceText = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export function AnimatedText({ text, className }) {
  const { setHoveringText } = useContext(CursorContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleMouseEnter = () => {
    setHoveringText(true);
  };
  const handleMouseLeave = () => {
    setHoveringText(false);
  };


  return (
    <CursorContext.Consumer>
      {({ isHoveringText }) => (
        <div
          ref={ref}
          className="w-full mx-auto flex items-center justify-center text-center sm:py-0">
          <motion.h2
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={appearanceText}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            className={`inline-block w-full font-bold capitalize text-8xl ${isHoveringText
              ? 'text-dark bg-inherit dark:bg-inherit dark:text-light'
              : 'text-dark dark:bg-inherit dark:text-light'
              } ${className}`}

          >
            {text.split(' ').map((word, index) => (
              <motion.span
                // eslint-disable-next-line react/no-array-index-key
                key={`${word}-${index}`}
                className="inline-block"
                variants={singleWord}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.h2>
        </div>
      )}
    </CursorContext.Consumer>
  );
}

AnimatedText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
