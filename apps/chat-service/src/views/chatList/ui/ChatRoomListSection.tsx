import { getChatRoomList } from '@/entities/chatRoom/api';
import ChatRoomItem from '@/entities/chatRoom/ui/ChatRoomItem';
import { cn } from '@repo/ui/lib/utils';

export default async function ChatRoomListSection({
    className,
}: {
    className?: string;
}) {
    const chatRoomList = await getChatRoomList();

    return (
        <section
            className={cn('py-6 overflow-y-scroll scrollbar-hidden', className)}
        >
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>
            <ul>
                {chatRoomList.content.map((chatList) => (
                    <li
                        key={chatList.chatRoomUuid}
                        className={cn(
                            'border-b border-gray-300 last:border-b-[0] px-4',
                        )}
                    >
                        <ChatRoomItem chatRoom={chatList} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
