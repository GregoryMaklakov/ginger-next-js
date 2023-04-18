import Link from "next/link";
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const animLink = {
    backgroundColor: ["#121212", "rgb(143, 102, 163)", "rgb(54, 77, 50)", "#453d77", "rgb(143, 102, 163)", "#121212"],
    transition: { duration: 1, repeat: Infinity }
}

export const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink href='/' className="w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full"
                whileHover={animLink}
            >
                <LogoImage size={44} />
            </MotionLink>
        </div>
    )
}


const LogoImage = ({ className, size, color }) => {
    const props = {
        className,
    };
    if (size) {
        props.width = size;
        props.height = size;
    }
    if (color) {
        props.fill = color;
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 46 24"
            {...props}
        >
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1.2, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.2, repeat: Infinity }}
                fill="#D48A59"
                d="M11.736 15.812c-.212-5.328 2.938-5.348 5.63-7.01.699-.432 1.366-.828 1.563-1.584.137-.529.32-2.388.295-2.956-.1-2.327-1.834-3.475-2.896-1.49-.39.727-.543 1.78-1.102 2.097-1.129.64-1.617-.453-2.456-.293-.691.132-1.58.828-1.812 1.313-.288.605-.291 1.861-.555 2.604-.308.866-4.815 6.67 1.333 7.319Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1.4, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#DE996A"
                d="M18.402 21.663c-.319-1.564-1.594-3.194-.735-6.382.297-1.104.69-1.696 1.169-2.497.276-.46.37-.717.717-1.116.34-.391.563-.593.817-.909-.386-.506-.866-1.294-1.024-2.096-.586.242-.663.442-1.198.774-1.063.656-2.474 1.162-3.41 1.738-3.488 2.15-1.575 6.018-1.57 6.078.05.689-.25.475-.11 1.417.243 1.628 1.679 3.873 2.922 3.898.437.009 1.811-.76 2.422-.905Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.7, 1, 0.7],
                    transition: { duration: 1.6, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#D48A59"
                d="M29.883 5.731c-.602.235-.846.58-1.533.933-.51.263-1.026.37-1.547.602-1.043.465-1.645 1.244-1.923 2.609.792.524 1.376 1.785.407 2.696-.503.474-.716.165-1.034.962-.162.407-.285 1.239-.303 1.714-.046 1.244.281 2.327.649 3.379.538 1.54.854 1.07 2.688 1.245.26-2.89.697-7.426 4.09-8.206-.196-.976-.638-1.868-.914-2.932-.26-1.002-.384-2.035-.58-3.001ZM8.297 15.253c-1.513-2.719-.544-3.812.723-6.122 1.45-2.644.055-4.312 3.164-5.302-.98-2.126-5.432.341-6.713 1.91-.889 1.087.137 1.562-.916 2.586-1.782 1.734-.107 5.601 1.48 7.068.627.578 1.407.393 2.262-.14Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 1.2, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#DE996A"
                d="M23.996 19.745c-.167-.998-.743-1.875-.93-3.272-.16-1.21.05-2.292.324-3.384-.099-.098-2.431-1.523-2.509-1.559-.846 1.173-1.886 2.304-2.365 4.249-.407 1.653-.044 4.16.795 5.35 1.46-.602 3.032-.843 4.685-1.384Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.7, 1, 0.7],
                    transition: { duration: 1.4, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#D48A59"
                d="M38.278.266c.071.323.15.258-.16.258-1.157 1.523-2.232 3.234-2.934 5.464-.579 1.837-1.26 5.735-.388 7.454l1.195-4.284c.265-.977.113-1.062 1.002-1.072.312.919-1.042 4.381-1.32 5.657 1.176-.84 2.44-3.445 2.99-5.411.654-2.34.638-5.004.226-7.44l-.116-.626c-.127-.383.066-.116-.376-.212l-.12.212Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.6, 1, 0.6],
                    transition: { duration: 1, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#DE996A"
                d="M30.626 21.507c.703-1.997 1.33-3.072 2.888-4.201.659-.477.931-.387 1.552-.722-.518-.603-1.217-1.175-1.819-1.952l-1.455-2.172c-3.02 1.125-3.678 4.9-3.504 7.787 1.082.372 1.562.81 2.338 1.26Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.7, 1, 0.7],
                    transition: { duration: 1.4, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#D48A59"
                d="M31.418 22.325c1.217.831 2.396 1.34 4.032.241 2.182-1.465 1.963-5.509-.193-5.002-2.09.492-3.575 2.695-3.84 4.76Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.8, 1, 0.8],
                    transition: { duration: 1.3, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#DE996A"
                d="M23.97 9.182c.384-.446.452-1.044.846-1.562.328-.43.733-.762 1.294-1.054 1.098-.573 2.356-.863 3.05-1.602.42-.448.88-2.05-.525-2.18-2.015-.188-3.255 1.053-4.213 1.6.514 3.608-1.432 1.436-2.684 2.49-1.632 1.373 1.254 1.988 2.233 2.308ZM35.738 15.276c2.182.356 4.202.221 6.117-.613 1.337-.582 3.505-2.029 4.074-2.89-2.012-.218-4.342.12-6.07.727-1.5.527-3.711 1.8-4.121 2.776ZM2.902 9.525c-4.81 3.602-.456 8.536 2.585 6.726-.663-.965-1.287-1.268-1.888-2.757-.599-1.486-.58-2.265-.697-3.969ZM11.988 18.692c-3.71 1.347.076 6.524 2.804 4.382-.747-.71-1.18-.903-1.768-1.872-.39-.644-.623-1.857-1.036-2.51Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.6, 1, 0.5],
                    transition: { duration: 1.1, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#D48A59"
                d="M27.519 1.947c.304-.148.117-.046.451-.115.053-.01.246-.032.299-.047.428-.127.055.042.362-.184l-.422-.408c-.232.021-.166.067-.15-.18l-.193-.137c-.286.025-.209.087-.209-.21-1.849-1.788-4.6.304-3.798 2.952.521-.21.914-.68 1.6-1.024.556-.278 1.253-.558 2.06-.647Z"
            />
            <motion.path
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0.9, 1, 0.9],
                    transition: { duration: 1.8, repeat: Infinity, repeatType: "loop" },
                }}
                transition={{ duration: 0.5, repeatDelay: 0.16, repeat: Infinity }}
                fill="#DE915D"
                d="M4.732 5.22c3.405-3.269 2.315-1.802 5.56-3.114C9.231 1.244 7.596.935 6.31 1.757c-1.021.654-2.093 1.695-1.578 3.464Z"
            />
        </svg>
    )
}
