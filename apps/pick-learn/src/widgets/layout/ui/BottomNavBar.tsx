'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { navList } from '../constants';

export default function BottomNavBar() {
    const pathname = usePathname();

    return (
        <nav className='fixed bottom-0 left-0 w-full bg-white md:hidden border-t py-2 z-50'>
            <ul className='flex justify-around items-center'>
                {navList.map(({ icon: Icon, ...item }) => {
                    const isActive = pathname === item.href;
                    const activeClass = isActive
                        ? 'text-primary-100 font-bold'
                        : 'text-gray-600';

                    return (
                        <li
                            key={item.id}
                            className={cn(
                                'flex flex-col items-center text-xs font-medium',
                                activeClass,
                            )}
                        >
                            <Link href={item.href}>
                                {Icon && (
                                    <Icon
                                        className={cn(
                                            'w-5 h-5 mb-1 flex items-center justify-center mx-auto',
                                            activeClass,
                                        )}
                                    />
                                )}
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
