'use client';
import { useState, useEffect, useCallback } from 'react';

import { getChatRoomList } from '@/entities/chatRoom/api';
import ChatRoomItem from '@/entities/chatRoom/ui/ChatRoomItem';
import { cn } from '@repo/ui/lib/utils';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import { ChatRoomListContentType } from '@/entities/chatRoom/api/types';
import ChatRoomListSkeleton from '@/entities/chatRoom/ui/ChatRoomListSkeleton';
import ChatRoomListEmpty from '@/entities/chatRoom/ui/ChatRoomListEmpty';

export default function ChatRoomListSection({
    className,
}: {
    className?: string;
}) {
    const [chatRooms, setChatRooms] = useState<ChatRoomListContentType[]>([]);
    const [cursor, setCursor] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchChatRooms = useCallback(
        async (nextCursor: string | null = null) => {
            if (loading) return;
            setLoading(true);

            const res = await getChatRoomList({ cursor: nextCursor, size: 10 });

            if (res?.content) {
                setChatRooms((prev) => {
                    const all = [...prev, ...res.content];
                    const unique = Array.from(
                        new Map(
                            all.map((item) => [item.chatRoomUuid, item]),
                        ).values(),
                    );
                    return unique;
                });
                setHasMore(res.hasNext);
                setCursor(res?.nextCursor || null);
            } else {
                setHasMore(false);
            }

            setLoading(false);
        },
        [loading],
    );

    useEffect(() => {
        fetchChatRooms(null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadMore = useCallback(() => {
        if (loading || !hasMore || !cursor) return;
        fetchChatRooms(cursor);
    }, [loading, hasMore, cursor, fetchChatRooms]);

    const targetRef = useInfiniteScroll(loadMore, {
        enabled: hasMore && !loading,
    });

    if (chatRooms.length === 0 && loading) {
        return (
            <ChatRoomListSkeleton
                className={cn(
                    'py-6 overflow-y-scroll scrollbar-hidden',
                    className,
                )}
            />
        );
    }

    if (chatRooms.length === 0) {
        return (
            <ChatRoomListEmpty
                className={cn(
                    'py-6 overflow-y-scroll scrollbar-hidden',
                    className,
                )}
            />
        );
    }

    return (
        <section className={cn('py-6 h-full', className)}>
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>
            <ul className='h-full overflow-y-scroll scrollbar-hidden'>
                {chatRooms.map((chatList, idx) => (
                    <li
                        key={chatList.chatRoomUuid}
                        className={cn(
                            'border-b border-gray-300 last:border-b-[0] px-4 block',
                        )}
                    >
                        <ChatRoomItem chatRoom={chatList} />
                        {idx === chatRooms.length - 1 && (
                            <div ref={targetRef} style={{ height: 1 }} />
                        )}
                    </li>
                ))}
            </ul>
            {loading && (
                <div className='text-center py-2 text-gray-400'>
                    불러오는 중...
                </div>
            )}
        </section>
    );
}
