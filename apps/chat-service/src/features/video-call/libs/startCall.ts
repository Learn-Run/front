import { attachSessionListeners } from './attachSessionListeners';
import { VideoCallStateType } from '../model/types';
import { getVideoToken } from '../api';
import createVideoSession from './createVideoSession';

type StateType = Omit<VideoCallStateType, 'updateVideoCallState'>;

export const startCall = async (
    id: string,
    updateVideoCallState: (
        s: Partial<StateType> | ((prev: StateType) => Partial<StateType>),
    ) => void,
) => {
    const token = await getVideoToken(id);

    const { session } = createVideoSession();

    const LIVEKIT_URL = process.env.NEXT_PUBLIC_LIVEKIT_URL as string;

    updateVideoCallState({
        session,
    });

    attachSessionListeners(session, updateVideoCallState);

    try {
        await session.connect(`wss://${LIVEKIT_URL}`, token);

        await session.localParticipant.enableCameraAndMicrophone();

        const videoTrackPublication =
            session.localParticipant.videoTrackPublications
                .values()
                .next().value;
        if (videoTrackPublication?.videoTrack) {
            updateVideoCallState({
                localTrack: videoTrackPublication.videoTrack,
            });
        }
    } catch (error) {
        console.error('🚀 ~ error:', error);
        // alert('카메라/마이크 권한이 필요합니다.');
        throw error;
    }
};
