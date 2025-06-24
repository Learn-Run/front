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
        <div
            className={cn(
                'cursor-pointer text-sm w-full border-b py-4 font-medium',
            )}
        >
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
                <span className='text-xs text-gray-500'>{count}</span>
            </Link>
        </div>
    );
}
