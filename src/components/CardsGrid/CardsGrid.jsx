import React from 'react'
import { CardSmallItem } from './CardSmallItem'
import { CardBigItem } from './CardBigItem'
import { cardGridData } from '../../lib/cardGridData';

export function CardsGrid() {
    const bigItemData = cardGridData[0];
    const smallItemsData = cardGridData.slice(1);

    return (
        <div className='flex flex-col items-center justify-center flex-none flex-nowrap gap-4 md:gap-2 h-min p-0 relative w-full xl:px-4 xs:px-2'>
            <CardBigItem
                title={bigItemData.title}
                description={bigItemData.description}
                image={bigItemData.image}
            />
            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-2 max-w-7xl p-0 w-3/4 xl:w-full'>
                {smallItemsData.map(item => (
                    <CardSmallItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        link={item.link}
                    />
                ))}
            </div>

        </div>
    )
}