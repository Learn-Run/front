'use client';
import { useVideoCallContext } from '../model/context';
import { PublisherVideo, StopVideoButton } from '@/features/video-call/ui';
import ToggleAudioButton from './ToggleAudioButton';
import ToggleVideoButton from './ToggleVideoButton';

export default function VideoRoom() {
    const { session } = useVideoCallContext();

    if (!session) return;

    return (
        <div className='flex flex-col gap-4 h-full'>
            <PublisherVideo />
            <div className='flex gap-2'>
                <ToggleAudioButton />
                <ToggleVideoButton />
            </div>
            <StopVideoButton />
        </div>
    );
}
