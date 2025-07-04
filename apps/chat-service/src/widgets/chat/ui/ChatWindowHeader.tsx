import ChatWindowTitle from './ChatWindowTitle';

interface ChatWindowHeaderProps {
    chatRoomUuid?: string;
}

export default function ChatWindowHeader({
    chatRoomUuid,
}: ChatWindowHeaderProps) {
    if (!chatRoomUuid) return null;

    return (
        <div className='flex items-center justify-between px-4 py-3 border-b border-gray-300 flex-shrink-0'>
            <ChatWindowTitle />
        </div>
    );
}
