import React from 'react'
import { Layount } from '../../components'
import Link from 'next/link'
import { socialLink } from "@/pages/constant";

export const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layount className='flex items-center justify-between py-8'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <Link href={socialLink.booksy} target={"_blank"} className='flex items-center'
                    >Dodaj do ulubionych <span className='text-primary text-2xl px=1'> &#9825; </span> w <span className='underline underline-offset-2 px-1'>Booksy</span></Link>
                </div>
                <Link href={socialLink.google} target={"_blank"}><span className='underline underline-offset-2' >Grochowska 278</span> | Warszawa</Link>
            </Layount>
        </footer>
    )
}

