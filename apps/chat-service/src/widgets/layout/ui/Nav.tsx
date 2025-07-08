'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/lib/utils';
import { NAVIGATION_ITEMS } from '../model/constants';

export default function Nav({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <nav className={cn('w-full sm:h-full', className)}>
            <ul className='flex sm:flex-col justify-center gap-12 sm:gap-0 sm:justify-start h-full text-xs sm:text-base px-4 sm:px-0'>
                {NAVIGATION_ITEMS.map(
                    ({ id, icon: Icon, label, href, mobileHidden }) => (
                        <li
                            key={id}
                            className={cn(mobileHidden && 'hidden sm:block')}
                        >
                            <Link
                                href={href}
                                className={cn(
                                    'p-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 xl:gap-3 justify-center xl:justify-start text-gray-500 hover:text-gray-900 group transition-colors sm:border-l-6 border-transparent',
                                    {
                                        'text-primary-100 border-primary-100 hover:text-primary-100':
                                            href === '/home'
                                                ? pathname === '/home'
                                                : pathname.startsWith(href),
                                    },
                                )}
                            >
                                <Icon
                                    className={cn(
                                        'text-gray-500 group-hover:text-gray-900 transition-colors min-w-6 min-h-6',
                                        {
                                            'text-primary-100 group-hover:text-primary-100':
                                                href === '/'
                                                    ? pathname === '/'
                                                    : pathname.startsWith(href),
                                        },
                                    )}
                                />
                                <span className='block sm:hidden xl:block'>
                                    {label}
                                </span>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
        </nav>
    );
}
