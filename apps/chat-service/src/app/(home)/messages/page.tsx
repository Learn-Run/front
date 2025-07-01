// import { getChatRoom } from '@/entities/chatRoom/api';
import { CHAT_LIST_MOCK } from '@/entities/chatRoom/model/constants';
import ChatRoomListSection from '@/views/chatList/ui/ChatRoomListSection';
import ChatRoomSection from '@/views/chatList/ui/ChatRoomSection';
import { cn } from '@repo/ui/lib/utils';

export default async function ChatRoomPage({
    searchParams,
}: {
    searchParams: Promise<{ chatRoomUuid?: string; isOnSession?: boolean }>;
}) {
    const { chatRoomUuid, isOnSession } = await searchParams;

    // FIXME: 이후 서버 개발이 끝나면 연결할 api
    // const chatRoom = await getChatRoom(chatRoomUuid);
    const chatRoom = CHAT_LIST_MOCK.find(
        (item) => item.chatRoomUuid === chatRoomUuid,
    );

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
                        chatRoom={chatRoom}
                        isOnSession={isOnSession}
                        className=''
                    />
                </div>
            </div>
        </main>
    );
}
