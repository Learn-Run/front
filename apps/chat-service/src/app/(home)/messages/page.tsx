import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import ChatRoomContainer from '@/views/chatList/ui/ChatRoomContainer';

export default async function ChatRoomPage({
    searchParams,
}: {
    searchParams: Promise<{ chatRoomUuid?: string }>;
}) {
    const { chatRoomUuid } = await searchParams;

    const memberUuid = (await getServerSession(options))?.user.memberUuid;

    return (
        <main className='bg-gray-100 w-full h-dvh'>
            <ChatRoomContainer
                memberUuid={memberUuid}
                chatRoomUuid={chatRoomUuid}
            />
        </main>
    );
}
