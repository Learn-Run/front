import type {
    Room,
    RemoteTrackPublication,
    LocalVideoTrack,
} from 'livekit-client';

export interface TrackInfo {
    trackPublication: RemoteTrackPublication;
    participantIdentity: string;
}

type StateType = {
    session: Room | null;
    localTrack: LocalVideoTrack | null;
    remoteTracks: TrackInfo[];
    isScreenSharing: boolean;
    isConnected: boolean;
};

export interface VideoCallStateType extends StateType {
    updateVideoCallState: (
        partial: Partial<StateType> | ((prev: StateType) => Partial<StateType>),
    ) => void;
}
