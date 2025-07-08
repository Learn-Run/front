'use client';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { useVideoCallContext } from '../model/context';
import VideoCallErrorModal from './VideoCallErrorModal';
import { startCall } from '../libs/startCall';
import { cn } from '@repo/ui/lib/utils';
import Video from '@/shared/assets/icons/Video';

export default function StartVideoButton({ sessionId }: { sessionId: string }) {
    const { openModal } = useModalContext();

    const { updateVideoCallState, isConnected } = useVideoCallContext();

    const handleClick = async () => {
        try {
            await startCall(sessionId, updateVideoCallState);
        } catch {
            openModal(<VideoCallErrorModal />);
        }
    };

    if (isConnected) return null;

    return (
        <button
            type='button'
            onClick={handleClick}
            className={cn(
                'w-14 h-14 rounded-full overflow-hidden flex justify-center items-center cursor-pointer group hover:bg-primary-100 hover:opacity-80 focus:bg-primary-100 focus:opacity-80 transition-all ease-in-out shrink-0',
            )}
        >
            <Video className='text-primary-100 group-hover:text-white group-focus:text-white transition-colors' />
        </button>
    );
}
