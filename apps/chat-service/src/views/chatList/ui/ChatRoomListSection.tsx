import { CHAT_LIST_MOCK } from '@/entities/chatRoom/model/constants';
import ChatRoomItem from '@/entities/chatRoom/ui/ChatRoomItem';
import { cn } from '@repo/ui/lib/utils';

export default async function ChatRoomListSection({
    className,
}: {
    className?: string;
}) {
    const chatList = CHAT_LIST_MOCK;

    return (
        <section
            className={cn('py-6 overflow-y-scroll scrollbar-hidden', className)}
        >
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>
            <ul>
                {chatList.map((chatList) => (
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
