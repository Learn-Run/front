import type { Room, LocalParticipant, RemoteParticipant } from 'livekit-client';

export interface VideoCallStateType {
    session: Room | null;
    publisher: LocalParticipant | null;
    subscribers: RemoteParticipant[];
    isScreenSharing: boolean;
    updateVideoCallState: (partial: Partial<VideoCallStateType>) => void;
}
