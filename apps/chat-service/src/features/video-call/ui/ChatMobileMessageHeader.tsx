import { Back } from '@/shared/assets/icons';

interface ChatMobileMessageHeaderProps {
    type: string;
    chatRoomUuid?: string;
    handlePrevStep: () => void;
}

export default function ChatMobileMessageHeader({
    type,
    chatRoomUuid,
    handlePrevStep,
}: ChatMobileMessageHeaderProps) {
    if (type === 'message' && chatRoomUuid) {
        return (
            <div className='p-4 border-b border-gray-300 flex justify-between'>
                <button
                    type='button'
                    onClick={handlePrevStep}
                    className='cursor-pointer text-gray-500 hover:text-gray-700 focus:text-gray-700'
                >
                    <Back />
                </button>

                <h3>채팅방</h3>

                <div />
            </div>
        );
    }

    return (
        <div className='p-4 border-b border-gray-300 flex justify-center'>
            <h3>채팅 목록</h3>
        </div>
    );
}
