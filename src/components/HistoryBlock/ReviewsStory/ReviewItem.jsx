import Image from 'next/image'
import { PropTypes } from 'prop-types';

export function ReviewItem({ avatarImg, name, review, date, className }) {

    return (
        <div className={`${className} p-6 max-w-md bg-gradient-to-b from-[#353535] to-[#242323] grid grid-cols-8 rounded-xl  hover:bg-gradient-to-r text-light border border-transparent hover:border-gradientFrom `}>
            <div className='avatar col-span-1 mr-4' >
                <Image
                    src={avatarImg}
                    alt={name}
                    width={44}
                    height={44}
                    className="mr-4 rounded-full"
                />
            </div>
            <div className='content flex flex-col w-full col-span-7 '>
                <div className='flex items-start gap-4'>
                    <h6 className='name text-xs font-bold mb-2'>
                        {name}
                    </h6>
                    <span className='date text-xs text-light/75'>{date}</span>
                </div>
                <p className='review text-start text-sm  text-light/75'>
                    {review}
                </p>
            </div>
        </div>
    )
}

ReviewItem.propTypes = {
    className: PropTypes.string,
    avatarImg: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}


