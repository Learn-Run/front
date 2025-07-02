import type { ChatRoomContentType } from '@/entities/chatRoom/api/types';
import ChatItem from './ChatItem';
import { cn } from '@repo/ui/lib/utils';

export default function ChatGroup({
    chatDatas,
    memberUuid,
}: {
    chatDatas: ChatRoomContentType[];
    memberUuid?: string;
}) {
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
