import type { ChatRoomContentType } from '@/entities/chatRoom/api/types';
import ChatItem from './ChatItem';
import { cn } from '@repo/ui/lib/utils';
import ChatGroupEmpty from './ChatGroupEmpty';

export default function ChatGroup({
    chatDatas,
    memberUuid,
}: {
    chatDatas: ChatRoomContentType[];
    memberUuid?: string;
}) {
    if (!chatDatas?.length) return <ChatGroupEmpty />;

    return (
        <>
            {chatDatas?.map((chat) => (
                <li
                    key={chat.messageUuid}
                    className={cn('w-full flex', {
                        'justify-end': chat.senderUuid === memberUuid,
                        'justify-start': chat.senderUuid !== memberUuid,
                    })}
                >
                    <ChatItem
                        chat={chat}
                        isMyMessage={chat.senderUuid === memberUuid}
                    />
                </li>
            ))}
        </>
    );
}
