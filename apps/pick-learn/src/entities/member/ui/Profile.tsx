import Image from 'next/image';

import { ProfileType } from '../api/types';
import { cn } from '@repo/ui/lib/utils';

export default function Profile({
    item,
    className,
}: {
    item: ProfileType;
    className?: string;
}) {
    return (
        <div className={cn('flex gap-x-2.5 items-center w-full', className)}>
            <Image
                className='w-7 h-7 rounded-full bg-gray-600/20'
                src={item.profileImage}
                alt={item.alt}
                width={28}
                height={28}
            />
            <p>{item.nickname}</p>
        </div>
    );
}
