import PropTypes from 'prop-types';
import { ServicesScheduleItem } from '../ServicesScheduleItem/ServicesScheduleItem';

export function ServicesSchedule({ name, data }) {
    return (
        <section className="py-16 ">
            <div className="sm:max-w-full">
                <h2 className="text-8xl font-bold text-center lg:text-5xl xs:text-3xl mb-12">
                    {name}
                </h2>
                <div className="xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[29px] 2xl:gap-[44px]">
                    <div>
                        {data.map((item) => (
                            <ServicesScheduleItem {...item} key={item.number} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

ServicesSchedule.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    )
};
