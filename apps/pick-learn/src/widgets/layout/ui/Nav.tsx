'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/lib/utils';
import { navList } from '../constants';

export default function Nav({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <nav className={cn('', className)}>
            <ul className='flex items-center justify-center gap-3 xl:gap-6'>
                {navList.map((item) => (
                    <li
                        key={item.id}
                        className={cn(
                            'inline-block mx-2 text-sm font-medium text-gray-600',
                            pathname === item.href
                                ? 'text-primary-100 font-bold'
                                : '',
                        )}
                    >
                        <Link href={item.href}> {item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
