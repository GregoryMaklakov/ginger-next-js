import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Picture1 from "../../../../public/images/gallery/bg01.jpg";
import Picture2 from "../../../../public/images/gallery/gallery-01-2.webp";
import Picture3 from "../../../../public/images/gallery/gallery-01-3.webp";
import Picture4 from "../../../../public/images/gallery/gallery-02-2.webp";
import Picture5 from "../../../../public/images/gallery/gallery-01-1.webp";



export function ZoomParallax() {
    function getContainerClass(index) {
        switch (index) {
            case 1:
                return "w-[20vw] h-[30vh] top-[30vh]";
            case 2:
                return "w-[20vw] h-[25vh] top-[-28vh]";
            case 3:
                return "w-[20vw] h-[25vh] left-[45vh]";
            case 4:
                return "w-[20vw] h-[25vh] left-[-45vh]";
            case 5:
                return "w-[15vw] h-[15vh] right-[35px]";
            default:
                return "w-[25vw] h-[25vh]";
        }
    }
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    const scales = [
        useTransform(scrollYProgress, [0, 1], [1, 4]), // scale for Picture1
        useTransform(scrollYProgress, [0, 1], [1, 15]), // scale for Picture2
        useTransform(scrollYProgress, [0, 1], [1, 6]), // scale for Picture3
        useTransform(scrollYProgress, [0, 1], [1, 8]), // scale for Picture4
        useTransform(scrollYProgress, [0, 1], [1, 9]), // scale for Picture5
    ];

    const pictures = [
        Picture1,
        Picture2,
        Picture3,
        Picture4,
        Picture5,
    ];

    return (
        <div ref={container} className="h-[300vh] relative w-full">
            <div className="sticky overflow-hidden top-0 h-screen">
                {pictures.map((src, index) => (
                    <motion.div
                        className="absolute w-full h-full flex items-center justify-center rounded-lg"
                        key={index}
                        style={{
                            scale: scales[index]
                        }}
                    >
                        <div className={`relative ${getContainerClass(index)}`}>
                            <Image
                                src={src}
                                fill
                                className="object-cover rounded-lg"
                                alt="image"
                                placeholder="blur"
                            />
                        </div>
                    </motion.div>

                ))}
            </div>
        </div>
    );
}


