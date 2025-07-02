'use client';

import { VideoCallProvider } from '@/features/video-call/model/context';
import VideoRoom from '@/features/video-call/ui/VideoRoom';
import { ChatWindow } from '@/widgets/chat/ui';
import { cn } from '@repo/ui/lib/utils';

export default function ChatRoomSection({
    isOnSession,
    className,
    chatRoomUuid,
    memberUuid,
}: {
    isOnSession?: boolean;
    className?: string;
    chatRoomUuid?: string;
    memberUuid?: string;
}) {
    if (!chatRoomUuid) return;

    return (
        <VideoCallProvider sessionId={chatRoomUuid} isOnSession={!!isOnSession}>
            <section
                className={cn(
                    'h-full',
                    isOnSession ? 'grid grid-cols-2 gap-x-6 ' : '',
                    className,
                )}
            >
                <VideoRoom />

                <ChatWindow
                    isOnSession={isOnSession}
                    className={className}
                    chatRoomUuid={chatRoomUuid}
                    memberUuid={memberUuid}
                />
            </section>
        </VideoCallProvider>
    );
}
