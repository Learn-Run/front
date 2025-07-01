'use client';
import Link from 'next/link';

import { formatSmartDate } from '@/shared/utils/dateFormat';
import { ChatRoomType } from '../model/types';
import { routes } from '@/shared/model/constants/routes';
import { Avatar } from '@/entities/profile/ui';
// import { getMemberProfile } from '@/entities/profile/api';
import { PROFILE } from '@/entities/profile/model/constants';

export default function ChatRoomItem({ chatRoom }: { chatRoom: ChatRoomType }) {
    // const profile = await getMemberProfile(chatRoom.participantUuid);
    const profile = PROFILE;

    return (
        <Link
            href={`${routes.messages}?chatRoomUuid=${chatRoom.chatRoomUuid}`}
            className='space-x-1 block'
            replace
            scroll={false}
        >
            <div className='flex gap-3 items-center'>
                <Avatar
                    src={profile.profileImage.imageUrl}
                    alt={profile.profileImage.alt}
                />

                <div className='py-4 text-sm grow min-w-0'>
                    <p className='font-semibold truncate'>
                        {profile.nickname}
                        <span className='pl-3 text-xs font-medium text-gray-500 inline-block'>
                            {formatSmartDate(chatRoom.updatedAt)}
                        </span>
                    </p>
                    <p className='truncate'>{chatRoom.title}</p>
                    <p className='text-gray-700 truncate'>
                        {chatRoom.lastMessage}
                    </p>
                </div>
            </div>
        </Link>
    );
}
