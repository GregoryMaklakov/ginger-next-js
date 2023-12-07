import PropTypes from "prop-types";
import Image from "next/image";

export function TwoCardInOnePicture({ alt, image, className }) {
    return (

        <Image
            src={image}
            alt={alt}
            width={260}
            height={300}
            className={`${className} border-8 dark:border-dark border-light rounded-3xl`}
            loading="lazy"
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />

    )
}

TwoCardInOnePicture.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
}