'use client';
import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    useRef,
} from 'react';

import type { VideoCallStateType } from './types';

type StateType = Omit<VideoCallStateType, 'updateVideoCallState'>;

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
    const [state, setState] = useState<StateType>({
        session: null,
        localTrack: null,
        remoteTracks: [],
        isScreenSharing: false,
        isConnected: false,
    });

    const prevSessionIdRef = useRef<string | undefined>(sessionId);

    useEffect(() => {
        if (prevSessionIdRef.current !== sessionId && state.session) {
            state.session.disconnect();

            setState({
                session: null,
                localTrack: null,
                remoteTracks: [],
                isScreenSharing: false,
                isConnected: false,
            });
        }

        prevSessionIdRef.current = sessionId;
    }, [sessionId, state.session]);

    const updateVideoCallState = useCallback(
        (
            partial:
                | Partial<StateType>
                | ((prev: StateType) => Partial<StateType>),
        ) =>
            setState((prev) => {
                const newPartial =
                    typeof partial === 'function' ? partial(prev) : partial;
                return { ...prev, ...newPartial };
            }),
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
