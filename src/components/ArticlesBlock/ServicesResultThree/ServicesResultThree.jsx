import { PropTypes } from 'prop-types';
import { ThreeItem } from './ThreeItem';

export function ServicesResultThree({ name, data }) {
    return (
        <section className="pb-[50px] text-light w-full">
            <div className="mx-auto sm:max-w-full">
                <h2 className="pb-[30px] text-[28px] font-bold capitalize lg:text-center md:pt-[30px]">
                    {name}
                </h2>
                <div className="">
                    <ul className="flex flex-col justify-between flex-wrap gap-x-[20px] pt-[30px]">
                        {data.map((item) => (
                            <ThreeItem {...item} key={item.index} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

ServicesResultThree.propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            before: PropTypes.string,
            amount: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
        })
    )
};