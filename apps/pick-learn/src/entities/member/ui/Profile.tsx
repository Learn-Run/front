import Image from 'next/image';

import { cn } from '@repo/ui/lib/utils';
import { getWrtierProfileByMemberUuid } from '@/entities/profile/api';
import { S3_BASE_URL } from '@/shared/model/constants';
import { jost } from '@/shared/assets/fonts';

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
    console.log('gradename', member?.grade.name);
    console.log('gradeColor', member?.grade.color);

    return (
        <div className={cn('flex items-center gap-x-2.5 w-full', className)}>
            <Image
                className='w-7 h-7 rounded-full bg-gray-600/20 object-cover '
                src={imageUrl}
                alt={alt || ''}
                width={28}
                height={28}
            />
            <p className='font-medium'>{member?.nickname}</p>
            <p
                className={cn(
                    jost.className,
                    'text-xs font-medium leading-none place-items-end-safe',
                )}
                style={{ color: member.grade.color }}
            >
                {member.grade.name}
            </p>
        </div>
    );
}
