import Link from "next/link";
import { Logo } from "../Logo";
import { useRouter } from "next/router";
import { Icon } from "../Icons";
import { motion } from "framer-motion";
import { PropTypes } from 'prop-types';

const socialLink = {
    instagram: "https://www.instagram.com/ginger_beauty_zone/",
    facabook: "https://www.facebook.com/profile.php?id=100087405266889",
    booksy:
        "https://booksy.com/pl-pl/162702_ginger-beauty-zone_paznokcie_3_warszawa?do=invite&_branch_match_id=996021091658976533&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FV9ykMKiozcQlNrkwCAJWJTvUiAAAA",
    google:
        "https://www.google.com/maps/uv?pb=!1s0xaf92f0c2cf3a0703%3A0x97c68627d088282!3m1!7e115!4s%2Fmaps%2Fplace%2Fgoogle%2Bginger%2Bbeauty%2Bzone%2F%4052.2463496%2C21.0680135%2C3a%2C75y%2C28.87h%2C90t%2Fdata%3D*213m4*211e1*213m2*211suBLJ3wx-dEKvnH6oH3yM3A*212e0*214m2*213m1*211s0xaf92f0c2cf3a0703%3A0x97c68627d088282%3Fsa%3DX!5zZ29vZ2xlIGdpbmdlciBiZWF1dHkgem9uZSAtINCf0L7QuNGB0Log0LIgR29vZ2xl!15sCgIgAQ&imagekey=!1e2!2suBLJ3wx-dEKvnH6oH3yM3A&hl=ru&sa=X&ved=2ahUKEwi5l_PdsKz-AhVUnosKHbFNAdkQpx96BAhHEA0",
};

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"
                    }`}
            ></span>
        </Link>
    );
};

CustomLink.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
}

export const Navigation = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-50 relative">
            <nav>
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="O nas" className="mx-4" />
                <CustomLink href="/project" title="Nasze prace" className="mx-4" />
                <CustomLink href="/blog" title="Blog" className="ml-4" />
            </nav>
            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    className="mr-3"
                    href={socialLink.instagram}
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Icon name="insta" />
                </motion.a>
                <motion.a
                    className="mr-3"
                    href={socialLink.facabook}
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Icon name="facebook" />
                </motion.a>
                <motion.a
                    className="mr-0"
                    href={socialLink.booksy}
                    target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Icon name="booksy" size={100} />
                </motion.a>
                {/* <Link href={socialLink.google} target={"_blank"}>
                    <Icon name="gmail" />
                </Link> */}
            </nav>
            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    );
};
