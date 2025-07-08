import { CreateChatForm, StartVideoButton } from '@/features/video-call/ui';

interface ChatWindowInputSectionProps {
    handleSend: (input: string) => void;
    chatRoomUuid: string;
    isConnected: boolean;
}

export default function ChatWindowInputSection({
    handleSend,
    chatRoomUuid,
}: ChatWindowInputSectionProps) {
    return (
        <div className='px-6 py-6 border-t border-gray-300 flex items-center gap-4'>
            <StartVideoButton sessionId={chatRoomUuid} />
            <CreateChatForm handleSend={handleSend} />
        </div>
    );
}
