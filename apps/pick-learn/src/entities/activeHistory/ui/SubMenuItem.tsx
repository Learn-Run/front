import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';

type SubMenuItemProps = {
    title: string;
    href: string;
    isActive: boolean;
    count: number;
};

export default function SubMenuItem({
    title,
    href,
    isActive,
    count,
}: SubMenuItemProps) {
    return (
        <li>
            <Link
                href={href}
                replace
                scroll={false}
                className={cn(
                    'text-sm w-full py-2 font-medium',
                    'flex items-center justify-between',
                    isActive ? 'text-primary-100 font-bold' : 'text-gray-700',
                )}
            >
                <span>{title}</span>
                <span className='text-xs font-medium text-gray-500'>
                    {count}
                </span>
            </Link>
        </li>
    );
}
