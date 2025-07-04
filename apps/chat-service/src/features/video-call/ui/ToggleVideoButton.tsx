'use client';
import { useCallback, useState } from 'react';
import { Video, VideoOff } from 'lucide-react';

import { useVideoCallContext } from '../model/context';

export default function ToggleVideoButton() {
    const [isCameraEnabled, setIsCameraEnabled] = useState(true);

    const { session } = useVideoCallContext();

    const handleClick = useCallback(async () => {
        if (!session) return;

        try {
            setIsCameraEnabled((prev) => !prev);
            await session.localParticipant.setCameraEnabled(!isCameraEnabled);
        } catch (error) {
            console.error('Failed to toggle camera:', error);
        }
    }, [session, isCameraEnabled]);

    return (
        <button
            onClick={handleClick}
            className='w-12 h-12 bg-secondary-100 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 active:opacity-80 transition-opacity ease-in-out'
        >
            {isCameraEnabled ? (
                <Video className='text-secondary-200' />
            ) : (
                <VideoOff className='text-secondary-200' />
            )}
        </button>
    );
}
