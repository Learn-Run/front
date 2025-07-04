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
            <div className='flex h-full '>
                <ChatRoomListSection
                    chatRoomUuid={chatRoomUuid}
                    className={cn(
                        'max-w-[300px] w-full bg-white border-r border-gray-300 h-full lg:block hidden',
                    )}
                />

                <VideoRoom />

                <div className='p-6 w-full hidden lg:block'>
                    <ChatWindow
                        chatRoomUuid={chatRoomUuid}
                        memberUuid={memberUuid}
                        className='h-full overflow-y-scroll scrollbar-hidden w-full'
                    />
                </div>

                <ChatMobileMessage
                    className='w-full h-full lg:hidden'
                    chatRoomUuid={chatRoomUuid}
                    memberUuid={memberUuid}
                />
            </div>
        </VideoCallProvider>
    );
}
