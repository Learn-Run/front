'use client';
import { useVideoCallContext } from '../model/context';
import PublisherVideo from './PublisherVideo';
import StopVideoButton from './StopVideoButton';

export default function VideoRoom() {
    const { session } = useVideoCallContext();

    if (!session) return;

    return (
        <div className='flex flex-col gap-4 h-full'>
            <PublisherVideo />

            <StopVideoButton />
        </div>
    );
}
