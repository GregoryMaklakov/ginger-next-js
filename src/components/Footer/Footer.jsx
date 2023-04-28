import Link from 'next/link'
import { useContext } from 'react';
import { Layount } from '../Layount'
import { socialLink } from "../../lib/constant";
import { CursorContext } from '../../lib/context';

export function Footer() {
    const { setHoveringLink } = useContext(CursorContext);
    const handleMouseEnter = () => {
        setHoveringLink(true);
    };

    const handleMouseLeave = () => {
        setHoveringLink(false);
    };
    return (
        <footer className='w-full border-t-2 border-solid  border-dark font-medium text-lg dark:border-light'>
            <Layount className='flex items-center justify-between py-6 xl:!p-6 dark:text-light lg:flex-col lg:gap-2 xs:text-sm'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <Link
                        href={socialLink.booksy}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        target="_blank" className='flex items-center xs:text-sm'
                    >Dodaj do ulubionych <span className='text-primary text-2xl px-1 dark:text-primaryDark'> &#9825; </span> w <span className='underline underline-offset-2 px-1'>Booksy</span></Link>
                </div>
                <Link href={socialLink.google}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    target="_blank"><span className='underline underline-offset-2 xs:text-sm' >Grochowska 278</span> | Warszawa</Link>
            </Layount>
        </footer>
    )
}

