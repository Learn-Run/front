'use client';
import { useEffect, useRef } from 'react';

import ChatGroup from '@/entities/chat/ui/ChatGroup';
import ChatGroupEmpty from '@/entities/chat/ui/ChatGroupEmpty';
import ChatSocketMessage from '@/views/chatList/ui/ChatSocketMessage';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import type { ChatMessageType } from '@/entities/chat/model/types';
import type { ChatRoomContentType } from '@/entities/chatRoom/api/types';

interface ChatWindowMessagesListProps {
    hasMore: boolean;
    pastMessages: ChatRoomContentType[];
    newSocketMessages: ChatMessageType[];
    memberUuid?: string;
    loadMorePastMessages: () => Promise<void>;
}

export default function ChatWindowMessagesList({
    hasMore,
    pastMessages,
    newSocketMessages,
    memberUuid,
    loadMorePastMessages,
}: ChatWindowMessagesListProps) {
    const scrollContainerRef = useRef<HTMLUListElement | null>(null);
    const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

    const loaderRef = useInfiniteScroll(
        () => {
            if (hasMore) {
                loadMorePastMessages();
            }
        },
        { enabled: hasMore, root: scrollContainerRef.current },
    );

    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [newSocketMessages]);

    useEffect(() => {
        const scrollToBottom = () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop =
                    scrollContainerRef.current.scrollHeight;
            }
        };

        scrollToBottom();

        const timeoutId = setTimeout(scrollToBottom, 100);

        return () => clearTimeout(timeoutId);
    }, [pastMessages, newSocketMessages]);

    return (
        <ul
            ref={scrollContainerRef}
            className='w-full flex-grow space-y-4 overflow-y-scroll scrollbar-hidden p-6'
        >
            {hasMore && (
                <li>
                    <div ref={loaderRef} className='h-1' />
                </li>
            )}
            {pastMessages.length <= 0 && newSocketMessages.length <= 0 ? (
                <ChatGroupEmpty />
            ) : (
                <ChatGroup chatDatas={pastMessages} memberUuid={memberUuid} />
            )}
            <ChatSocketMessage
                newSocketMessages={newSocketMessages}
                memberUuid={memberUuid || ''}
            />
            <div ref={endOfMessagesRef} />
        </ul>
    );
}
