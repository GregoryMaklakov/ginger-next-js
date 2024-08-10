import Image from "next/image";
import { PropTypes } from 'prop-types';

export function CardBigItem({ title, description, image, className }) {
  return (
    <div className={`${className} flex items-center xs:flex-col-reverse justify-center bg-cardGrey rounded-3xl flex-none flex-row flex-nowrap gap-0 h-[600px] max-w-7xl overflow-hidden p-0 relative w-3/4 xl:w-full border border-1 border-solid border-borderWhite20`}>
      <div className="flex items-center xs:items-start xs:pr-8 xs:w-full flex-row justify-center flex-grow flex-shrink-0 flex-nowrap gap-[10px] h-full overflow-hidden p-12 relative w-1 md:p-8 sm:pr-0">
        <div className=" flex items-start justify-end flex-col flex-nowrap gap-2 h-min p-0 overflow-hidden relative">
          <div className="flex flex-col justify-start flex-shrink-0">
            <h3 className="text-lg text-primary font-medium">{title}</h3>
          </div>
          <div className="flex flex-col justify-start flex-shrink-0">
            <p className="text-4xl sm:text-2xl text-light font-bold">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-none flex-row flex-nowrap gap-[10px] h-full justify-center overflow-hidden p-0 w-1/2 relative">
        <div className="flex items-center justify-center flex-none flex-col flex-nowrap gap-0 overflow-visible p-0 bottom-11 absolute transform translate-x-12 xs:translate-x-0">
          <Image
            alt="Card dialog window"
            src={image}
            width={400}
            height={400}
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

CardBigItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
