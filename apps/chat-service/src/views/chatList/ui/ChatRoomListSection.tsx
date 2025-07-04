'use client';
import { cn } from '@repo/ui/lib/utils';
import ChatRoomListInfinite from './ChatRoomListInfinite';
import { useVideoCallContext } from '@/features/video-call/model/context';

export default function ChatRoomListSection({
    className,
    chatRoomUuid,
}: {
    className?: string;
    chatRoomUuid?: string;
}) {
    const { isConnected } = useVideoCallContext();

    if (isConnected) return null;

    return (
        <section className={cn('py-6 h-full', className)}>
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>

            <ChatRoomListInfinite chatRoomUuid={chatRoomUuid} />
        </section>
    );
}
