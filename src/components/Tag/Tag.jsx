import { PropTypes } from "prop-types";

export function Tag({ category, count, onClick, active }) {
    return (
        <li>
            <button
                type="button"
                onClick={onClick}
                className={`text-md font-bold px-[20px] py-3 transition-all uppercase rounded-[50px]   flex items-center justify-center gap-2 ${active ? "dark:bg-lightGrey dark:text-dark text-light bg-dark" : "dark:bg-darkGrey dark:text-light text-dark bg-lightGrey"}`}
            >
                <span>{category}</span>
                <span>[ {count} ]</span>
            </button>
        </li>
    )
}

Tag.propTypes = {
    category: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};
