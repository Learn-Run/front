'use client';
import { useEffect, useRef } from 'react';

import { useVideoCallContext } from '../model/context';

export default function SharedScreen() {
    const { session } = useVideoCallContext();
    const screenShareRef = useRef<HTMLVideoElement | null>(null);

    let screenShareTrack = null;
    if (session?.localParticipant) {
        for (const pub of session.localParticipant.videoTrackPublications.values()) {
            if (pub.source === 'screen_share' && pub.videoTrack) {
                screenShareTrack = pub.videoTrack;
                break;
            }
        }
    }

    useEffect(() => {
        if (screenShareTrack && screenShareRef.current) {
            screenShareTrack.attach(screenShareRef.current);
            return () => {
                screenShareTrack.detach();
            };
        }
    }, [screenShareTrack]);

    if (!screenShareTrack) return null;

    return (
        <div className='border border-primary-100 rounded-xl overflow-hidden'>
            <video ref={screenShareRef} autoPlay muted playsInline />
        </div>
    );
}
