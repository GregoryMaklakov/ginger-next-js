import { PropTypes } from "prop-types";
import { useRef } from "react";
import Link from "next/link";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap,
} from "framer-motion";
import { LogoImage } from "../../Logo";

export function ParallaxText({
    link,
    baseVelocity,
    className,
    children,
    count,
}) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 5], {
        clamp: false,
    });

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 18000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);
    const spanArray = new Array(count).fill(children);

    return (
        <Link
            href={link}
            aria-label="BooksyWeb"
            target="_blank"
            className={`${className} tracking-tight leading-[5.5rem] font-bold m-0 whitespace-nowrap flex flex-nowrap uppercase text-dark dark:text-light dark:hover:text-gradientFrom hover:text-gradientTo group transition-all`}
        >
            <motion.div
                className="max-w-full text-[5rem] xl:text-6xl lg:text-5xl xs:text-3xl whitespace-nowrap flex flex-nowrap"
                style={{ x }}
            >
                {spanArray.map((span, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <span className="flex items-center gap-6" key={index}>
                        {span}
                        <LogoImage
                            size={44}
                            className="mr-6 fill-dark dark:fill-light dark:group-hover:fill-gradientTo group-hover:fill-gradientFrom"
                        // name="year"
                        />
                    </span>
                ))}
            </motion.div>
        </Link>
    );
}

ParallaxText.propTypes = {
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.string,
    count: PropTypes.number,
    baseVelocity: PropTypes.number.isRequired,
};
