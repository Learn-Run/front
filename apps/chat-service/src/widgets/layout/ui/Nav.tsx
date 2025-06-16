'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/src/lib/utils';
import { NAVIGATION_ITEMS } from '../model/constants';

export default function Nav({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <nav className={cn('w-full sm:h-full', className)}>
            <ul className='flex sm:flex-col justify-between sm:justify-start h-full text-xs sm:text-base px-4 sm:px-0'>
                {NAVIGATION_ITEMS.map(
                    ({ id, icon: Icon, label, href, mobileHidden }) => (
                        <li
                            key={id}
                            className={cn(mobileHidden && 'hidden sm:block')}
                        >
                            <Link
                                href={href}
                                className={cn(
                                    'px-4 py-4 sm:py-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-500 hover:text-gray-900 group transition-colors sm:border-l-6 border-transparent',
                                    {
                                        'text-primary-100  border-primary-100 hover:text-primary-100':
                                            pathname === href,
                                    },
                                )}
                            >
                                <Icon
                                    className={cn(
                                        'text-gray-500 group-hover:text-gray-900 transition-colors w-6 h-6',
                                        {
                                            'text-primary-100 group-hover:text-primary-100':
                                                pathname === href,
                                        },
                                    )}
                                />
                                {label}
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </nav>
    );
}
