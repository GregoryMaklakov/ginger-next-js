import { PropTypes } from "prop-types";
import { useRouter } from "next/router";


export function ButtonBack({ label, className }) {
    const router = useRouter();
    const clickBack = () => {
        router.back();
    }

    return (
        <button
            aria-label="back"
            type="button"
            className={`flex max-w-max items-center gap-[10px] ${className} `}
            onClick={clickBack}
        >
            <span className="rounded-full border-[2px] dark:border-light py-[11px] px-[14px] transition-all ease-in border-dark dark:group-hover:border-light dark:group-hover:bg-light">
                <svg
                    className="stroke-dark transition-all ease-in group-hover:stroke-light dark:stroke-light dark:group-hover:stroke-black"
                    width="7"
                    height="13"
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.5 0.5L0.5 6.5L6.5 12.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
            {label && <span className="font-bold uppercase">{label}</span>}
        </button>
    )
}

ButtonBack.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
};