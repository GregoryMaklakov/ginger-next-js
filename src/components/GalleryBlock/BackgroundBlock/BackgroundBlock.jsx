
import { ParallaxText } from '../../HistoryBlock';
import { Routes, socialLink } from '../../../lib';

export function BackgroundBlock() {

    return (
        <div className='relative min-h-screen sm:min-h-[50vh] w-full overflow-hidden bg-no-repeat bg-cover md:bg-contain bg-top bg-home-parallax-dark'>
            <ParallaxText className="pt-24 z-10 absolute bottom-[150px] text-light" link={socialLink.instagram} baseVelocity={-10} count={20} icon="insta">Join our Instagram</ParallaxText>
            <ParallaxText className="z-10 absolute bottom-[250px] text-light" link={Routes.WORK} baseVelocity={10} count={15}>Join our Team</ParallaxText>
            <span className=" z-1 block w-full absolute top-0 left-0 right-0 z-[1] dark:bg-gradient-to-b from-dark via-transparent to-transparent h-2/3" />
            <span className="z-1 block w-full absolute bottom-0 left-0 right-0 z-[1] dark:bg-gradient-to-t from-dark via-transparent to-transparent h-full" />
        </div>
    )
}
