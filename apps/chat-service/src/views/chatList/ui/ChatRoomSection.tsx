'use client';
import ChatGroup from '@/entities/chat/ui/ChatGroup';
import { ChatRoomType } from '@/entities/chatRoom/model/types';
import { VideoCallProvider } from '@/features/video-call/model/context';
import CreateChatForm from '@/features/video-call/ui/CreateChatForm';
import StartVideoButton from '@/features/video-call/ui/StartVideoButton';
import VideoRoom from '@/features/video-call/ui/VideoRoom';
import { formatDate } from '@/shared/utils/dateFormat';
import { cn } from '@repo/ui/lib/utils';

export default function ChatRoomSection({
    chatRoom,
    isOnSession,
    className,
}: {
    chatRoom?: ChatRoomType;
    isOnSession?: boolean;
    className?: string;
}) {
    if (!chatRoom) return;

    return (
        <VideoCallProvider sessionId={chatRoom.chatRoomUuid}>
            <section
                className={cn(
                    'h-full',
                    isOnSession ? 'grid grid-cols-2 gap-x-6 ' : '',
                    className,
                )}
            >
                <VideoRoom />

                <div
                    className={cn(
                        'bg-white border border-gray-300 rounded-md overflow-hidden h-full',
                        'col-span-1',
                    )}
                >
                    <div className='flex items-center justify-between px-4 py-3 border-b border-gray-300'>
                        <div>
                            <h3 className='font-medium text-gray-900'>
                                {chatRoom.title}
                            </h3>
                            <p className='text-xs font-medium text-gray-500'>
                                {formatDate(chatRoom.createdAt)}
                            </p>
                        </div>

                        <StartVideoButton sessionId={chatRoom.chatRoomUuid} />
                    </div>

                    <ChatGroup />

                    <CreateChatForm />
                </div>
            </section>
        </VideoCallProvider>
    );
}
