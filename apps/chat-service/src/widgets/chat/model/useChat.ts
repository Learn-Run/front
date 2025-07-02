'use client';
import { useEffect, useState } from 'react';

import { getChatRoom } from '@/entities/chatRoom/api';
import { useStompClient } from '@/shared/model/hooks/useStompClient';
import type { ChatMessageType } from '@/entities/chat/model/types';
import type { ChatRoomContentType } from '@/entities/chatRoom/api/types';

export const useChat = (chatRoomUuid?: string, memberUuid?: string) => {
    const [pastMessages, setPastMessages] = useState<ChatRoomContentType[]>([]);
    const [newSocketMessages, setNewSocketMessages] = useState<
        ChatMessageType[]
    >([]);

    const [cursor, setCursor] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const { connect, sendMessage, disconnect } = useStompClient();

    useEffect(() => {
        if (chatRoomUuid) {
            const getInitialMessages = async () => {
                const res = await getChatRoom({
                    chatRoomUuid,
                    cursor: null,
                    size: 10,
                });
                if (!res) return;

                setPastMessages((prev) => {
                    const all = [...prev, ...res.content];
                    const unique = Array.from(
                        new Map(
                            all.map((item) => [item.messageUuid, item]),
                        ).values(),
                    );
                    return unique;
                });
                setCursor(res.nextCursor || null);
                setHasMore(res.hasNext || false);
            };
            getInitialMessages();
        }
    }, [chatRoomUuid]);

    useEffect(() => {
        if (memberUuid && chatRoomUuid) {
            connect({
                senderUuid: memberUuid,
                chatRoomUuid,
                onMessage: (msg) => {
                    const payload: ChatMessageType = JSON.parse(msg.body);
                    setNewSocketMessages((prev) => [...prev, payload]);
                },
            });
            return () => disconnect();
        }
    }, [memberUuid, chatRoomUuid, connect, disconnect]);

    const handleSend = (input: string) => {
        if (!input.trim() || !memberUuid || !chatRoomUuid) return;
        sendMessage(memberUuid, chatRoomUuid, input);
    };

    const loadMorePastMessages = async () => {
        if (!chatRoomUuid || !cursor || !hasMore) return;

        const res = await getChatRoom({
            chatRoomUuid,
            cursor,
            size: 10,
        });
        if (!res) return;

        const morePastMessages = res.content;

        setPastMessages((prev) => {
            const all = [...morePastMessages, ...prev];
            const unique = Array.from(
                new Map(all.map((item) => [item.messageUuid, item])).values(),
            );
            return unique;
        });
        setCursor(res.nextCursor || null);
        setHasMore(res.hasNext || false);
    };

    return {
        pastMessages,
        newSocketMessages,
        hasMore,
        handleSend,
        loadMorePastMessages,
    };
};
