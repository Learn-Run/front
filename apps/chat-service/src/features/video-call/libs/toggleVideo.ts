import type { LocalParticipant } from 'livekit-client';

export async function toggleVideo(
    participant: LocalParticipant | null,
    current: boolean,
): Promise<boolean> {
    if (participant) {
        await participant.setCameraEnabled(!current);
        return !current;
    }
    return current;
}
