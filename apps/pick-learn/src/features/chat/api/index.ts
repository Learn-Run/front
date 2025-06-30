'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ChatRoomType } from './types';

export const createChatRoom = async (memberUuid: string) => {
    const response = await fetchData.post<ChatRoomType>(
        `${services.chat}/api/v1/chat-room/create`,
        {
            requireAuth: true,
            body: JSON.stringify({
                participantBUuid: memberUuid,
            }),
        },
    );

    return response.result;
};
