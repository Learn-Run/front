'use client';
import { useRouter } from 'next/navigation';

import { createChatRoom } from '@/features/chat/api';
import { Button } from '@repo/ui/components/base/Button';

export default function ChatButton({ memberUuid }: { memberUuid: string }) {
    const router = useRouter();

    const handleChat = async () => {
        const response = await createChatRoom(memberUuid);
        router.push(`/chat/${response.chatRoomUuid}`);
    };

    return (
        <Button
            variant='outline'
            className='w-fit border-primary-100'
            onClick={handleChat}
        >
            채팅하기
        </Button>
    );
}
