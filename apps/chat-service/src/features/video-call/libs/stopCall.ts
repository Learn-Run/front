import { VideoCallStateType } from '../model/types';

type StateType = Omit<VideoCallStateType, 'updateVideoCallState'>;

export const stopCall = async (
    updateVideoCallState: (
        s: Partial<StateType> | ((prev: StateType) => Partial<StateType>),
    ) => void,
) => {
    updateVideoCallState((prev) => {
        if (prev.session) {
            prev.session.disconnect();
        }

        return {
            session: null,
            localTrack: null,
            remoteTracks: [],
            isScreenSharing: false,
            isConnected: false,
        };
    });
};
