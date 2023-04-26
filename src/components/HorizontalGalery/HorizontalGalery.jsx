import { useEffect, useRef } from "react";
import Image from 'next/image';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export function HorizontalGalery() {

    const scroller = useRef();
    const skills = useRef();

    useEffect(() => {

        const skillSet = gsap.utils.toArray('.skill-set');

        const to = gsap.to(skillSet, {
            xPercent: () => -100 * (skillSet.length - 1),
            ease: 'none',
            scrollTrigger: {
                trigger: scroller.current,
                markers: false,
                pin: true,
                pinSpacing: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
                snap: 1 / (skillSet.length - 1),

                end: () => `+=${window.innerWidth}`,
            },
        });
        return () => {
            to.kill();
        };
    }, []);

    return (
        <div className="overflow-hidden flex">
            <div className="overflow-hidden ">
                <div
                    id="skills"
                    ref={scroller}
                    className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-light dark:bg-dark relative h-screen"
                >
                    <section
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <Image
                            src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="nails"
                            fill
                            cover
                            className="max-w-[50vw] max-h-[60vh] m-auto"
                        />
                    </section>
                    <section
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <Image
                            src="https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="2ndimage"
                            fill
                            contain
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                    </section>
                    <section
                        ref={skills}
                        className="skill-set px-12 w-screen h-full bg-transparent ns-horizontal-section__item flex items-center z-50"
                    >
                        <Image
                            src="https://images.pexels.com/photos/1089194/pexels-photo-1089194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="2ndimage"
                            fill
                            contain
                            className="max-w-[70vw] max-h-[60vh] m-auto"
                        />
                    </section>
                </div>
            </div>
        </div>
    )
}

