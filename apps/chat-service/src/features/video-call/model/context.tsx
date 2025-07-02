'use client';
import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
} from 'react';

import type { VideoCallStateType } from './types';

export const VideoCallContext = createContext<VideoCallStateType | undefined>(
    undefined,
);

export function VideoCallProvider({
    children,
    sessionId,
}: {
    children: React.ReactNode;
    sessionId?: string;
}) {
    const [state, setState] = useState<
        Omit<VideoCallStateType, 'updateVideoCallState'>
    >({
        session: null,
        publisher: null,
        subscribers: [],
        isScreenSharing: false,
    });

    useEffect(() => {
        if (state.session) {
            state.session.disconnect();

            setState({
                session: null,
                publisher: null,
                subscribers: [],
                isScreenSharing: false,
            });
        }
    }, [sessionId, state.session]);

    const updateVideoCallState = useCallback(
        (partial: Partial<VideoCallStateType>) =>
            setState((prev) => ({ ...prev, ...partial })),
        [],
    );

    const value = { ...state, updateVideoCallState };

    return (
        <VideoCallContext.Provider value={value}>
            {children}
        </VideoCallContext.Provider>
    );
}

export function useVideoCallContext() {
    const ctx = useContext(VideoCallContext);
    if (!ctx)
        throw new Error(
            'useVideoCallContext must be used within VideoCallProvider',
        );
    return ctx;
}
