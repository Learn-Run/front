import type { Room } from 'livekit-client';

import { VideoCallStateType } from '../model/types';

export function stopCall(
    session: Room,
    updateVideoCallState: (s: Partial<VideoCallStateType>) => void,
) {
    session.disconnect();

    updateVideoCallState({
        session: null,
        publisher: null,
        subscribers: [],
        isScreenSharing: false,
    });
}
