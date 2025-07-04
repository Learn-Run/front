'use client';
import { useEffect, useRef } from 'react';

import { useVideoCallContext } from '../model/context';

export default function SubscriberVideo() {
    const { session, remoteTracks } = useVideoCallContext();

    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

    useEffect(() => {
        if (!session) return;

        // ref 값을 effect 내부에서 복사
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
        <div className='grid grid-cols-2 gap-4'>
            {remoteTracks
                .filter(
                    (trackInfo) => trackInfo.trackPublication.kind === 'video',
                )
                .map((trackInfo) => (
                    <div
                        key={trackInfo.trackPublication.trackSid}
                        className='border border-primary-100 rounded-xl overflow-hidden'
                    >
                        <video
                            ref={(el) => {
                                videoRefs.current[
                                    trackInfo.trackPublication.trackSid
                                ] = el;
                            }}
                            autoPlay
                            playsInline
                        />
                        <div className='p-2 text-sm text-gray-600'>
                            {trackInfo.participantIdentity}
                        </div>
                    </div>
                ))}
        </div>
    );
}
