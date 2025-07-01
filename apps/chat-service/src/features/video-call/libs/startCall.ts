import { OpenVidu, StreamManager } from 'openvidu-browser';

import { attachSessionListeners } from './attachSessionListeners';
import { VideoCallStateType } from '../model/types';
import { getToken } from '../api';

export const startCall = async (
    id: string,
    getSubscribers: () => StreamManager[],
    updateVideoCallState: (s: Partial<VideoCallStateType>) => void,
) => {
    const token = await getToken(id);

    const OV = new OpenVidu();
    const session = OV.initSession();

    attachSessionListeners(session, getSubscribers, updateVideoCallState);

    await session.connect(token);

    try {
        const publisher = await OV.initPublisherAsync(undefined, {
            videoSource: undefined,
            publishAudio: true,
            publishVideo: true,
        });

        await session.publish(publisher);

        updateVideoCallState({
            OV,
            session,
            publisher,
        });
    } catch (error) {
        console.log('🚀 ~ error:', error);
        alert('카메라/마이크 권한이 필요합니다.');
    }
};
