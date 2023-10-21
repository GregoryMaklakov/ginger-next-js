import { useRouter } from "next/router";
import { useContext } from "react";
import { PropTypes } from 'prop-types';
import Link from "next/link";
import { CursorContext } from "../../../lib/context";


export function CustomLink({ href, title, className }) {
    const router = useRouter();
    const { setHoveringLink } = useContext(CursorContext);

    const handleMouseEnter = () => {
        setHoveringLink(true);
    };

    const handleMouseLeave = () => {
        setHoveringLink(false);
    };

    return (
        <Link
            href={href}
            className={`relative group ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title}
            <span
                className={`
              h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'
                    }`}
            />
        </Link>
    )
}


CustomLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};