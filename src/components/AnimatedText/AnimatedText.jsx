import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

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
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0">
      <motion.h1
        variants={appearanceText}
        initial="initial"
        animate="animate"
        className={`inline-blick w-full text-dark font-bold capitalize text-8xl dark:text-light ${className}`}
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
  );
}

AnimatedText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
