'use client';
import { useEffect, useRef } from 'react';

import { cn } from '@repo/ui/lib/utils';
import { useChat } from '../model/useChat';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import { CreateChatForm, StartVideoButton } from '@/features/video-call/ui';
import ChatGroup from '@/entities/chat/ui/ChatGroup';
import ChatRoomMessages from '@/views/chatList/ui/ChatRoomMessages';

interface ChatWindowProps {
    chatRoomUuid?: string;
    memberUuid?: string;
    isOnSession?: boolean;
    className?: string;
}

export default function ChatWindow({
    chatRoomUuid,
    memberUuid,
}: ChatWindowProps) {
    const {
        pastMessages,
        newSocketMessages,
        hasMore,
        handleSend,
        loadMorePastMessages,
    } = useChat(chatRoomUuid, memberUuid);

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

    if (!chatRoomUuid || !memberUuid) return null;

    return (
        <div
            className={cn(
                'bg-white border border-gray-300 rounded-md overflow-hidden h-full flex flex-col',
                'col-span-1',
            )}
        >
            <div className='flex items-center justify-between px-4 py-3 border-b border-gray-300 flex-shrink-0'>
                <h3 className='text-gray-800 font-semibold'>채팅방</h3>
                <StartVideoButton sessionId={chatRoomUuid} />
            </div>

            <ul
                ref={scrollContainerRef}
                className='w-full flex-grow space-y-4 overflow-y-scroll scrollbar-hidden p-6'
            >
                {hasMore && (
                    <li>
                        <div ref={loaderRef} className='h-1' />
                    </li>
                )}
                <ChatGroup chatDatas={pastMessages} memberUuid={memberUuid} />

                <ChatRoomMessages
                    newSocketMessages={newSocketMessages}
                    memberUuid={memberUuid}
                />
                <div ref={endOfMessagesRef} />
            </ul>

            <div className='flex-shrink-0'>
                <CreateChatForm
                    handleSend={(input: string) => handleSend(input)}
                />
            </div>
        </div>
    );
}
