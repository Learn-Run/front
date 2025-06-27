import Link from 'next/link';

import { mobileMenuItems } from './constants';
import { routes } from '@/shared/model/constants/routes';
import { cn } from '@repo/ui/lib/utils';

export default function MobileActiveMenu({
    memberUuid,
    currentType,
}: {
    memberUuid: string;
    currentType: string;
}) {
    return (
        <nav className={cn('sticky md:static py-5 md:hidden')}>
            <ul className='flex justify-center items-center w-full gap-x-3 relative'>
                {mobileMenuItems(memberUuid).map((item, index) => (
                    <li key={index}>
                        <div>
                            <Link
                                href={`${routes.profile}/${memberUuid}?type=${item.type}`}
                                replace
                                scroll={false}
                                className={cn(
                                    'font-medium',
                                    currentType === item.type
                                        ? 'text-primary-100 font-bold'
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
