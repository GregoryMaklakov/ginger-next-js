import Link from "next/link";
import { Icon } from "../Icons";
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const animLink = {
    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "#737A63", "rgba(131,58,180,1)", "#121212"],
    transition: { duration: 1, repeat: Infinity }
}

export const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink href='/' className="w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full"
                whileHover={animLink}
            >
                <Icon name="logo" size={44} />
            </MotionLink>
        </div>
    )
}

