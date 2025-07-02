import { getServerSession } from 'next-auth';

import { options } from '@/app/api/auth/[...nextauth]/options';
import ChatRoomListSection from '@/views/chatList/ui/ChatRoomListSection';
import ChatRoomSection from '@/views/chatList/ui/ChatRoomSection';
import { cn } from '@repo/ui/lib/utils';

export default async function ChatRoomPage({
    searchParams,
}: {
    searchParams: Promise<{
        chatRoomUuid?: string;
        isOnSession?: boolean;
    }>;
}) {
    const memberUuid = (await getServerSession(options))?.user.memberUuid;

    const { chatRoomUuid, isOnSession } = await searchParams;

    return (
        <main className='bg-gray-100 w-full h-dvh'>
            <div className='grid md:grid-cols-5 h-full'>
                <ChatRoomListSection
                    className={cn(
                        'col-span-1 md:col-span-2 row-span-1 bg-white border-r border-gray-300 h-full',
                        isOnSession ? 'hidden' : 'block',
                    )}
                />

                <div
                    className={cn(
                        'row-span-1 col-span-1 h-full overflow-y-scroll scrollbar-hidden p-6',
                        isOnSession ? 'md:col-span-5' : 'md:col-span-3',
                    )}
                >
                    <ChatRoomSection
                        chatRoomUuid={chatRoomUuid}
                        isOnSession={isOnSession}
                        memberUuid={memberUuid}
                    />
                </div>
            </div>
        </main>
    );
}
