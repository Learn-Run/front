'use client';
import { useEffect, useRef } from 'react';

import { useVideoCallContext } from '../model/context';

export default function PublisherVideo() {
    const { session, isConnected } = useVideoCallContext();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    let localVideoTrack = null;
    if (session?.localParticipant) {
        const videoTrackPublication =
            session.localParticipant.videoTrackPublications
                .values()
                .next().value;
        localVideoTrack = videoTrackPublication?.videoTrack || null;
    }

    useEffect(() => {
        if (localVideoTrack && videoRef.current) {
            localVideoTrack.attach(videoRef.current);
            return () => {
                localVideoTrack.detach();
            };
        }
    }, [localVideoTrack]);

    if (!isConnected) {
        return (
            <div className='flex items-center justify-center h-64 bg-gray-100 rounded-xl'>
                <span className='text-gray-400'>
                    방에 입장하면 카메라가 표시됩니다.
                </span>
            </div>
        );
    }

    if (isConnected && !localVideoTrack) {
        return (
            <div className='flex items-center justify-center h-64 bg-gray-100 rounded-xl'>
                <svg
                    className='animate-spin h-6 w-6 text-gray-400 [&_circle]:stroke-gray-400 mr-2'
                    viewBox='0 0 24 24'
                >
                    <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                        fill='none'
                    />
                    <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v8z'
                    />
                </svg>
                <span className='text-gray-400'>카메라 준비 중...</span>
            </div>
        );
    }

    return (
        <div className='border border-primary-100 rounded-xl overflow-hidden'>
            <video
                ref={videoRef}
                autoPlay
                muted={!session?.localParticipant.isMicrophoneEnabled}
                playsInline
            />
        </div>
    );
}
