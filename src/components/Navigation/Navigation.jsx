import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '../Icons/Icon';
import { socialLink } from '../../lib/constant';
import { Routes } from '../../lib/routes';
import { Logo } from '../Logo';
import { MoonIcon } from '../Icons/MoonIcon';
import { SunIcon } from '../Icons/SunIcon';
import { CursorContext, ThemeContext } from '../../lib';
import { CustomMobileLink } from './CustomMobileLink';
import { CustomLink } from './CustomLink';

export const navLinks = [
  {
    id: 1,
    href: Routes.HOME,
    label: 'Home',
  },
  {
    id: 2,
    href: Routes.ABOUT,
    label: 'O nas',
  },
  {
    id: 3,
    href: Routes.BlOG,
    label: 'Blog',
  },
  {
    id: 4,
    href: Routes.GALLERY,
    label: 'Gallery',
  },
  {
    id: 5,
    href: Routes.PRICE,
    label: 'Cennik',
  },
];

export const socialLinks = [
  { name: "insta", url: socialLink.instagram, icon: "insta", ariaLabel: "instagram" },
  { name: "facebook", url: socialLink.facebook, icon: "facebook", ariaLabel: "facebook" },
  { name: "gmail", url: socialLink.google, icon: "gmail", ariaLabel: "gmail" },
  { name: "booksy", url: socialLink.booksy, icon: "booksy", ariaLabel: "booksy" },
];
export function Navigation() {

  const { mode, toggleTheme } = useContext(ThemeContext);

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

  const { setHoveringLink } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setHoveringLink(true);
  };

  const handleMouseLeave = () => {
    setHoveringLink(false);
  };

  return (
    <header className="w-full max-w-[1920px] mx-auto px-32 lg:px-16 md:px-6 py-8 font-medium flex items-center justify-between z-50 relative dark:text-light">
      <button
        aria-label="burger-menu"
        type="button"
        className="relative z-50 w-8 h-8 focus:outline-none rounded-full hidden items-center justify-center p-2 lg:flex"
        onClick={handleClick}
      >
        <span
          className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition duration-300 transform ${isOpen ? 'rotate-45' : 'rotate-0'
            }`}
          style={{
            top: 'calc(50% - 1px)',
          }}
        />
        <span
          className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition duration-300 transform ${isOpen ? '-rotate-45 -translate-y-[5px] ' : 'rotate-0'
            }`}
          style={{
            top: 'calc(50% - -4px)',
          }}
        />
        <span
          className={`absolute h-0.5 w-6 bg-dark dark:bg-light rounded-full transition-all duration-300 transform ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          style={{
            top: 'calc(50% - 6px)',
          }}
        />
      </button>

      <div className="w-full flex items-center justify-between lg:hidden">
        <nav key="navigation">
          {navLinks.map((link) => (
            <CursorContext.Consumer key={`link-${link.id}`}>
              {({ isHoveringLink }) => (
                <CustomLink
                  key={`link-${link.id}-${link.label}`}
                  href={link.href}
                  title={link.label}
                  className={`${isHoveringLink ? "text-dark bg-light dark:bg-dark dark:text-light" : "text-dark dark:bg-dark dark:text-light"
                    } mr-4 `}
                />
              )}
            </CursorContext.Consumer>
          ))}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              className="mr-3 dark:fill-light"
              href={link.url}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label={link.ariaLabel}
            >
              <Icon name={link.name} />
            </motion.a>
          ))}
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type="button"
            className="flex items-center justify-center h-8 w-8 rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
            onClick={toggleTheme}
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
            className="min-w-[70vw] sm:min-w-[90vw] min-h-[74vh] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md pt-24 pb-16"
          >
            <nav className="flex flex-col items-center justify-center mb-8">
              {navLinks.map(link => (
                <CustomMobileLink
                  toggle={handleClick}
                  key={link.href}
                  href={link.href}
                  title={link.label}
                  className="mb-8 font-semibold"
                />
              ))}
            </nav>
            <nav className="flex items-center justify-center flex-wrap flex-col">
              <div className='flex items-center justify-center mb-12 flex-wrap'>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    className="mr-3 fill-light dark:fill-dark"
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
              <button
                type="button"
                className="flex items-center h-12 w-12 md:h-16 md:w-16 justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
                onClick={toggleTheme}

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
        <Logo onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} />
      </div>
    </header>
  );
}

