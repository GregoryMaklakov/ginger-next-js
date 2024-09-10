
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AnimatedText } from '../../AnimatedText';

export function Hero() {

    const [isHovered] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            filter: "blur(0px)",
            scale: 1,
            opacity: 1,
            transition: { duration: 1 },
            visibility: 1,
        });
    }, [controls]);

    return (
        <>
            <motion.div
                className="relative min-h-screen w-[100vw]  overflow-hidden bg-no-repeat bg-cover bg-top dark:bg-hero-dark bg-hero-light z-[0]"
                initial={{
                    filter: "blur(12px)",
                    scale: 1.125,
                    opacity: 0,
                    visibility: 0,
                }}
                animate={controls}
            >
                <span className="z-1 block w-full absolute top-0 left-0 right-0 z-[1] dark:bg-gradient-to-b from-dark via-transparent to-transparent h-2/3" />
                <span className="z-1 block w-full absolute bottom-0 left-0 right-0 z-[1] dark:bg-gradient-to-t from-dark via-transparent to-transparent h-full" />
            </motion.div>
            <div className="flex items-center justify-center h-screen w-full max-w-[1920px] mx-auto absolute left-0 right-0">
                <AnimatedText
                    text="Ginger"
                    className={`${isHovered
                        ? "dark:text-light text-light"
                        : "dark:text-primary text-dark"
                        }
                        w-min transition-all duration-500 flex
                        tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] "`}
                />

                <AnimatedText
                    text="Beauty Zone"
                    className={`${isHovered
                        ? "dark:text-primary text-primary"
                        : "dark:text-light text-primary"
                        }
              w-min transition-all duration-500 flex
                        tracking-[2.3rem] 2xl:tracking-[1rem] lg:tracking-[0.5rem] xs:tracking-[0.25rem] z-20"`}
                />
            </div>
        </>
    )
}

