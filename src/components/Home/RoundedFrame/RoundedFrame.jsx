import Image from "next/image";
import { PropTypes } from "prop-types";

export function RoundedFrame({ alt, src, size, variant }) {

    const sizeClasses = {
        small: "w-16 h-[100px] 2xl:h-[66px] 2xl:w-8",
        medium: "w-20 h-[100px] 2xl:h-[66px] 2xl:w-12",
        large: "w-40 h-[100px] 2xl:h-[66px] 2xl:w-20",
        videoHeight: "w-28 h-40",
    };
    const sizeClass = sizeClasses[size] || sizeClasses.medium;

    return (
        <div className={`${sizeClass} flex items-center justify-center p-0 overflow-hidden w`}>
            <div className="relative overflow-visible w-full h-full rounded-[2rem]">
                <div className="absolute rounded-[2rem] inset-0 aspect-auto">
                    {variant === "image" ? (
                        <Image
                            className="block w-full h-full rounded-[2rem] object-cover object-center"
                            alt={alt}
                            src={src}
                            width={300}
                            height={300}
                        />
                    ) : (
                        <video
                            className="block w-full h-full rounded-[2rem] object-cover object-center"
                            width={300}
                            height={300}
                            autoPlay
                            loop
                            preload="true"
                            muted
                            playsInline>
                            <source src={src} alt={alt} type="video/mp4" />
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
}

RoundedFrame.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "medium", "large", "videoHeight"]),
    variant: PropTypes.oneOf(["image", "video"]).isRequired,

};
RoundedFrame.defaultProps = {
    size: "medium",
};