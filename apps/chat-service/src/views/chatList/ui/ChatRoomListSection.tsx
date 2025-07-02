'use client';
import { useState, useEffect, useCallback } from 'react';

import { getChatRoomList } from '@/entities/chatRoom/api';
import ChatRoomItem from '@/entities/chatRoom/ui/ChatRoomItem';
import { cn } from '@repo/ui/lib/utils';
import { useInfiniteScroll } from '@/shared/model/hooks/useInfiniteScroll';
import { ChatRoomListContentType } from '@/entities/chatRoom/api/types';

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
        if (cursor === null && chatRooms.length === 0) {
            fetchChatRooms(null);
        }
    }, [chatRooms.length, cursor, fetchChatRooms]);

    const loadMore = useCallback(() => {
        if (loading || !hasMore || !cursor) return;
        fetchChatRooms(cursor);
    }, [loading, hasMore, cursor, fetchChatRooms]);

    const targetRef = useInfiniteScroll(loadMore, {
        enabled: hasMore && !loading,
    });

    if (chatRooms.length === 0 && loading) {
        return (
            <section
                className={cn(
                    'py-6 overflow-y-scroll scrollbar-hidden',
                    className,
                )}
            >
                <h3 className='px-4 text-gray-800 font-semibold'>
                    최근 메세지 목록
                </h3>
                <div className='flex flex-col items-center justify-center h-full gap-4'>
                    {/* Skeleton UI */}
                    <div className='w-[90%] h-14 bg-gray-200 rounded animate-pulse' />
                    <div className='w-[85%] h-14 bg-gray-200 rounded animate-pulse' />
                    <div className='w-[80%] h-14 bg-gray-200 rounded animate-pulse' />
                    <p className='text-gray-400 mt-4'>불러오는 중...</p>
                </div>
            </section>
        );
    }

    if (chatRooms.length === 0) {
        return (
            <section
                className={cn(
                    'py-6 overflow-y-scroll scrollbar-hidden',
                    className,
                )}
            >
                <h3 className='px-4 text-gray-800 font-semibold'>
                    최근 메세지 목록
                </h3>
                <div className='flex flex-col items-center justify-center h-full'>
                    <p className='text-gray-500'>최근 메세지가 없습니다.</p>
                </div>
            </section>
        );
    }

    return (
        <section
            className={cn('py-6 overflow-y-scroll scrollbar-hidden', className)}
        >
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>
            <ul>
                {chatRooms.map((chatList, idx) => (
                    <li
                        key={chatList.chatRoomUuid}
                        className={cn(
                            'border-b border-gray-300 last:border-b-[0] px-4',
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
