
import { ParallaxText } from '../../HistoryBlock';
import { socialLink } from '../../../lib';

export function BackgroundBlock() {

    return (
        <div className='relative min-h-screen w-[100vw] dark:bg-dark overflow-hidden bg-no-repeat bg-cover bg-center dark:bg-gallery-dark bg-light'>
            <ParallaxText className="pt-24 z-10 absolute bottom-[150px]" link={socialLink.instagram} baseVelocity={-10} count={20} icon="insta">Join us</ParallaxText>
            <ParallaxText className="z-10 absolute bottom-[250px]" link={socialLink.booksy} baseVelocity={10} count={15}>See more reviews </ParallaxText>
            <span className=" z-1 block w-full absolute top-0 left-0 right-0 z-[1] dark:bg-gradient-to-b from-dark via-transparent to-transparent h-2/3" />
            <span className="z-1 block w-full absolute bottom-0 left-0 right-0 z-[1] dark:bg-gradient-to-t from-dark via-transparent to-transparent h-full" />
        </div>
    )
}
