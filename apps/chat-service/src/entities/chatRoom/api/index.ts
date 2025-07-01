'use server';
import { services } from '@/shared/api/constants';
import { fetchData } from '@/shared/api/instance';
import { ChatRoomType } from '../model/types';

// FIXME: 해당 api는 실제 서버 배포 후에 다시 수정 필요
export const getChatRoom = async (chatRoomUuid?: number) => {
    if (!chatRoomUuid) return;

    const { result } = await fetchData.get<ChatRoomType>(
        `${services.chat}/api/v1/chat/${chatRoomUuid}`,
        {
            requireAuth: true,
        },
    );

    return result;
};
