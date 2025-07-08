'use client';
import { useEffect, useRef } from 'react';

import { useVideoCallContext } from '../model/context';

export default function SubscriberVideo() {
    const { session, remoteTracks } = useVideoCallContext();

    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

    useEffect(() => {
        if (!session) return;
        const currentVideoRefs = videoRefs.current;

        Object.values(currentVideoRefs).forEach((videoElement) => {
            if (videoElement) {
                const tracks = videoElement.srcObject
                    ? [videoElement.srcObject]
                    : [];
                tracks.forEach((track) => {
                    if (track instanceof MediaStreamTrack) {
                        track.stop();
                    }
                });
            }
        });

        remoteTracks.forEach((trackInfo) => {
            if (trackInfo.trackPublication.kind === 'video') {
                const videoTrack = trackInfo.trackPublication.videoTrack;
                const videoElement =
                    currentVideoRefs[trackInfo.trackPublication.trackSid];

                if (videoTrack && videoElement) {
                    videoTrack.attach(videoElement);
                }
            }
        });

        return () => {
            Object.values(currentVideoRefs).forEach((videoElement) => {
                if (videoElement) {
                    const tracks = videoElement.srcObject
                        ? [videoElement.srcObject]
                        : [];
                    tracks.forEach((track) => {
                        if (track instanceof MediaStreamTrack) {
                            track.stop();
                        }
                    });
                }
            });
        };
    }, [session, remoteTracks]);

    if (remoteTracks.length === 0) return null;

    return (
        <>
            {remoteTracks
                .filter(
                    (trackInfo) => trackInfo.trackPublication.kind === 'video',
                )
                .map((trackInfo) => (
                    <div
                        key={trackInfo.trackPublication.trackSid}
                        className='space-y-2'
                    >
                        <p className='py-1 px-4 text-xs text-gray-100 bg-gray-700 rounded-full w-fit'>
                            {trackInfo.name}
                        </p>
                        <div className='border border-secondary-200 rounded-xl overflow-hidden'>
                            <video
                                ref={(el) => {
                                    videoRefs.current[
                                        trackInfo.trackPublication.trackSid
                                    ] = el;
                                }}
                                autoPlay
                                playsInline
                                className='w-full h-auto'
                            />
                        </div>
                    </div>
                ))}
        </>
    );
}
