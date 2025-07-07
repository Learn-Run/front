'use client';
import { useRouter } from 'next/navigation';

import { createChatRoom } from '@/features/chat/api';
import { Button } from '@repo/ui/components/base/Button';
import { cn } from '@repo/ui/lib/utils';

export default function ChatButton({
    memberUuid,
    className,
}: {
    memberUuid: string;
    className?: string;
}) {
    const router = useRouter();

    const handleChat = async () => {
        const response = await createChatRoom(memberUuid);
        router.push(`/chat/messages?chatRoomUuid=${response.chatRoomUuid}`);
    };

    return (
        <Button
            variant='outline'
            className={cn('w-fit border-primary-100', className)}
            onClick={handleChat}
        >
            채팅하기
        </Button>
    );
}
