'use client';
import { VideoCallProvider } from '../model/context';
import PublisherVideo from './PublisherVideo';
import StartVideoButton from './StartVideoButton';

export default function VideoRoom({ sessionId }: { sessionId: number }) {
    return (
        <VideoCallProvider>
            <div className='flex flex-col gap-4 p-6'>
                <PublisherVideo />

                <StartVideoButton sessionId={sessionId} />
            </div>
        </VideoCallProvider>
    );
}
