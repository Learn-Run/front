'use client';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { useVideoCallContext } from '../model/context';
import VideoCallErrorModal from './VideoCallErrorModal';
import { startCall } from '../libs/startCall';
import { cn } from '@repo/ui/lib/utils';
import Video from '@/shared/assets/icons/Video';

export default function StartVideoButton({ sessionId }: { sessionId: string }) {
    const { openModal } = useModalContext();

    const { updateVideoCallState, subscribers } = useVideoCallContext();

    const handleClick = async () => {
        try {
            await startCall(sessionId, () => subscribers, updateVideoCallState);
        } catch (error) {
            console.log('🚀 ~ handleClick ~ error:', error);
            openModal(<VideoCallErrorModal />);
        }
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={cn(
                'w-14 h-14 rounded-full overflow-hidden flex justify-center items-center bg-primary-100 cursor-pointer hover:opacity-80 transition-opacity ease-in-out',
            )}
        >
            <Video />
        </button>
    );
}
