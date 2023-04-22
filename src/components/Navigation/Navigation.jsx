import Link from "next/link";
import { Logo, Icon, SunIcon, MoonIcon } from "../../components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { Routes, socialLink } from "@/pages/constant";
import { useThemeSwitcher } from "@/hooks/useThemeSwicher";
import { useState } from "react";

const navLinks = [
    {
        href: Routes.HOME,
        label: "Home",
    },
    {
        href: Routes.ABOUT,
        label: "O nas",
    },
    {
        href: Routes.GALERY,
        label: "Galery",
    },
    {
        href: Routes.PRICE,
        label: "Cennik",
    },
];

export const Navigation = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-50 relative dark:text-light">
            <button
                className="relative w-8 h-8 focus:outline-none rounded-full hidden items-center justify-center p-2 lg:flex"
                onClick={handleClick}
            >
                <div
                    className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition duration-300 transform ${isOpen ? "rotate-45" : "rotate-0"
                        }`}
                    style={{
                        top: "calc(50% - 1px)",
                    }}
                ></div>
                <div
                    className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition duration-300 transform ${isOpen ? "-rotate-45" : "rotate-0"
                        }`}
                    style={{
                        top: "calc(50% - 1px)",
                    }}
                ></div>
                <div
                    className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition-all duration-300 transform ${isOpen ? "opacity-0" : "opacity-100"
                        }`}
                    style={{
                        top: "calc(50% - 5px)",
                    }}
                ></div>
            </button>

            <div className="w-full flex items-center justify-between lg:hidden">
                <nav>
                    {navLinks.map((link) => {
                        return (
                            <CustomLink
                                key={link.href}
                                href={link.href}
                                title={link.label}
                                className="mr-4"
                            />
                        );
                    })}
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        className="mr-3 dark:fill-light"
                        href={socialLink.instagram}
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon name="insta" />
                    </motion.a>
                    <motion.a
                        className="mr-3 dark:fill-light"
                        href={socialLink.facebook}
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon name="facebook" />
                    </motion.a>
                    <motion.a
                        className="mr-0 dark:fill-light"
                        href={socialLink.booksy}
                        target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Icon name="booksy" size={100} />
                    </motion.a>
                    <button
                        className="flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
                        onClick={() =>
                            setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
                        }
                    >
                        {mode === "dark" ? (
                            <MoonIcon className={"fill-dark "} />
                        ) : (
                            <SunIcon className={"fill-dark"} />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{ scale: 0, opacity: 0, y: "-50%", x: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] sm:min-w-[100vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                    bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
                >
                    <nav className="flex flex-col items-center justify-center mb-8">
                        {navLinks.map((link) => {
                            return (
                                <CustomMobileLink
                                    toggle={handleClick}
                                    key={link.href}
                                    href={link.href}
                                    title={link.label}
                                    className="mb-4"
                                />
                            );
                        })}
                    </nav>
                    <nav className="flex items-center justify-center flex-wrap ">
                        <motion.a
                            className="mr-3 dark:fill-dark fill-light"
                            href={socialLink.instagram}
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon name="insta" />
                        </motion.a>
                        <motion.a
                            className="mr-3 dark:fill-dark fill-light"
                            href={socialLink.facebook}
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon name="facebook" />
                        </motion.a>
                        <motion.a
                            className="mr-0 dark:fill-dark fill-light"
                            href={socialLink.booksy}
                            target={"_blank"}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon name="booksy" size={100} />
                        </motion.a>
                        <button
                            className="flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
                            onClick={() =>
                                setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
                            }
                        >
                            {mode === "dark" ? (
                                <MoonIcon className={"fill-dark "} />
                            ) : (
                                <SunIcon className={"fill-dark"} />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};

const CustomLink = ({ href, title, className }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
            h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
                    }`}
            ></span>
        </Link>
    );
};

CustomLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };
    return (
        <button
            href={href}
            className={`${className} relative group text-light dark:text-dark`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`
            h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
                    }`}
            ></span>
        </button>
    );
};

CustomMobileLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    toggle: PropTypes.func,
};
