import type {
    OpenVidu,
    Publisher,
    Session,
    StreamManager,
} from 'openvidu-browser';

export interface VideoCallStateType {
    OV: OpenVidu | null;
    session: Session | null;
    publisher: Publisher | null;
    subscribers: StreamManager[];
    isScreenSharing: boolean;
    updateVideoCallState: (partial: Partial<VideoCallStateType>) => void;
}
