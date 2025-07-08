'use client';
import { useEffect, useState } from 'react';

import ChatWindowMessagesList from '@/widgets/chat/ui/ChatWindowMessagesList';
import { useChat } from '@/widgets/chat/model/useChat';
import ChatWindowInputSection from '@/widgets/chat/ui/ChatWindowInputSection';
import { cn } from '@repo/ui/lib/utils';
import { useVideoCallContext } from '../model/context';
import ChatMobileMessageHeader from './ChatMobileMessageHeader';
import ChatRoomListInfinite from '@/views/chatList/ui/ChatRoomListInfinite';

export default function ChatMobileMessage({
    initChatRoomUuid,
    className,
    memberUuid,
}: {
    initChatRoomUuid?: string;
    memberUuid?: string;
    className?: string;
}) {
    const [type, setType] = useState('message');
    const [chatRoomUuid, setChatRoomUuid] = useState(initChatRoomUuid);

    const { isConnected } = useVideoCallContext();

    const {
        handleSend,
        hasMore,
        loadMorePastMessages,
        newSocketMessages,
        pastMessages,
    } = useChat(chatRoomUuid, memberUuid);

    const handlePrevStep = () => {
        setType((prev) => (prev === 'message' ? 'chatRoomList' : 'message'));
        setChatRoomUuid(undefined);
    };

    useEffect(() => {
        if (chatRoomUuid) {
            setType('message');
        }
    }, [chatRoomUuid]);

    if (!isConnected) return null;

    return (
        <div className={cn('p-6', className)}>
            <div className='bg-white border border-gray-300 rounded-md h-full overflow-hidden flex flex-col'>
                <ChatMobileMessageHeader
                    type={type}
                    chatRoomUuid={chatRoomUuid}
                    handlePrevStep={handlePrevStep}
                />

                {type === 'message' && chatRoomUuid ? (
                    <>
                        <ChatWindowMessagesList
                            hasMore={hasMore}
                            loadMorePastMessages={loadMorePastMessages}
                            newSocketMessages={newSocketMessages}
                            pastMessages={pastMessages}
                            memberUuid={memberUuid}
                        />
                        {chatRoomUuid && (
                            <ChatWindowInputSection
                                handleSend={handleSend}
                                chatRoomUuid={chatRoomUuid}
                                isConnected={isConnected}
                            />
                        )}
                    </>
                ) : (
                    <ChatRoomListInfinite chatRoomUuid={chatRoomUuid} />
                )}
            </div>
        </div>
    );
}
