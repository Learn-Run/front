import { Session } from 'openvidu-browser';

import { VideoCallStateType } from '../model/types';

export function stopCall(
    session: Session,
    updateVideoCallState: (s: Partial<VideoCallStateType>) => void,
) {
    session.disconnect();

    updateVideoCallState({
        OV: null,
        session: null,
        publisher: null,
        subscribers: [],
        isScreenSharing: false,
    });
}
