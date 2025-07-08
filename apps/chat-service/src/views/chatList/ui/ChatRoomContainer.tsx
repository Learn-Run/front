import ChatRoomListSection from './ChatRoomListSection';
import { cn } from '@repo/ui/lib/utils';
import { VideoCallProvider } from '@/features/video-call/model/context';
import { VideoRoom } from '@/features/video-call/ui';
import { ChatWindow } from '@/widgets/chat/ui';
import ChatMobileMessage from '@/features/video-call/ui/ChatMobileMessage';

export default function ChatRoomContainer({
    chatRoomUuid,
    memberUuid,
}: {
    chatRoomUuid?: string;
    memberUuid?: string;
}) {
    return (
        <VideoCallProvider sessionId={chatRoomUuid}>
            <div className='flex h-full overflow-y-hidden'>
                <ChatRoomListSection
                    chatRoomUuid={chatRoomUuid}
                    className={cn(
                        'max-w-[300px] w-full bg-white border-r border-gray-300 h-full hidden md:block',
                    )}
                />

                <VideoRoom className='hidden md:block' />

                <ChatWindow
                    chatRoomUuid={chatRoomUuid}
                    memberUuid={memberUuid}
                    className='h-full overflow-y-scroll scrollbar-hidden w-full'
                />

                <ChatMobileMessage
                    className=''
                    initChatRoomUuid={chatRoomUuid}
                    memberUuid={memberUuid}
                />
            </div>
        </VideoCallProvider>
    );
}
