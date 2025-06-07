import Image from 'next/image';

import { memberList, ProfileType, topAnswererList } from '../api/types';
import { cn } from '@repo/ui/lib/utils';

export default function Profile({
    memberUuid,
    className,
}: {
    memberUuid: string;
    className?: string;
}) {
    //FIXME: api 연동 후 수정 필요
    const member =
        memberList.find((member) => member.memberUuid === memberUuid) ||
        (topAnswererList.find(
            (member) => member.memberUuid === memberUuid,
        ) as ProfileType);

    return (
        <div className={cn('flex gap-x-2.5 items-center w-full', className)}>
            <Image
                className='w-7 h-7 rounded-full bg-gray-600/20'
                src={member.profileImage}
                alt={member.alt}
                width={28}
                height={28}
            />
            <p>{member.nickname}</p>
        </div>
    );
}
