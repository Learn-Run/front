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
        <div className=''>
            {remoteTracks
                .filter(
                    (trackInfo) => trackInfo.trackPublication.kind === 'video',
                )
                .map((trackInfo) => (
                    <div
                        key={trackInfo.trackPublication.trackSid}
                        className='border border-secondary-200 rounded-xl overflow-hidden relative'
                    >
                        <video
                            ref={(el) => {
                                videoRefs.current[
                                    trackInfo.trackPublication.trackSid
                                ] = el;
                            }}
                            autoPlay
                            playsInline
                            className='w-full'
                        />
                        <p className='py-1 px-4 text-xs text-gray-700 absolute left-3 top-3 bg-white/60 rounded-full z-10'>
                            {trackInfo.name}
                        </p>
                    </div>
                ))}
        </div>
    );
}
