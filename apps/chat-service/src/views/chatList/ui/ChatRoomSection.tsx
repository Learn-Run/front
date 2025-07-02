'use client';
import { ChatWindow } from '@/widgets/chat/ui';

export default function ChatRoomSection({
    isOnSession,
    className,
    chatRoomUuid,
    memberUuid,
}: {
    isOnSession?: boolean;
    className?: string;
    chatRoomUuid?: string;
    memberUuid?: string;
}) {
    if (!chatRoomUuid) return;

    return (
        <ChatWindow
            isOnSession={isOnSession}
            className={className}
            chatRoomUuid={chatRoomUuid}
            memberUuid={memberUuid}
        />
    );
}
