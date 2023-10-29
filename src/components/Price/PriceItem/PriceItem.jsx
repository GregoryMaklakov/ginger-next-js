import PropTypes from 'prop-types';

export function PriceItem({ name, price, description, priceUsd }) {
    return (
        <li>
            <div className="flex items-center justify-between w-full mb-2">
                <div className='flex flex-col max-w-[82%]'>
                    <p className="font-medium w-full dark:text-light capitalize md:text-sm xs:text-xs xs:max-w-[220px] line-clamp-1">
                        {name}
                    </p>
                    {description && (
                        <p className="text-xs text-gray-500 xs:max-w-[220px] max-w-[80%]">
                            {description}
                        </p>
                    )}
                </div>
                {typeof price === 'object' ? (
                    <span className="capitalize text-primary font-bold xs:text-xs xs:text-right">
                        {price.min}-{price.max} ZL
                    </span>
                ) : (
                    <span className="capitalize text-primary font-bold xs:text-xs xs:text-right">
                        {priceUsd !== undefined && priceUsd !== null ? (
                            `${priceUsd} $`
                        ) : (
                            `${price} zl`
                        )}
                    </span>
                )}
            </div>
        </li>
    );
}

PriceItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    priceUsd: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }).isRequired,
    ]),
    price: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired,
        PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }).isRequired,
    ]),
};





