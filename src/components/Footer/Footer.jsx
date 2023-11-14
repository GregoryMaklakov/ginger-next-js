import Link from 'next/link'
import { useContext } from 'react';
import { motion } from "framer-motion";
import { socialLink } from "../../lib/constant";
import { CursorContext } from '../../lib/context';
import { CustomLink, navLinks, socialLinks } from '../Navigation';
import { Icon } from '../Icons';
import { LogoImage } from '../Logo';

const MotionLink = motion(Link);
const animLink = {
    backgroundColor: ["#121212", "rgb(143, 102, 163)", "rgb(54, 77, 50)", "#453d77", "rgb(143, 102, 163)", "#121212"],
    transition: { duration: 1, repeat: Infinity }
}

const workingHours = [
    { day: 'Pn-Pt', time: '8:00–21:00' },
    { day: 'Sob', time: '8:00–16:00' },
    { day: 'Niedz', time: 'Zamknięte' },
];


export function Footer() {
    const { setHoveringLink } = useContext(CursorContext);
    const handleMouseEnter = () => {
        setHoveringLink(true);
    };

    const handleMouseLeave = () => {
        setHoveringLink(false);
    };
    return (
        <footer className="w-full max-w-[1920px] z-[100] block mx-auto bg-light dark:bg-dark py-12 px-32 lg:px-16 md:px-6 xs:px-2">
            <div className="min-w-full mx-auto inline-block dark:bg-light bg-dark px-8 py-8 xs:px-4 text-light/75 dark:text-dark rounded-3xl">
                <div className="footer-top grid w-full grid-cols-2 xl:flex xl:flex-col-reverse">
                    <div className="fill-black dark:fill-dark pb-8 col-span-1 ">
                        <MotionLink
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            aria-label="Ginger Beauty Zone Warszawa" href='/'
                            className="bg-dark dark:bg-light text-light"
                            whileHover={animLink}
                        >
                            <LogoImage color="white" className='w-full p-2 fill-black dark:fill-dark/50' />
                        </MotionLink>
                    </div>

                    <div className="w-full col-span-1 grid grid-cols-2 sm:grid-cols-1">
                        <div className="col-span-1 flex flex-col">
                            {navLinks.map(link => (
                                <CustomLink
                                    key={`link-${link.id}-${link.label}`}
                                    href={link.href}
                                    title={link.label}
                                    className="mb-4 hover:underline"
                                />
                            ))}
                        </div>

                        <div className="col-span-1 flex flex-col justify-between pb-8 xl:gap-8">
                            <div className="flex items-end justify-between max-w-[290px] sm:gap-0 mb-6">
                                <div>
                                    <h3 className="font-bold mb-2">Godziny otwarcia</h3>
                                    <ul>
                                        {workingHours.map((schedule) => (
                                            <li key={schedule.day}>{schedule.day}</li>
                                        ))}
                                    </ul>
                                </div>
                                <ul>
                                    {workingHours.map((schedule) => (
                                        <li key={schedule.day}>{schedule.time}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex  items-center flex-col gap-6 self-start">
                                <div className="flex items-center self-start flex-wrap">
                                    {socialLinks.map(link => (
                                        <motion.a
                                            key={link.name}
                                            className="mr-3 dark:fill-dark/75 fill-light/75  md:w-11 md:h-11 "
                                            href={link.url}
                                            target="_blank"
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                            aria-label={link.ariaLabel}
                                        >
                                            <Icon name={link.name} size={44} />
                                        </motion.a>
                                    ))}
                                </div>
                                <Link href="tel:48510001772" className="self-start">
                                    <span className="hover:underline"> tel: +48 510 001 772</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom flex items-center justify-between pt-8 border-t-[1px] dark:border-t-dark/25 border-t-light/25 lg:flex-col lg:gap-3">
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                    <Link
                        href={socialLink.googleReview}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        target="_blank"
                        className="flex items-center "
                    >
                        Zostaw opinię{" "}
                        <span className="text-primary text-2xl px-1 dark:text-primaryDark">
                            {" "}
                            &#9825;{" "}
                        </span>{" "}
                        в <span className="underline underline-offset-2 px-1">Google</span>
                    </Link>
                    <Link
                        href={socialLink.google}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        target="_blank"
                    >
                        <span className="underline underline-offset-2">
                            Grochowska 278, 03-841
                        </span>
                    </Link>
                </div>
            </div>
        </footer >
    )
}
