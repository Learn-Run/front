'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import ChatWindowMessagesList from '@/widgets/chat/ui/ChatWindowMessagesList';
import { useChat } from '@/widgets/chat/model/useChat';
import ChatWindowInputSection from '@/widgets/chat/ui/ChatWindowInputSection';
import { cn } from '@repo/ui/lib/utils';
import { ChatRoomListSection } from '@/views/chatList/ui';
import { routes } from '@/shared/model/constants/routes';
import { useVideoCallContext } from '../model/context';
import ChatMobileMessageHeader from './ChatMobileMessageHeader';

export default function ChatMobileMessage({
    chatRoomUuid,
    className,
    memberUuid,
}: {
    chatRoomUuid?: string;
    memberUuid?: string;
    className?: string;
}) {
    const router = useRouter();

    const [type, setType] = useState('message');

    const { isConnected } = useVideoCallContext();

    const {
        handleSend,
        hasMore,
        loadMorePastMessages,
        newSocketMessages,
        pastMessages,
    } = useChat(chatRoomUuid, memberUuid);

    const handlePrevStep = () => {
        router.replace(routes.messages);
        setType((prev) => (prev === 'message' ? 'chatRoomList' : 'message'));
    };

    useEffect(() => {
        if (chatRoomUuid) {
            setType('message');
        }
    }, [chatRoomUuid]);

    return (
        <div className={cn('p-6', className)}>
            <div className='bg-white border border-gray-300 rounded-md h-full overflow-hidden flex flex-col'>
                <ChatMobileMessageHeader
                    handlePrevStep={handlePrevStep}
                    type={type}
                    chatRoomUuid={chatRoomUuid}
                />

                {type !== 'message' && !chatRoomUuid ? (
                    <ChatRoomListSection chatRoomUuid={chatRoomUuid} />
                ) : (
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
                )}
            </div>
        </div>
    );
}
