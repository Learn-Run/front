import ChatRoomListSection from './ChatRoomListSection';
import { cn } from '@repo/ui/lib/utils';
import { VideoCallProvider } from '@/features/video-call/model/context';
import { VideoRoom } from '@/features/video-call/ui';
import { ChatWindow } from '@/widgets/chat/ui';

export default function ChatRoomContainer({
    chatRoomUuid,
    memberUuid,
}: {
    chatRoomUuid?: string;
    memberUuid?: string;
}) {
    return (
        <div className='flex gap-4 h-full'>
            <ChatRoomListSection
                className={cn(
                    'max-w-[300px] w-full bg-white border-r border-gray-300 h-full',
                )}
            />

            <VideoCallProvider sessionId={chatRoomUuid}>
                <section className={cn('h-full w-full')}>
                    <VideoRoom />

                    <div
                        className={cn(
                            'h-full overflow-y-scroll scrollbar-hidden p-6',
                        )}
                    >
                        <ChatWindow
                            chatRoomUuid={chatRoomUuid}
                            memberUuid={memberUuid}
                        />
                    </div>
                </section>
            </VideoCallProvider>
        </div>
    );
}
