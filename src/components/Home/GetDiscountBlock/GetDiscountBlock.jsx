import { useTransform, motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { MouseImageTrail } from "../../GalleryBlock";
import { Icon } from "../../Icons";
import { FlippedText } from "../../FlippedText";
import { StoryLine, TertiaryStoryText } from "../../HistoryBlock";
import { RoundedFrame } from "../RoundedFrame";

export function GetDiscountBlock({
  wordsVariants1,
  images,
  scrollYProgress,
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.125]);

  const gradientVariants01 = {
    backgroundSize: "100% 500%",
    animate: {
      backgroundImage: [
        "linear-gradient(49deg,#2d4de0 0, #9f71f0 20%)",
        "linear-gradient(52deg,#fc6277 58%, #f8ef6f 80%)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  const gradientVariants02 = {
    backgroundSize: "100% 500%",
    animate: {
      backgroundImage: [
        "linear-gradient(49deg,#981496 0, #5166d7 20%)",
        "linear-gradient(52deg,#f8ef6f 8%, #2d4de0 90%)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
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
            <RoundedFrame
              src="/images/home/frame/frame-01.jpg"
              size="large"
              variant="image"
              alt="Our team"
            />
            <FlippedText
              className="text-dark/75 dark:bg-dark bg-light dark:text-light/75 border-dark dark:border-light/75"
              textVariants={wordsVariants1}
            />
            <h2 className="flex flex-shrink-0">Shine</h2>
          </div>
          <div className="flex flex-row gap-6 xl:gap-3 flex-wrap justify-center items-center ">
            <h2 className="flex flex-shrink-0">with</h2>
            <TertiaryStoryText textData="Ginger" gradientWord="Ginger" variant="animate" gradientAnimation={gradientVariants01}
            />
            <TertiaryStoryText textData="Beauty" gradientWord="Beauty" variant="animate" gradientAnimation={gradientVariants02}
            />
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
        <div className="flex flex-row items-center justify-center gap-8 w-auto mb-24 xs:mb-28">
          <div className="flex items-center">
            <Icon name="stars-review" />
          </div>
          <div className="review flex flex-shrink-0 text-sm font-thin text-dark/75 dark:text-primaryDark/75">
            600+ reviews on Booksy
          </div>
        </div>

        <StoryLine />
      </motion.div>
    </MouseImageTrail>
  );
}

GetDiscountBlock.propTypes = {
  wordsVariants1: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollYProgress: PropTypes.shape({
    get: PropTypes.func.isRequired,
  }).isRequired,
};
