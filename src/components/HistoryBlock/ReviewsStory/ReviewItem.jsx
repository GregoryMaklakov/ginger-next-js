import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import Image from 'next/image'

export function ReviewItem({ avatarImg, name, review, date, className }) {

    return (
        <motion.div
            whileTap={{ scale: 0.975 }}
            className={`${className} p-6 pl-4 xs:pl-2 xs:pt-4 max-w-md bg-gradient-to-b sm:max-w-full from-[#353535] to-[#242323] grid grid-cols-8 rounded-xl  hover:bg-gradient-to-r text-light border border-transparent hover:border-gradientFrom transition-all duration-200`}>
            <div className='avatar col-span-1 mr-4 sm:mr-2' >
                <Image
                    src={avatarImg}
                    alt={name}
                    width={44}
                    height={44}
                    className=" rounded-full"
                />
            </div>
            <div className='content flex flex-col w-full col-span-7 '>
                <div className='flex items-start gap-4'>
                    <h6 className='name text-xs font-bold mb-2'>
                        {name}
                    </h6>
                    <span className='date text-xs text-light/75'>{date}</span>
                </div>
                <p className='review text-start text-sm text-light/75'>
                    {review}
                </p>
            </div>
        </motion.div>
    )
}

ReviewItem.propTypes = {
    className: PropTypes.string,
    avatarImg: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}


