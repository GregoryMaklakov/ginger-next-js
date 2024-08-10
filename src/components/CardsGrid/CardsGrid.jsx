import React from 'react'
import { useTransform, motion } from 'framer-motion';
import { PropTypes } from 'prop-types';
import { CardSmallItem } from './CardSmallItem'
import { CardBigItem } from './CardBigItem'
import { cardGridData } from '../../lib';
import { GridIcon } from '../Icons';
import { ButtonLink } from '../ButtonLink';
import { StoryLine, TertiaryStoryText } from '../HistoryBlock';

export function CardsGrid({ scrollYProgress }) {
    const bigItemData = cardGridData[0];
    const smallItemsData = cardGridData.slice(1);

    const scale = useTransform(scrollYProgress, [0, 0.4,], [0.8, 1]);

    return (
        <motion.div style={{ scale }} className='relative h-min-content flex flex-col items-center justify-center flex-none flex-nowrap gap-4 md:gap-2  p-0 w-full xl:px-4 xs:px-2'>
            <CardBigItem
                title={bigItemData.title}
                description={bigItemData.description}
                image={bigItemData.image}
                className="z-10"
            />
            <div className='grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-2 max-w-7xl p-0 w-3/4 xl:w-full z-10'>
                {smallItemsData.map(item => (
                    <CardSmallItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
            <div className='absolute right-[-140px] top-0 z-0 translate-x-1 rotate-45'>
                <GridIcon size={1200} className='hidden xl:block' />
            </div>
            <StoryLine />

            <TertiaryStoryText
                className="leading-[5.25rem] max-w-7xl lg:leading-10 pt-24 relative font-bold text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl z-10"
                textData="Zyskaj 20% zniżki na pierwszą usługę!"
                gradientWord="zniżki"
            />
            <div className="flex items-center pb-12 pt-10 xs:justify-start sm:flex-col xs:w-full lg:p-16 md:p-12 sm:p-6 max-w-7xl z-10">
                <ButtonLink
                    variant="primary"
                    href="/ginger-sale.pdf"
                    target="_blank"
                    download
                    icon="linkArrow"
                >
                    Odbierz zniżkę 20%
                </ButtonLink>
                <ButtonLink
                    variant="secondary"
                    href="tel:48510001772"
                >
                    Zadzwoń
                </ButtonLink>
            </div>
        </motion.div>
    )
}
CardsGrid.propTypes = {
    scrollYProgress: PropTypes.shape({
        get: PropTypes.func.isRequired
    }).isRequired
};