import ChatRoomListSection from '@/views/chatList/ui/ChatRoomListSection';
import ChatRoomSection from '@/views/chatList/ui/ChatRoomSection';

export default async function ChatRoomPage({
    searchParams,
}: {
    searchParams: Promise<{ chatRoomUuid?: number }>;
}) {
    const { chatRoomUuid } = await searchParams;

    return (
        <main className='bg-gray-100 w-full h-dvh'>
            <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 h-full'>
                <ChatRoomListSection />

                <ChatRoomSection
                    chatRoomUuid={chatRoomUuid}
                    className='col-span-1 bg-blue-100 h-full p-6'
                />
            </div>
        </main>
    );
}
