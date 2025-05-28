'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@repo/ui/lib/utils';
import { navList } from '../contants';

export default function Nav({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <nav className={cn('sticky md:static', className)}>
            <ul>
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
