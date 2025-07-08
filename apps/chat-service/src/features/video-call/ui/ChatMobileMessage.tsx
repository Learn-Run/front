'use client';
import { useEffect, useState } from 'react';

import ChatWindowMessagesList from '@/widgets/chat/ui/ChatWindowMessagesList';
import { useChat } from '@/widgets/chat/model/useChat';
import ChatWindowInputSection from '@/widgets/chat/ui/ChatWindowInputSection';
import { cn } from '@repo/ui/lib/utils';
import { useVideoCallContext } from '../model/context';
import ChatMobileMessageHeader from './ChatMobileMessageHeader';
import ChatRoomListInfinite from '@/views/chatList/ui/ChatRoomListInfinite';
import VideoRoom from './VideoRoom';

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
    const [tab, setTab] = useState('video');
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

    const handleClickChatRoom = (chatRoomUuid: string) => {
        setType((prev) => (prev === 'message' ? 'chatRoomList' : 'message'));
        setChatRoomUuid(chatRoomUuid);
    };

    useEffect(() => {
        if (chatRoomUuid) {
            setType('message');
        }
    }, [chatRoomUuid]);

    return (
        <div
            className={cn(
                'w-full h-full p-6 overflow-y-scroll scrollbar-hidden',
                !isConnected ? 'md:hidden' : '',
                className,
            )}
        >
            <ul
                className={cn(
                    'max-w-[300px] w-full p-2 flex bg-white rounded-full border border-gray-300 mx-auto mb-6',
                    isConnected ? 'md:hidden' : 'hidden',
                )}
            >
                <li className='w-1/2'>
                    <button
                        onClick={() => setTab('video')}
                        className={cn(
                            'text-center w-full p-3 cursor-pointer rounded-full hover:text-primary-200 active:text-primary-200 transition-all',
                            {
                                'text-primary-200 bg-primary-50':
                                    tab === 'video',
                            },
                        )}
                    >
                        화상 채팅
                    </button>
                </li>
                <li className='w-1/2'>
                    <button
                        onClick={() => setTab('chat')}
                        className={cn(
                            'text-center w-full p-3 cursor-pointer rounded-full hover:text-primary-200 active:text-primary-200 transition-all',
                            {
                                'text-primary-200 bg-primary-50':
                                    tab === 'chat',
                            },
                        )}
                    >
                        채팅
                    </button>
                </li>
            </ul>

            <VideoRoom
                className={cn(tab === 'video' ? 'md:hidden' : 'hidden', 'p-0')}
            />

            <div
                className={cn(
                    'bg-white border border-gray-300 rounded-md flex flex-col',
                    'h-full w-full',
                    isConnected ? 'block md:block' : 'block md:hidden',
                    isConnected && tab !== 'chat' ? 'hidden' : 'block',
                )}
            >
                <ChatMobileMessageHeader
                    type={type}
                    chatRoomUuid={chatRoomUuid}
                    handlePrevStep={handlePrevStep}
                />

                {type === 'message' && chatRoomUuid ? (
                    <>
                        <div className='h-[calc(100%-161px)]'>
                            <ChatWindowMessagesList
                                hasMore={hasMore}
                                loadMorePastMessages={loadMorePastMessages}
                                newSocketMessages={newSocketMessages}
                                pastMessages={pastMessages}
                                memberUuid={memberUuid}
                            />
                        </div>
                        {chatRoomUuid && (
                            <ChatWindowInputSection
                                handleSend={handleSend}
                                chatRoomUuid={chatRoomUuid}
                                isConnected={isConnected}
                            />
                        )}
                    </>
                ) : (
                    <ChatRoomListInfinite
                        chatRoomUuid={chatRoomUuid}
                        handleClickChatRoom={handleClickChatRoom}
                    />
                )}
            </div>
        </div>
    );
}
