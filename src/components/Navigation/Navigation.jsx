import Link from "next/link";
import { Logo, Icon, SunIcon, MoonIcon } from "../../components";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";
import { Routes, socialLink } from "@/pages/constant";
import { useThemeSwitcher } from "@/hooks/useThemeSwicher";

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

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-50 relative dark:text-light">
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
                    onClick={() => setMode(prevMode => prevMode === "light" ? "dark" : "light")}>
                    {
                        mode === "dark" ? <MoonIcon className={"fill-dark "} /> : <SunIcon className={"fill-dark"} />
                    }
                </button>
            </nav>
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
