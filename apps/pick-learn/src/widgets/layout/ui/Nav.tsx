'use client';
import Link from 'next/link';

import { routes } from '@/shared/constants/routes';
import { usePathname } from 'next/navigation';
import { cn } from '@repo/ui/lib/utils';

export default function Nav({ className }: { className?: string }) {
    const pathname = usePathname();

    const navList = [
        { id: 1, name: 'Home', href: routes.home, isAuth: false },
        { id: 2, name: '질문보기', href: routes.post, isAuth: false },
        { id: 3, name: '인기질문', href: routes.popularPosts, isAuth: false },
        { id: 4, name: '질문찾기', href: routes.searchPosts, isAuth: false },
        { id: 5, name: '소통해요', href: routes.chat, isAuth: true },
    ];

    return (
        <nav className={cn(className)}>
            <ul>
                {navList.map((item) => (
                    <li
                        key={item.id}
                        className={cn(
                            'inline-block mr-4 text-sm font-medium',
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
