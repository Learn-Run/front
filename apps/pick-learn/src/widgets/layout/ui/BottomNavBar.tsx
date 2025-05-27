'use client';
import { usePathname } from 'next/navigation';
import { cn } from '@repo/ui/lib/utils';
import Link from 'next/link';

import { routes } from '@/shared/constants/routes';
import { Chat, Home, PopularPost, Search, Post } from '@/shared/assets/icons';

export default function BottomNavBar() {
    const pathname = usePathname();

    const navList = [
        { id: 1, name: 'Home', href: routes.home, isAuth: false, icon: Home },
        {
            id: 2,
            name: '질문보기',
            href: routes.post,
            isAuth: false,
            icon: Post,
        },
        {
            id: 3,
            name: '인기질문',
            href: routes.popularPosts,
            isAuth: false,
            icon: PopularPost,
        },
        {
            id: 4,
            name: '질문찾기',
            href: routes.searchPosts,
            isAuth: false,
            icon: Search,
        },
        {
            id: 5,
            name: '소통해요',
            href: routes.chat,
            isAuth: true,
            icon: Chat,
        },
    ];

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
                            {Icon && (
                                <Icon
                                    className={cn('w-5 h-5 mb-1', activeClass)}
                                />
                            )}
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
