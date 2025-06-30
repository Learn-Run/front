import Link from 'next/link';

import { formatSmartDate } from '@/shared/utils/dateFormat';
import { routes } from '@/shared/model/constants/routes';
import { Avatar } from '@/entities/profile/ui';
import { getMemberProfile } from '@/entities/profile/api';
import type { ChatRoomListContentType } from '../api/types';

export default async function ChatRoomItem({
    chatRoom,
}: {
    chatRoom: ChatRoomListContentType;
}) {
    const profile = await getMemberProfile(chatRoom.receiverUuid);

    if (!profile) return;

    return (
        <Link
            href={`${routes.messages}?chatRoomUuid=${chatRoom.chatRoomUuid}`}
            className='space-x-1 block py-3'
            replace
            scroll={false}
        >
            <div className='flex gap-3 items-center'>
                <Avatar
                    src={profile.profileImage.imageUrl}
                    alt={profile.profileImage.alt}
                />

                <div className='py-4 text-sm grow min-w-0'>
                    <p className='font-semibold truncate text-gray-800'>
                        {profile.nickname}
                        {chatRoom.lastMessageTime !== null ? (
                            <span className='pl-3 text-xs font-medium text-gray-500 inline-block'>
                                {formatSmartDate(chatRoom.lastMessageTime)}
                            </span>
                        ) : null}
                    </p>

                    <p className='text-gray-700 truncate'>
                        {chatRoom.lastMessage}
                    </p>
                </div>

                {chatRoom.unreadMessageCount !== 0 ? (
                    <p className='text-xs text-gray-600 flex justify-center items-center w-6 h-6 aspect-square rounded-full bg-secondary-100'>
                        {chatRoom.unreadMessageCount}
                    </p>
                ) : null}
            </div>
        </Link>
    );
}
