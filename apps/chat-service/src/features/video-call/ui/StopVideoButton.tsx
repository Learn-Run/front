'use client';
import { useVideoCallContext } from '../model/context';
import { stopCall } from '../libs/stopCall';
import { cn } from '@repo/ui/lib/utils';
import StopCall from '@/shared/assets/icons/StopCall';

export default function StopVideoButton() {
    const { session, updateVideoCallState } = useVideoCallContext();

    const handleClick = async () => {
        if (session) {
            stopCall(updateVideoCallState);
        }
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={cn(
                'w-14 h-14 rounded-full overflow-hidden flex justify-center items-center bg-error cursor-pointer hover:opacity-80 active:opacity-80 transition-opacity ease-in-out',
            )}
        >
            <StopCall />
        </button>
    );
}
