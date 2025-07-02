import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { pointMenuItems } from './constants';

export default function PointTab({ type }: { type: string }) {
    return (
        <>
            <nav
                className={cn(
                    'bg-white shadow-md w-full max-w-[230px] h-full flex-col p-4 hidden md:block',
                )}
            >
                <h2 className='text-2xl font-bold text-point-blue-200'>
                    포인트
                </h2>
                <div className='flex flex-col gap-2 py-4 font-medium text-sm hover:no-underline cursor-pointer'>
                    {pointMenuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'text-sm font-medium text-gray-500',
                                (item.href === `/point?type=${type}` ||
                                    (item.href === '/point?type=CHARGE' &&
                                        !type)) &&
                                    'font-bold text-gray-900',
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}
