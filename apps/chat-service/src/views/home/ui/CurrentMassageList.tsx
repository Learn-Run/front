import { getChatRoomList } from '@/entities/chatRoom/api';
import ChatRoomItem from '@/entities/chatRoom/ui/ChatRoomItem';

export default async function CurrentMassageList() {
    const currentChatRoomList = await getChatRoomList({
        cursor: null,
        size: 3,
    });
    return (
        <ul className='lg:pt-4'>
            {currentChatRoomList?.content?.map((item) => (
                <li key={item.chatRoomUuid}>
                    <ChatRoomItem chatRoom={item} />
                </li>
            ))}
        </ul>
    );
}
