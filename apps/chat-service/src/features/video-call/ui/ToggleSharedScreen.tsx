'use client';
import { useCallback, useState } from 'react';
import { MonitorOff, MonitorUp } from 'lucide-react';

import { useVideoCallContext } from '../model/context';

export default function ToggleSharedScreen() {
    const [isScreenShareEnabled, setIsScreenShareEnabled] = useState(true);

    const { session } = useVideoCallContext();

    const handleClick = useCallback(async () => {
        if (!session) return;

        try {
            setIsScreenShareEnabled((prev) => !prev);
            await session.localParticipant.setScreenShareEnabled(
                isScreenShareEnabled,
            );
        } catch (error) {
            console.error('Failed to toggle screen share:', error);
            setIsScreenShareEnabled(false);
        }
    }, [session, isScreenShareEnabled]);

    return (
        <button
            onClick={handleClick}
            className='w-12 h-12 bg-secondary-100 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 active:opacity-80 transition-opacity ease-in-out'
        >
            {isScreenShareEnabled ? (
                <MonitorUp className='text-secondary-200' />
            ) : (
                <MonitorOff className='text-secondary-200' />
            )}
        </button>
    );
}
