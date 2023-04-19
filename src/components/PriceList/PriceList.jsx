import { priceListData } from "@/pages/constant";
import PropTypes from 'prop-types';

export const PriceList = () => {
    return (
        <div className="my-32">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Cennik</h2>
            <div className="w-[75%] mx-auto relative flex flex-col">
                {priceListData.map((category) => (
                    <Category
                        key={category.id}
                        name={category.name}
                        items={category.items}
                    />
                ))}
            </div>
        </div>
    );
};

const Category = ({ name, items }) => {
    return (
        <div className="flex flex-col items-center justify-center mb-16">
            <h3 className="font-bold capitalise text-2xl mb-6">{name}</h3>
            <ul className="w-[60%]">
                {items.map((item) => (
                    <PriceItem key={item.id} name={item.name} price={item.price} />
                ))}
            </ul>
        </div>
    );
};

Category.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const PriceItem = ({ name, price }) => {
    return (
        <li>
            <div className="flex items-center justify-between w-full mb-2">
                <p className="font-medium f-wull">{name}</p>
                {typeof price === "object" ? (
                    <span className="capitalize text-primary font-bold">
                        {price.min} - {price.max} zl
                    </span>
                ) : (
                    <span className="capitalize text-primary font-bold">{price} zl</span>
                )}
            </div>
        </li>
    );
};

PriceItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.shape({ min: PropTypes.number.isRequired, max: PropTypes.number.isRequired }).isRequired]),
};
