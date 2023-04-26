import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import { Icon } from '../Icons/Icon';
import { Routes, socialLink } from '../../lib/constant';
import { useThemeSwitcher } from '../../hooks/useThemeSwicher';
import { Logo } from '../Logo';
import { MoonIcon } from '../Icons/MoonIcon';
import { SunIcon } from '../Icons/SunIcon';

const navLinks = [
  {
    href: Routes.HOME,
    label: 'Home',
  },
  {
    href: Routes.ABOUT,
    label: 'O nas',
  },
  {
    href: Routes.GALERY,
    label: 'Galery',
  },
  {
    href: Routes.PRICE,
    label: 'Cennik',
  },
];

export function Navigation() {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (isOpen) {
      html.classList.add('overflow-hidden');
    } else {
      html.classList.remove('overflow-hidden');
    }
  }, [isOpen]);


  // click Outside

  // const dropDawnRef = useRef(null);
  // useEffect(() => {
  //   const handler = (e) => {
  //     if (!dropDawnRef.current.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <header className="w-full px-32 lg:px-16 md:px-6 py-8 font-medium flex items-center justify-between z-50 relative dark:text-light">
      <button
        aria-label="burger-menu"
        type="button"
        className="relative z-50 w-8 h-8 focus:outline-none rounded-full hidden items-center justify-center p-2 lg:flex"
        onClick={handleClick}
      >
        <div
          className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition duration-300 transform ${isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          style={{
            top: 'calc(50% - 1px)',
          }}
        />
        <div
          className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[5px] ' : 'rotate-0'
            }`}
          style={{
            top: 'calc(50% - -4px)',
          }}
        />
        <div
          className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition-all duration-300 transform ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          style={{
            top: 'calc(50% - 6px)',
          }}
        />
      </button>

      <div className="w-full flex items-center justify-between lg:hidden">
        <nav>
          {navLinks.map(link => (
            <CustomLink
              key={link.href}
              href={link.href}
              title={link.label}
              className="mr-4"
            />
          ))}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            className="mr-3 dark:fill-light"
            href={socialLink.instagram}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="insta" />
          </motion.a>
          <motion.a
            className="mr-3 dark:fill-light"
            href={socialLink.facebook}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="facebook" />
          </motion.a>
          <motion.a
            className="mr-0 dark:fill-light"
            href={socialLink.booksy}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="booksy" size={100} />
          </motion.a>
          <button
            type="button"
            className="flex items-center justify-center h-8 w-8 rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
            onClick={() =>
              setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
            }
          >
            {mode === 'dark' ? (
              <MoonIcon className="fill-dark " />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0, y: '-50%', x: '-50%' }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] sm:min-w-[90vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          >
            <nav className="flex flex-col items-center justify-center mb-8">
              {navLinks.map(link => (
                <CustomMobileLink
                  toggle={handleClick}
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  className="mb-4"
                />
              ))}
            </nav>
            <nav className="flex items-center justify-center flex-wrap ">
              <motion.a
                className="mr-3 dark:fill-dark fill-light"
                href={socialLink.instagram}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon name="insta" />
              </motion.a>
              <motion.a
                className="mr-3 dark:fill-dark fill-light"
                href={socialLink.facebook}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon name="facebook" />
              </motion.a>
              <motion.a
                className="mr-0 dark:fill-dark fill-light"
                href={socialLink.booksy}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon name="booksy" size={100} />
              </motion.a>
              <button
                type="button"
                className="flex items-center h-12 w-12 justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
                onClick={() =>
                  setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
                }
              >
                {mode === 'dark' ? (
                  <MoonIcon className="fill-dark " />
                ) : (
                  <SunIcon className="fill-dark" />
                )}
              </button>
            </nav>
          </motion.div>
        </div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

function CustomLink({ href, title, className }) {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
            h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'
          }`}
      />
    </Link>
  );
}

CustomLink.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

function CustomMobileLink({ href, title, className, toggle }) {
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
