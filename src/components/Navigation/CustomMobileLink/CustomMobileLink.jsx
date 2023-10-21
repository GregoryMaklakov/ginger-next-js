import { useRouter } from "next/router";
import { PropTypes } from 'prop-types';


export function CustomMobileLink({ href, title, className, toggle }) {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button
            type="button"
            href={href}
            className={`${className} relative group text-light dark:text-dark`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`
              h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'
                    }`}
            />
        </button>
    );
}

CustomMobileLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    toggle: PropTypes.func,
};
