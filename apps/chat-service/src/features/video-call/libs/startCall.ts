import { attachSessionListeners } from './attachSessionListeners';
import { VideoCallStateType } from '../model/types';
import { getVideoToken } from '../api';
import createVideoSession from './createVideoSession';

export const startCall = async (
    id: string,
    updateVideoCallState: (s: Partial<VideoCallStateType>) => void,
) => {
    const token = await getVideoToken(id);
    const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL as string;

    const { session } = createVideoSession();
    attachSessionListeners(session, updateVideoCallState);

    try {
        await session.connect(`ws://${LIVEKIT_URL}`, token);

        await session.localParticipant.enableCameraAndMicrophone();

        updateVideoCallState({
            session: session,
            publisher: session.localParticipant,
            subscribers: Array.from(session.remoteParticipants.values()),
        });
    } catch (error) {
        console.log('🚀 ~ error:', error);
        alert('카메라/마이크 권한이 필요합니다.');
    }
};
