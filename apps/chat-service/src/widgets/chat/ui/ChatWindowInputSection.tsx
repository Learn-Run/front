import { CreateChatForm } from '@/features/video-call/ui';
import ChatWindowStartVideoButton from './ChatWindowStartVideoButton';

interface ChatWindowInputSectionProps {
    handleSend: (input: string) => void;
    chatRoomUuid: string;
    isConnected: boolean;
}

export default function ChatWindowInputSection({
    handleSend,
    chatRoomUuid,
    isConnected,
}: ChatWindowInputSectionProps) {
    return (
        <div className='px-6 py-6 border-t border-gray-300 flex items-center gap-4'>
            <ChatWindowStartVideoButton
                chatRoomUuid={chatRoomUuid}
                isConnected={isConnected}
            />
            <CreateChatForm handleSend={handleSend} />
        </div>
    );
}
