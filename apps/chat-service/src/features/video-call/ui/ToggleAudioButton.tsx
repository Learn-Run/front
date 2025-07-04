'use client';
import { useCallback, useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

import { useVideoCallContext } from '../model/context';

export default function ToggleAudioButton() {
    const [isMicrophoneEnabled, setIiMicrophoneEnabled] = useState(true);

    const { session } = useVideoCallContext();

    const handleClick = useCallback(async () => {
        if (!session) return;

        try {
            setIiMicrophoneEnabled((prev) => !prev);
            await session.localParticipant.setMicrophoneEnabled(
                !isMicrophoneEnabled,
            );
        } catch (error) {
            console.error('Failed to toggle microphone:', error);
        }
    }, [session, isMicrophoneEnabled]);

    return (
        <button
            onClick={handleClick}
            className='w-12 h-12 bg-secondary-100 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 active:opacity-80 transition-opacity ease-in-out'
        >
            {isMicrophoneEnabled ? (
                <Mic className='text-secondary-200' />
            ) : (
                <MicOff className='text-secondary-200' />
            )}
        </button>
    );
}
