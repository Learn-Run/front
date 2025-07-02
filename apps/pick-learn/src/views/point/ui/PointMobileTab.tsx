import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { pointMenuItems } from './constants';

export default function PointMobileTab({ type }: { type: string }) {
    return (
        <nav className={cn('sticky md:static py-5 md:hidden')}>
            <ul className='flex justify-center items-center w-full gap-x-3 relative'>
                {pointMenuItems.map((item) => (
                    <li key={item.href}>
                        <div>
                            <Link
                                href={item.href}
                                replace
                                scroll={false}
                                className={cn(
                                    'font-medium',
                                    item.href === `/point?type=${type}` ||
                                        (item.href === '/point?type=CHARGE' &&
                                            !type)
                                        ? 'text-point-blue-200 font-bold'
                                        : '',
                                )}
                            >
                                {item.title}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
