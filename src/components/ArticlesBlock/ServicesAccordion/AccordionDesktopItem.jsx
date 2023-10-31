import { PropTypes } from 'prop-types';

export function AccordionDesktopItem({ subtitle, data }) {
  return (
    <h4 className="flex items-center text-base font-bold uppercase leading-[1.4] transition ease-in hover:text-primary dark:hover:text-primary pt-[8px] pb-[8px]">
      {subtitle}
      <span
        className={`${data.bool ? "bg-primary border-transparent" : ""
          } border-rounded border-[1px] border-dark/75 top-[calc(50%-17px)] rounded-full p-[9px] transition-all ease-in group-hover/card:border-primary group-hover/card:bg-primary/75 ml-6`}
      >
        <svg
          className={`${data.bool ? "fill-light" : ""
            } h-[11px] w-[11px] transition-all ease-in group-hover/card:fill-light dark:fill-light 2xl:h-[15px] 2xl:w-[15px] rotate-[270deg] lg:rotate-0 `}
          height="14"
          viewBox="0 0 14 14"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M7.84553 10.7627L12.3813 6.22693L13.5772 7.4228L6.99993 14.0001L0.422659 7.4228L1.61853 6.22693L6.15432 10.7627L6.15432 0.845536L7.84553 0.845527L7.84553 10.7627Z"
            fillRule="evenodd"
          />
        </svg>
      </span>
    </h4>
  )
}

AccordionDesktopItem.propTypes = {
  subtitle: PropTypes.string.isRequired,
  data: PropTypes.shape({
    bool: PropTypes.bool,
  })
}