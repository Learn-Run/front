import { CHAT_MOCK_DATA_1 } from '../model/constants';
import ChatItem from './ChatItem';
import { cn } from '@repo/ui/lib/utils';

export default function ChatGroup() {
    const chatDatas = CHAT_MOCK_DATA_1;

    return (
        <ul className='w-full h-[calc(100%-180px)] space-y-4 overflow-y-scroll scrollbar-hidden p-6'>
            {chatDatas.map((chat) => (
                <li
                    key={chat.chatId}
                    className={cn('w-full flex', {
                        'justify-end': chat.senderUuid === 'user-me',
                        'justify-start': chat.senderUuid !== 'user-me',
                    })}
                >
                    <ChatItem
                        chat={chat}
                        isMyMessage={chat.senderUuid === 'user-me'}
                    />
                </li>
            ))}
        </ul>
    );
}
