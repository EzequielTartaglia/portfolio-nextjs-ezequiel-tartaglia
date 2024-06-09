import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Button({ route, text, customFunction, customClasses = "", target, title, icon, isAnimated = true }) {
    const router = useRouter();
    const pathname = usePathname();
    const isActive = pathname === route;

    const handleClick = (e) => {
        if (customFunction && typeof customFunction === 'function') {
            customFunction();
        }
    };

    return route ? (
        <Link href={route} passHref target={target}>
            <button
                className={`py-2 ${text ? 'px-4' : 'px-3 rounded-full'} shadow-md transition duration-300 ${isAnimated && 'hover:-translate-y-1'} flex items-center ${customClasses} ${isActive && 'text-title-active'}`}
                onClick={handleClick}
                title={title}
            >
                {text}{icon && <span className={`${text ? 'ml-2' : ''}`}>{icon}</span>}
            </button>
        </Link>
    ) : (
        <button
            className={`py-2 ${text ? 'px-4' : 'px-3 rounded-full'} shadow-md transition duration-300 ${isAnimated && 'hover:-translate-y-1'} flex items-center ${customClasses} ${isActive && 'text-title-active'}`}
            type='button'
            onClick={handleClick}
            title={title}
        >
            {text}{icon && <span className={`${text ? 'ml-2' : ''}`}>{icon}</span>}
        </button>
    );
}
