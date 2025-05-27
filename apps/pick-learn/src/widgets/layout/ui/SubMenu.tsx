'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { cn } from '@repo/ui/lib/utils';
import { postSubMenu } from '../contants';

export default function SubMenu() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category') || 'all';
    const detailCategory = searchParams.get('detailCategory') || '';
    const isActiveMenu = useMemo(() => {
        const activeMenu = postSubMenu.find((item) =>
            item.href.includes(category),
        );

        return activeMenu ? activeMenu.id : null;
    }, [category]);
    console.log('🚀 ~ isActiveMenu ~ isActiveMenu:', isActiveMenu);

    return (
        <nav className={cn('sticky container mx-auto md:static py-5 px-5')}>
            <ul className='flex justify-center items-center w-full'>
                {postSubMenu.map((item) => (
                    <li key={item.id} className='relative'>
                        <div
                            className={cn(
                                'inline-block mx-2 text-sm font-medium text-gray-600',
                                item.href.includes(category)
                                    ? 'text-primary-100 font-bold'
                                    : '',
                            )}
                        >
                            <Link href={item.href}> {item.name}</Link>
                        </div>
                        {item.id === isActiveMenu && (
                            <ul className='absolute left-0 flex items-start justify-start w-[300px] '>
                                {postSubMenu
                                    .find((item) => item.id === isActiveMenu)
                                    ?.detailMenu?.map((detailItem) => (
                                        <li
                                            key={detailItem.id}
                                            className={cn(
                                                'inline-block mr-4 text-sm font-medium text-gray-600',
                                                detailCategory !== '' &&
                                                    detailItem.href.includes(
                                                        detailCategory,
                                                    )
                                                    ? 'text-primary-100 font-bold'
                                                    : '',
                                            )}
                                        >
                                            <Link href={detailItem.href}>
                                                {detailItem.name}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
