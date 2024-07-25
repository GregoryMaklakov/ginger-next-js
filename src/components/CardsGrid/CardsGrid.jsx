import React from 'react'
import { CardSmallItem } from './CardSmallItem'
import { CardBigItem } from './CardBigItem'

export function CardsGrid() {
    return (
        <div className='flex flex-col items-center justify-center flex-none flex-nowrap gap-4 h-min p-0 relative w-full'>
            <CardBigItem />
            <div className='flex items-center flex-none flex-nowrap gap-4 h-[600px] justify-center max-w-7xl overflow-hidden p-0 relative w-3/4 xl:w-full'>
                <CardSmallItem />
                <CardSmallItem />
            </div>


        </div>
    )
}

