import { StartVideoButton } from '@/features/video-call/ui';

interface ChatWindowStartVideoButtonProps {
    chatRoomUuid: string;
    isConnected: boolean;
}

const ChatWindowStartVideoButton = ({
    chatRoomUuid,
    isConnected,
}: ChatWindowStartVideoButtonProps) => {
    if (isConnected) return null;
    return <StartVideoButton sessionId={chatRoomUuid} />;
};

export default ChatWindowStartVideoButton;
