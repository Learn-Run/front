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
        <li className={cn('cursor-pointer text-sm w-full py-2 font-medium')}>
            <Link
                href={href}
                replace
                scroll={false}
                className={cn(
                    isActive ? 'text-primary-100 font-bold' : 'text-gray-700',
                    'flex items-center justify-between w-full',
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
