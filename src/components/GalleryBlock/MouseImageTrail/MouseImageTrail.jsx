import { useAnimate } from "framer-motion";
import { PropTypes } from "prop-types";
import { useRef } from "react";
import Image from "next/image";

export function MouseImageTrail({
    children,
    images,
    renderImageBuffer,
    rotationRange,
}) {
    const [scope, animate] = useAnimate();

    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);

    const calculateDistance = (x1, y1, x2, y2) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    const renderNextImage = () => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `[data-mouse-move-index="${imageIndex}"]`;

        const el = document.querySelector(selector);

        el.style.top = `${lastRenderPosition.current.y}px`;
        el.style.left = `${lastRenderPosition.current.x}px`;
        el.style.zIndex = imageRenderCount.current.toString();
        el.style.opacity = '0';

        animate(
            selector,
            {
                opacity: [0, 1],
                scale: [0.5, 1],
                rotate: [Math.random() * rotationRange, -Math.random() * rotationRange],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        animate(
            selector,
            {
                opacity: [1, 0],
            },
            { ease: "linear", duration: 0.5, delay: 5 }
        );

        imageRenderCount.current += 1;
    };

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        const distance = calculateDistance(
            clientX,
            clientY,
            lastRenderPosition.current.x,
            lastRenderPosition.current.y
        );

        if (distance >= renderImageBuffer) {
            lastRenderPosition.current.x = clientX;
            lastRenderPosition.current.y = clientY;

            renderNextImage();
        }
    };

    return (
        <div
            ref={scope}
            className="relative overflow-hidden w-full min-h-screen flex items-center justify-center"
            onMouseMove={handleMouseMove}
        >
            {children}

            {images.map((img, index) => (
                <Image
                    key={img}
                    className="pointer-events-none absolute left-0 top-0 h-52 w-auto rounded-xl border-2 border-lightGrey bg-dark object-cover opacity-0"
                    src={img}
                    alt={`Mouse move image ${index}`}
                    width={200}
                    height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-mouse-move-index={index}
                    priority={false}
                />
            ))}
        </div>
    );
}

MouseImageTrail.propTypes = {
    children: PropTypes.node,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    renderImageBuffer: PropTypes.number.isRequired,
    rotationRange: PropTypes.number.isRequired,
};

