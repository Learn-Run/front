'use client';

import { VideoCallProvider } from '../model/context';
import PublisherVideo from './PublisherVideo';
import SessionToggleButton from './SessionToggleButton';

export default function VideoRoom({ sessionId }: { sessionId: string }) {
    return (
        <VideoCallProvider>
            <div className='flex flex-col gap-4 p-6'>
                <PublisherVideo />

                <SessionToggleButton sessionId={sessionId} />
            </div>
        </VideoCallProvider>
    );
}
