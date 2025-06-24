import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';

type MenuItemProps = {
    title: string;
    href: string;
    isActive: boolean;
    count: number;
};

export default function MenuItem({
    title,
    href,
    isActive,
    count,
}: MenuItemProps) {
    return (
        <Link
            href={href}
            replace
            scroll={false}
            className={cn(
                'text-sm w-full border-b py-4 font-medium',
                'flex items-center justify-between',
                isActive ? 'text-primary-100 font-bold' : 'text-gray-700',
            )}
        >
            <span>{title}</span>
            <span className='text-xs font-medium text-gray-500'>{count}</span>
        </Link>
    );
}
