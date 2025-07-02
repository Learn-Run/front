import type {
    Room,
    RemoteParticipant,
    RemoteTrack,
    RemoteTrackPublication,
} from 'livekit-client';

import type { VideoCallStateType } from '../model/types';

export const attachSessionListeners = (
    room: Room,
    updateVideoCallState: (s: Partial<VideoCallStateType>) => void,
) => {
    room.on('participantConnected', () => {
        updateVideoCallState({
            subscribers: Array.from(room.remoteParticipants.values()),
        });
    });

    room.on('participantDisconnected', () => {
        updateVideoCallState({
            subscribers: Array.from(room.remoteParticipants.values()),
        });
    });

    room.on(
        'trackSubscribed',
        (
            track: RemoteTrack,
            _publication: RemoteTrackPublication,
            participant: RemoteParticipant,
        ) => {
            console.log('트랙 구독:', participant.identity, track.kind);
        },
    );

    room.on(
        'trackUnsubscribed',
        (
            track: RemoteTrack,
            _publication: RemoteTrackPublication,
            participant: RemoteParticipant,
        ) => {
            console.log('트랙 구독 해제:', participant.identity, track.kind);
        },
    );

    room.on('disconnected', () => {
        updateVideoCallState({
            session: null,
            publisher: null,
            subscribers: [],
            isScreenSharing: false,
        });
    });
};
