import { useState, useEffect } from "react";
// import CircularText from "../../../public/images/profile/rounded-ginger-1.png";
// import CircularTextDarkTheme from "../../../public/images/profile/rounded-ginger-1.svg";
// import Image from "next/image";
import Link from "next/link";
import { socialLink } from "@/pages/constant";
import { useThemeSwitcher } from "@/hooks/useThemeSwicher";
import { Icon } from "../Icons";

export const BooksyButton = () => {

    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
            <div className="w-48 h-auto flex items-center justify-center relative">

                <Icon name="circleText" size={240} className="animate-spin-slow fill-dark dark:fill-light" />
                <Link
                    href={socialLink.booksy}
                    className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light"
                    target={"_black"}
                >
                    <span className="flex items-center justify-center text-center leading-5">
                        Umów
                    </span>
                </Link>
            </div>
        </div>
    );
};


// export const BooksyButton = () => {

//     const [mode, setMode] = useThemeSwitcher();
//     const [image, setImage] = useState(mode === "dark" ? CircularTextDarkTheme : CircularText);

//     useEffect(() => {
//         setImage(mode === "dark" ? CircularTextDarkTheme : CircularText);
//     }, [mode, setMode]);

//     return (
//         <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
//             <div className="w-48 h-auto flex items-center justify-center relative">

//                 <Image
//                     key={mode}
//                     src={image}
//                     alt="GingerBeautyZone"
//                     className="animate-spin-slow bg-transparent rounded-full dark;"
//                 />
//                 <Link
//                     href={socialLink.booksy}
//                     className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:border-4"
//                     target={"_black"}
//                 >
//                     <span className="flex items-center justify-center text-center leading-5">
//                         Umów
//                     </span>
//                 </Link>
//             </div>
//         </div>
//     );
// };