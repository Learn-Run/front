'use client';

import { useVideoCallContext } from '../model/context';
import { startCall } from '../libs/startCall';
import { stopCall } from '../libs/stopCall';
import { Button } from '@repo/ui/components/base/Button';

export default function SessionToggleButton({
    sessionId,
}: {
    sessionId: string;
}) {
    const { session, updateVideoCallState, subscribers } =
        useVideoCallContext();

    const handleClick = async () => {
        if (session) {
            stopCall(session, updateVideoCallState);
        } else {
            await startCall(sessionId, () => subscribers, updateVideoCallState);
        }
    };

    return (
        <Button type='button' onClick={handleClick}>
            {session ? '화상 채팅 종료' : '화상 채팅 시작'}
        </Button>
    );
}
