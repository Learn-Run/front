import type { LocalParticipant } from 'livekit-client';

export async function toggleVideo(
    participant: LocalParticipant | null,
): Promise<boolean> {
    if (participant) {
        const current = participant.isCameraEnabled;
        await participant.setCameraEnabled(!current);
        return !current;
    }
    return false;
}
