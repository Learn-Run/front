'use client';
import { cn } from '@repo/ui/lib/utils';
import SocketChatItem from '../../../entities/chat/ui/SocketChatItem';
import type { ChatMessageType } from '@/entities/chat/model/types';

interface ChatRoomMessagesProps {
    newSocketMessages: ChatMessageType[];
    memberUuid: string;
}

export default function ChatRoomMessages({
    newSocketMessages,
    memberUuid,
}: ChatRoomMessagesProps) {
    return (
        <>
            {newSocketMessages.map((msg) => (
                <li
                    key={msg.sentAt + msg.content}
                    className={cn('w-full flex', {
                        'justify-end': msg.senderUuid === memberUuid,
                        'justify-start': msg.senderUuid !== memberUuid,
                    })}
                >
                    <SocketChatItem
                        chat={msg}
                        isMyMessage={msg.senderUuid === memberUuid}
                    />
                </li>
            ))}
        </>
    );
}
