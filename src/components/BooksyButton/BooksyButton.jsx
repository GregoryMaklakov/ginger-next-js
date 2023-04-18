import React from 'react'
import CircularText from '../../../public/images/profile/rounded-ginger-1.png'
import Image from 'next/image'
import Link from 'next/link'


export const BooksyButton = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
            <div className='w-48 h-auto flex items-center justify-center relative' >
                <Image src={CircularText} alt='GingerBeautyZone' className='animate-spin-slow' />
                <Link href='https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa?do=invite&_branch_match_id=996021091658976533&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9ykMKiozcQlNrkwCAJWJTvUiAAAA' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark' target={'_black'}>Booksy</Link>
            </div>
        </div>
    )
}

