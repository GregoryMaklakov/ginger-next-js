import PropTypes from 'prop-types';
import Image from "next/image";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const imagesData = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.gif",
];

export function ColumnsBlock({ className }) {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })


    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.15])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.45])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 0.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * -0.25])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <section className={`${className} main w-full`}>
            <div className="spacer h-[50vh]" />
            <div ref={gallery} className="gallery h-[175vh] sm:h-screen bg-dark overflow-hidden px-12 xl:px-4 xs:px-0">
                <div className="galleryWrapper relative -top-[12vh] h-[200vh] flex items-center justify-center gap-12 xl:gap-8 lg:gap-4 xs:gap-2">
                    <Column images={[imagesData[0], imagesData[1], imagesData[2]]} y={y} />
                    <Column images={[imagesData[3], imagesData[4], imagesData[5]]} y={y2} />
                    <Column images={[imagesData[6], imagesData[7], imagesData[8]]} y={y3} />
                    <Column images={[imagesData[9], imagesData[10], imagesData[11]]} y={y4} />
                </div>
            </div>
            <div className="spacer h-96" />
        </section>
    );
}

function Column({ images, y }) {
    return (
        <motion.div className="column relative h-full w-1/4 min-w-[20%] 2xs:min-w-[34%] flex flex-col gap-12 xl:gap-8 lg:gap-4 xs:gap-2 sm:w-1/3"
            style={{ y }}>
            {images.map((src) => (
                <div key={src} className="imageContainer relative h-1/3 w-full rounded-xl xl:h-1/4 sm:h-1/6">
                    <Image src={`/images/gallery/columns/${src}`} alt={`image${src}`} fill className="object-cover rounded-xl" />
                </div>
            ))}
        </motion.div>
    );
}

Column.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    y: PropTypes.shape({
        current: PropTypes.number.isRequired,
    }).isRequired,
};

ColumnsBlock.propTypes = {
    className: PropTypes.string,
};
