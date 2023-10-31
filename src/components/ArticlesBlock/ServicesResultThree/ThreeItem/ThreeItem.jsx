import { PropTypes } from 'prop-types';

export function ThreeItem({ before, amount, subtitle }) {
    return (
        <li className="mb-6 flex flex-col gap-[4px]  border-b-[1px] dark:border-b-light/50 border-b-dark/75 ">
            <div className="flex items-center gap-[8px] dark:text-light text-dark">
                {before}
                <div className="text-6xl font-bold leading-[1.1] dark:text-primary text-dark/75">
                    {amount}
                </div>
            </div>
            <p className="min-w-full font-medium leading-[1.1] lg:text-[14px] text-xl mb-6 dark:text-light text-dark">
                {subtitle}
            </p>
        </li>
    )
}

ThreeItem.propTypes = {
    before: PropTypes.string,
    amount: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}
