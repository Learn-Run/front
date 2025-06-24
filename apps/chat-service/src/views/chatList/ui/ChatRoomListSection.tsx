import { CHAT_LIST_MOCK } from '@/entities/chatRoom/model/constants';
import ChatRoomItem from '@/entities/chatRoom/ui/ChatRoomItem';

export default async function ChatRoomListSection() {
    const chatList = CHAT_LIST_MOCK;

    return (
        <section className='col-span-1 row-span-1 bg-amber-100 h-full'>
            <ul>
                {chatList.map((chatList) => (
                    <li key={chatList.chatRoomUuid}>
                        <ChatRoomItem chatRoom={chatList} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
