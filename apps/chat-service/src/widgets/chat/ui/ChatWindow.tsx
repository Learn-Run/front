'use client';
import { cn } from '@repo/ui/lib/utils';
import { useChat } from '../model/useChat';
import ChatWindowHeader from './ChatWindowHeader';
import { useVideoCallContext } from '@/features/video-call/model/context';
import ChatWindowMessagesList from './ChatWindowMessagesList';
import ChatWindowInputSection from './ChatWindowInputSection';

interface ChatWindowProps {
    chatRoomUuid?: string;
    memberUuid?: string;
    className?: string;
}

export default function ChatWindow({
    chatRoomUuid,
    memberUuid,
    className,
}: ChatWindowProps) {
    const {
        pastMessages,
        newSocketMessages,
        hasMore,
        handleSend,
        loadMorePastMessages,
    } = useChat(chatRoomUuid, memberUuid);

    const { isConnected } = useVideoCallContext();

    if (!chatRoomUuid || !memberUuid || isConnected) return null;

    return (
        <div className='p-6 w-full'>
            <div
                className={cn(
                    'bg-white border border-gray-300 rounded-md overflow-hidden h-full flex flex-col',
                    'col-span-1',
                    className,
                )}
            >
                <ChatWindowHeader chatRoomUuid={chatRoomUuid} />

                <ChatWindowMessagesList
                    hasMore={hasMore}
                    pastMessages={pastMessages}
                    newSocketMessages={newSocketMessages}
                    memberUuid={memberUuid}
                    loadMorePastMessages={loadMorePastMessages}
                />

                <ChatWindowInputSection
                    handleSend={handleSend}
                    chatRoomUuid={chatRoomUuid}
                    isConnected={isConnected}
                />
            </div>
        </div>
    );
}
