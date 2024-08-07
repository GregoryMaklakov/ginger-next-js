import { useTransform, motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { MouseImageTrail } from "../../GalleryBlock";
import { Icon } from "../../Icons";
import { FlippedText } from "../../FlippedText";
import { StoryLine } from "../../HistoryBlock";
import { RoundedFrame } from "../RoundedFrame";
import { ButtonLink } from '../../Button/Button';

export function GetDiscountBlock({
  wordsVariants1,
  wordsVariants2,
  images,
  scrollYProgress,
}) {

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.125]);

  const gradientVariants01 = {
    animate: {
      // background: [
      //   "linear-gradient(to right, #eb9467, #fa75f8)",
      //   "linear-gradient(to right, #fa75f8, #6600ff",
      //   "linear-gradient(to right, #facc69, #CC184B)",
      //   "linear-gradient(to right, #e665e3, #f8844a)",
      // ],
      background: [
        "linear-gradient(to right, #CC184B, #e63466)",
        "linear-gradient(to right, #e21d1d, #f9396f",
        "linear-gradient(to right, #e63466, #f9396f)",
        "linear-gradient(to right, #CC184B, #f9064b)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };

  const gradientVariants02 = {
    animate: {
      background: [
        "linear-gradient(to right, #1b1b1b, #1b1b1b))",
        "linear-gradient(to right, #1b1b1b, #1b1b1b",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      },
    },
  };
  return (
    <MouseImageTrail renderImageBuffer={50} rotationRange={25} images={images}>
      <motion.div
        style={{ scale }}
        className="relative h-min pt-0 pb-16 md:pt-16 sm:pt-0 sm:pb-16 z-[999] flex flex-col items-center justify-center w-full max-w-[1920px] mx-auto p-32 xl:p-24 lg:p-16 lg:pt-0 md:p-12 sm:p-6"
      >
        <StoryLine />
        <div className="flex flex-col items-center pt-24 content-center flex-wrap relative justify-center gap-6 xl:gap-3 w-full font-bold capitalize text-left text-8xl 2xl:text-6xl xl:text-4xl text-dark bg-inherit dark:bg-inherit dark:text-light md:text-4xl">
          <div className="flex flex-row gap-6 xl:gap-3 flex-wrap justify-center items-center h-full">
            <h2 className="flex flex-shrink-0">Nails</h2>
            <FlippedText
              className="text-dark/75 dark:text-light/75 border-dark dark:border-light/75"
              textVariants={wordsVariants1}
              gradientVariants={gradientVariants01}
            />
            <RoundedFrame
              src="/images/home/frame/frame-01.jpg"
              size="large"
              variant="image"
              alt="Our team"
            />
            <FlippedText
              className="text-light/75 border-primary"
              textVariants={wordsVariants2}
              gradientVariants={gradientVariants02}
            />
          </div>
          <div className="flex flex-row gap-6 xl:gap-3 flex-wrap justify-center items-center ">
            <h2 className="flex flex-shrink-0">with</h2>
            <h2 className="flex flex-shrink-0">Ginger</h2>
            <h2 className="flex flex-shrink-0">Beauty</h2>
            <RoundedFrame
              src="/images/home/frame/studio-frame.mp4"
              size="large"
              variant="video"
              alt="Our studio"
            />
            <h2 className="flex flex-shrink-0">Zone</h2>
          </div>
        </div>
        <p className="my-4 text-base font-medium text-center text-dark dark:text-light xs:w-full">
          "Najlepszy sposób, aby zadbać o siebie."
        </p>
        <div className="flex flex-row items-center justify-center gap-8 w-auto mb-4 xs:mb-28">
          <div className="flex items-center">
            <Icon name="stars-review" />
          </div>
          <div className="review flex flex-shrink-0 text-sm font-thin text-dark/75 dark:text-primaryDark/75">
            600+ reviews on Booksy
          </div>
        </div>
        <div className="flex items-center pb-24 xs: justify-start sm:flex-col xs:w-full pt-3 lg:p-16 md:p-12 sm:p-6">
          <ButtonLink
            variant="primary"
            href="/ginger-sale.pdf"
            target="_blank"
            download
            icon="linkArrow"
          >
            Odbierz zniżkę 20%
          </ButtonLink>
          <ButtonLink
            variant="secondary"
            href="tel:48510001772"
          >
            Zadzwoń
          </ButtonLink>
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
    get: PropTypes.func.isRequired,
  }).isRequired,
};
