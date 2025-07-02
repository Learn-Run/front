'use client';
import { useEffect, useRef } from 'react';
import { useVideoCallContext } from '../model/context';

export default function PublisherVideo() {
    const { publisher } = useVideoCallContext();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!publisher) return;
        const pubIter = publisher.videoTrackPublications.values();
        const firstPub = pubIter.next().value;
        const videoTrack = firstPub?.videoTrack;
        const videoElement = videoRef.current;
        if (videoTrack && videoElement) {
            videoTrack.attach(videoElement);
            return () => {
                videoTrack.detach(videoElement);
            };
        }
    }, [publisher]);

    if (!publisher) return null;

    return (
        <div className='border border-primary-100 rounded-xl overflow-hidden'>
            <video autoPlay muted playsInline ref={videoRef} />
        </div>
    );
}
