
import { PropTypes } from 'prop-types';

export function ServicesScheduleItem({ number, title, text }) {
  return (
    <div className="flex flex-row px-6 md:px-0 lg:flex-col justify-between border-b-[1px] border-b-light/50 py-12 xl:py-8">
      <div className="flex flex-row gap-[250px] xl:flex-col xl:gap-2">
        <span className="text-xl xs:text-xs font-bold leading-[1.4] text-dark dark:text-light/75">
          {number}
        </span>
        <h3 className="mb-[30px] pt-[6px] text-[20px] font-bold uppercase leading-[1.3] w-[265px] mr-12">
          {title}
        </h3>
      </div>
      <p className="font-medium text-base leading-[1.4] max-w-[44%] lg:max-w-full">
        {text}
      </p>
    </div>
  );
}

ServicesScheduleItem.propTypes = {
  number: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}
