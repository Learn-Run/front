import VideoRoom from '@/features/video-call/ui/VideoRoom';
import { cn } from '@repo/ui/lib/utils';

export default async function ChatRoomSection({
    chatRoomUuid,
    className,
}: {
    chatRoomUuid?: number;
    className?: string;
}) {
    if (!chatRoomUuid) return;

    return (
        <section className={cn(className)}>
            <div className=''>
                <p>{}</p>
            </div>
            <VideoRoom sessionId={chatRoomUuid} />
        </section>
    );
}
