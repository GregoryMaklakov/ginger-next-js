import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useContext } from 'react';
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
          className="w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0">
          <motion.h1
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            variants={appearanceText}
            initial="initial"
            animate="animate"
            className={`inline-block w-full font-bold capitalize text-8xl ${isHoveringText ? "text-dark bg-light dark:bg-dark dark:text-light" : "text-dark dark:bg-dark dark:text-light"
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
          </motion.h1>
        </div>
      )}
    </CursorContext.Consumer>
  );
}

AnimatedText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

