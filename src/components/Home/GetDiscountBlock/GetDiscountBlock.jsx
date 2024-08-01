import { useContext } from "react";
import { useTransform, motion } from "framer-motion";
import { PropTypes } from "prop-types";
import Link from "next/link";
import { CursorContext } from "../../../lib";
import { MouseImageTrail } from "../../GalleryBlock";
import { Icon } from "../../Icons";
import { FlippedText } from "../../FlippedText";
import { StoryLine } from "../../HistoryBlock";

export function GetDiscountBlock({ wordsVariants1, wordsVariants2, images, scrollYProgress }) {
  const { setHoveringLink } = useContext(CursorContext);
  const handleMouseEnter = () => {
    setHoveringLink(true);
  };
  const handleMouseLeave = () => {
    setHoveringLink(false);
  };

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.125]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  return (
    <MouseImageTrail renderImageBuffer={50} rotationRange={25} images={images} >
      <motion.div style={{ scale, opacity }} className="h-min pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16 z-[999] flex flex-col items-center justify-center w-full max-w-[1920px] mx-auto p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6">
        <StoryLine />
        <div className="flex flex-row items-center pt-24 content-center flex-wrap relative justify-center gap-6 xl:gap-3 w-full font-bold capitalize text-left text-8xl 2xl:text-6xl xl:text-4xl text-dark bg-inherit dark:bg-inherit dark:text-light md:text-4xl">
          <h2 className="flex flex-shrink-0">Charm</h2>
          <FlippedText textVariants={wordsVariants1} />
          <h2 className="flex flex-shrink-0">Gleam</h2>
          <FlippedText textVariants={wordsVariants2} />
          <h2 className="flex flex-shrink-0">Z Ginger</h2>
          <h2 className="flex flex-shrink-0">Beauty</h2>
          <h2 className="flex flex-shrink-0">Zone</h2>
        </div>
        <p className="my-4 text-base font-medium text-center text-dark dark:text-light xs:w-full">
          "Najlepszy sposób, aby zadbać o siebie."
        </p>
        <div className="flex flex-row items-center justify-center gap-8 w-auto mb-4 xs:mb-28">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-orange ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-orange ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-orange ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-orange ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 ms-1 text-orange"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <div className="review flex flex-shrink-0 text-sm font-thin text-dark/75 dark:text-primaryDark/75">
            550+ reviews on Booksy
          </div>
        </div>
        <div className="flex items-center pb-24 xs: justify-start sm:flex-col xs:w-full pt-3 lg:p-16 md:p-12 sm:p-6">
          <Link
            className="flex items-center justify-center bg-dark text-light p-2.5 px-6 xs:px-4 rounded-lg text-lg 2xs:text-sm font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light sm:mb-4 xs:w-full"
            href="/dummy.pdf"
            target="_blank"
            download
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Odbierz zniżkę 20%
            <Icon name="linkArrow" size={24} className="ml-2" />
          </Link>
          <Link
            className="flex items-center sx:w-full xs:mt-4 ml-4 xs:ml-0 font-medium capitalize underline text-lg 2xs:text-sm dark:text-light text-dark "
            href="tel:48510001772"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Zadzwoń
          </Link>
        </div>
        <StoryLine />
      </motion.div>
    </MouseImageTrail>
  );
}

GetDiscountBlock.propTypes = {
  wordsVariants1: PropTypes.arrayOf(PropTypes.string).isRequired,
  wordsVariants2: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollYProgress: PropTypes.shape({
    get: PropTypes.func.isRequired
  }).isRequired
};

