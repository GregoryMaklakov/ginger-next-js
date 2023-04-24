import React from 'react'
import Link from 'next/link'
import { Layount } from '../Layount'
import { socialLink } from "../../pages/constant";

export function Footer () {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light'>
            <Layount className='flex items-center justify-between py-8 dark:text-light md:flex-col md:gap-2 xs:text-sm'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <Link href={socialLink.booksy} target="_blank" className='flex items-center xs:text-sm'
                    >Dodaj do ulubionych <span className='text-primary text-2xl px-1 dark:text-primaryDark'> &#9825; </span> w <span className='underline underline-offset-2 px-1'>Booksy</span></Link>
                </div>
                <Link href={socialLink.google} target="_blank"><span className='underline underline-offset-2 xs:text-sm' >Grochowska 278</span> | Warszawa</Link>
            </Layount>
        </footer>
    )
}

