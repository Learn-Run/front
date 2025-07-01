import { Session, StreamEvent, StreamManager } from 'openvidu-browser';

import type { VideoCallStateType } from '../model/types';

export const attachSessionListeners = (
    session: Session,
    getSubscribers: () => StreamManager[],
    updateVideoCallState: (s: Partial<VideoCallStateType>) => void,
) => {
    session.on('streamCreated', (event: StreamEvent) => {
        const subscriber = session.subscribe(event.stream, undefined);
        const prev = getSubscribers();
        updateVideoCallState({ subscribers: [...prev, subscriber] });
    });

    session.on('streamDestroyed', (event: StreamEvent) => {
        const prev = getSubscribers();
        updateVideoCallState({
            subscribers: prev.filter((s) => s !== event.stream.streamManager),
        });
    });

    session.on('sessionDisconnected', () => {
        updateVideoCallState({
            OV: null,
            session: null,
            publisher: null,
            subscribers: [],
            isScreenSharing: false,
        });
    });
};
