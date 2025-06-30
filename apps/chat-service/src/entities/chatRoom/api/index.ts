'use server';
import { getServerSession } from 'next-auth';

import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import type { ChatRoomListType, ChatRoomType } from './types';
import { options } from '@/app/api/auth/[...nextauth]/options';

export const getChatRoomList = async () => {
    const { result } = await fetchData.get<ChatRoomListType>(
        `${services.chat}/api/v1/chat-room/list`,
        {
            requireAuth: true,
        },
    );

    return result;
};

export const getChatRoom = async ({
    chatRoomUuid,
    cursor,
    size = 10,
}: {
    chatRoomUuid?: string;
    cursor: string | null;
    size?: number;
}) => {
    if (!chatRoomUuid) return;

    const session = await getServerSession(options);
    const memberUuid = session?.user.memberUuid;

    const params = new URLSearchParams();
    if (cursor) params.set('cursor', cursor);
    if (size) params.set('size', size.toString());
    if (memberUuid) params.set('senderUuid', memberUuid);

    const { result } = await fetchData.get<ChatRoomType>(
        `${services.chat}/api/v1/chat-room/${chatRoomUuid}/message?${params.toString()}`,
        {
            requireAuth: true,
        },
    );

    return result;
};
