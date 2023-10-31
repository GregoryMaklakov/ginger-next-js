import { PropTypes } from 'prop-types';
import { useState } from "react";

export function AccordionMobileItem({ data }) {
  const [openedContent, setOpenedContent] = useState(false);

  return (
    <div className="item pt-6">
      <button
        type='button'
        className="w-full text-left"
        onClick={() => setOpenedContent((prevOpenedContent) => !prevOpenedContent)}
      >
        <h4 className="group/card border-b-[1px] pb-6 dark:border-b-light/50 border-b-dark/75 flex items-center justify-between text-[16px] text-dark dark:text-light font-bold uppercase leading-[1.4] transition ease-in hover:text-primary">
          {data.subtitle}
          <span className="border-[1px] border-dark/75 dark:border-light/75 top-[calc(50%-17px)] ml-[15px] rounded-full p-[9px] transition-all ease-in group-hover/card:border-primary group-hover/card:bg-primary lg:p-[10px]">
            <svg
              className="transition-all ease-in group-hover/card:fill-light dark:fill-light lg:h-[10px] lg:w-[10px] xl:h-[16px] xl:w-[16px] "
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.84553 10.7627L12.3813 6.22693L13.5772 7.4228L6.99993 14.0001L0.422659 7.4228L1.61853 6.22693L6.15432 10.7627L6.15432 0.845536L7.84553 0.845527L7.84553 10.7627Z"
              />
            </svg>
          </span>
        </h4>
      </button>
      {openedContent && (
        <div className=":pr-[30px] w-full pt-6">
          <div className="flex flex-col">
            <div className="flex gap-[18px] lg:mb-[10px] lg:pt-[20px]">
              <span className="text-[16px] font-bold leading-[1.4] text-dark/50 dark:text-light/75">
                {data.num}
              </span>
              <h4 className="text-[24px] font-bold uppercase leading-[1.3]">
                {data.subtitle}
              </h4>
            </div>
            <p className="pt-5 pb-10 text-base font-medium leading-[1.4]">
              {data.text}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

AccordionMobileItem.propTypes = {
  data: PropTypes.shape({
    subtitle: PropTypes.string.isRequired,
    num: PropTypes.string,
    text: PropTypes.string.isRequired,
  })
}