import React from 'react'
import { Layount } from '../Layount'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layount className='flex items-center justify-between py-8'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div>
                    <Link href="https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa?do=invite&_branch_match_id=996021091658976533&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9ykMKiozcQlNrkwCAJWJTvUiAAAA" target={"_blank"} className='flex items-center'
                    >Dodaj do ulubionych <span className='text-primary text-2xl px=1'> &#9825; </span> w <span className='underline underline-offset-2 px-1'>Booksy</span></Link>
                </div>
                <Link href='https://www.google.com/maps/place/Grochowska+278,+03-841+Warszawa/@52.2464744,21.065551,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecdb65a714283:0xf4155b06142db871!8m2!3d52.2464744!4d21.0681259!16s%2Fg%2F11c2hzqj75' className='underline underline-offset-2' target={"_blank"}>Grochowska 278</Link>
            </Layount>
        </footer>
    )
}

