import Link from "next/link";
import { useRouter } from "next/router";

export const LanguageSwitcher = () => {
    const router = useRouter();

    return (
        <div className="flex space-x-2">
            <Link href={router.asPath} locale="pl">
                <a className="bg-gray-200 px-2 py-1 rounded-md">PL</a>
            </Link>
            <Link href={router.asPath} locale="uk">
                <a className="bg-gray-200 px-2 py-1 rounded-md">UK</a>
            </Link>
        </div>
    );
};

