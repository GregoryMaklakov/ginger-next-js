import Link from "next/link";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CursorContext } from "../../lib";
import { Icon } from "../Icons";

export function ButtonLink({
    href,
    children,
    download,
    target,
    className,
    variant,
    icon,
}) {
    const { setHoveringLink } = useContext(CursorContext);
    const handleMouseEnter = () => {
        setHoveringLink(true);
    };
    const handleMouseLeave = () => {
        setHoveringLink(false);
    };

    const baseClasses =
        "flex items-center justify-center p-2.5 rounded-lg text-lg 2xs:text-sm transition";
    const variantClasses = {
        primary:
            "bg-dark text-light px-6 xs:px-4 font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark dark:bg-light xs:w-full",
        secondary:
            "sx:w-full sm:mt-8 p-2.5 ml-4 xs:ml-0 font-medium capitalize underline dark:text-light text-dark",
        instagram: "text-light px-6 p-3 xs:px-4 font-semibold xs:w-full",
    };
    const gradientStyle =
        variant === "instagram"
            ? {
                background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            }
            : {};

    const selectedClasses = variantClasses[variant] || variantClasses.primary;

    return (
        <Link
            href={href}
            className={`${baseClasses} ${selectedClasses} ${className}`}
            style={gradientStyle}
            download={download}
            target={target}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {icon && <Icon name={icon} size={24} className="ml-2" />}
        </Link>
    );
}

ButtonLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    download: PropTypes.bool,
    target: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "instagram"]),
    icon: PropTypes.string,
};

ButtonLink.defaultProps = {
    download: false,
    target: "_self",
    variant: "primary",
};

export default ButtonLink;
