import Link from 'next/link';

import { formatDateByType } from '@/shared/utils/dateFormat';
import { ChatRoomType } from '../model/types';
import { routes } from '@/shared/model/constants/routes';

export default function ChatRoomItem({ chatRoom }: { chatRoom: ChatRoomType }) {
    return (
        <Link
            href={`${routes.messages}?meetingUuid=${chatRoom.chatRoomUuid}`}
            className='flex justify-between gap-3'
            replace
        >
            <p className='grow truncate'>{chatRoom.title}</p>

            <p>{formatDateByType(chatRoom.updatedAt, 'ymd')}</p>
        </Link>
    );
}
