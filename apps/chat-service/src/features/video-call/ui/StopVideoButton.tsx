'use client';
import { useVideoCallContext } from '../model/context';
import { stopCall } from '../libs/stopCall';
import { cn } from '@repo/ui/lib/utils';
import Video from '@/shared/assets/icons/Video';

export default function StopVideoButton() {
    const { session, updateVideoCallState } = useVideoCallContext();

    const handleClick = async () => {
        if (session) {
            stopCall(session, updateVideoCallState);
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
