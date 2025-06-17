import Image from 'next/image';

import { cn } from '@repo/ui/lib/utils';
import { getWrtierProfileByMemberUuid } from '@/entities/profile/api';
import { S3_BASE_URL } from '@/shared/model/constants';

interface ProfileProps {
    memberUuid: string;
    className?: string;
}

export default async function Profile({ memberUuid, className }: ProfileProps) {
    if (!memberUuid) return;

    const member = await getWrtierProfileByMemberUuid(memberUuid);
    const fallbackImage = S3_BASE_URL + 'baseprofile.webp';
    const imageUrl = member?.profileImage?.imageUrl || fallbackImage;
    const alt = member?.profileImage?.alt || member?.nickname;

    if (!member) return;

    return (
        <div className={cn('flex gap-x-2.5 items-center w-full', className)}>
            <Image
                className='w-7 h-7 rounded-full bg-gray-600/20 object-cover'
                src={imageUrl}
                alt={alt || ''}
                width={28}
                height={28}
            />
            <p className='font-medium'>{member?.nickname}</p>
            <p className='text-xs font-medium text-gray-500'>
                {member?.gradeName}
            </p>
        </div>
    );
}
