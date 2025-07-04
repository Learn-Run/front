import { type Room, RoomEvent } from 'livekit-client';

import type { VideoCallStateType } from '../model/types';
import type { TrackInfo } from '../model/types';

type StateType = Omit<VideoCallStateType, 'updateVideoCallState'>;

export const attachSessionListeners = (
    room: Room,
    updateVideoCallState: (
        s: Partial<StateType> | ((prev: StateType) => Partial<StateType>),
    ) => void,
) => {
    room.on(RoomEvent.TrackSubscribed, (_track, publication, participant) => {
        updateVideoCallState((prev) => ({
            remoteTracks: [
                ...prev.remoteTracks,
                {
                    trackPublication: publication,
                    participantIdentity: participant.identity,
                    name: participant?.name || 'Anonymous',
                },
            ],
        }));
    });

    room.on(RoomEvent.TrackUnsubscribed, (_track, publication) => {
        updateVideoCallState((prev) => ({
            remoteTracks: prev.remoteTracks.filter(
                (track) =>
                    track.trackPublication.trackSid !== publication.trackSid,
            ),
        }));
    });

    room.on(RoomEvent.ParticipantDisconnected, (participant) => {
        updateVideoCallState((prev) => ({
            remoteTracks: prev.remoteTracks.filter(
                (track) => track.participantIdentity !== participant.identity,
            ),
        }));
    });

    room.on(RoomEvent.Connected, () => {
        updateVideoCallState({
            isConnected: true,
        });

        const initialRemoteTracks: TrackInfo[] = [];

        room.remoteParticipants.forEach((participant) => {
            participant.trackPublications.forEach((publication) => {
                if (publication.isSubscribed && publication.kind === 'video') {
                    initialRemoteTracks.push({
                        trackPublication: publication,
                        participantIdentity: participant.identity,
                        name: participant.name || 'Anonymous',
                    });
                }
            });
        });

        if (initialRemoteTracks.length > 0) {
            updateVideoCallState((prev) => ({
                remoteTracks: [...prev.remoteTracks, ...initialRemoteTracks],
            }));
        }
    });

    room.on(RoomEvent.Disconnected, () => {
        updateVideoCallState({
            isConnected: false,
            localTrack: null,
            remoteTracks: [],
        });
    });
};
