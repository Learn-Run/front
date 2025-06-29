import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@repo/ui/lib/utils';
import { jost } from '@/shared/assets/fonts';
import { routes } from '@/shared/model/constants/routes';
import { S3_BASE_URL } from '@/shared/model/constants';
import { getWrtierProfileByMemberUuid } from '@/entities/profile/api';

interface ProfileProps {
    memberUuid: string;
    className?: string;
}

export default async function Profile({ memberUuid, className }: ProfileProps) {
    if (!memberUuid) return;

    const member = await getWrtierProfileByMemberUuid(memberUuid);
    const fallbackImage = S3_BASE_URL + 'baseprofile.webp';
    const imageUrl = member?.profileImage?.imageUrl || fallbackImage;
    const alt = member?.profileImage?.alt || member?.nickname + '프로필 이미지';

    if (!member?.grade?.color) return;
    if (!member) return;

    return (
        <div className={cn('flex items-center gap-x-2.5 w-full', className)}>
            <Link
                href={`${routes.profile}/${memberUuid}`}
                className='flex items-center gap-x-2.5'
            >
                <Image
                    className='w-7 h-7 rounded-full bg-gray-600/20 object-cover '
                    src={imageUrl}
                    alt={alt || ''}
                    width={28}
                    height={28}
                />
                <span className='font-medium'>{member?.nickname}</span>
            </Link>
            <p
                className={cn(
                    jost.className,
                    'text-xs font-medium leading-none place-items-end-safe',
                )}
                style={{ color: member?.grade?.color || '#ffffff' }}
            >
                {member.grade.name}
            </p>
        </div>
    );
}
