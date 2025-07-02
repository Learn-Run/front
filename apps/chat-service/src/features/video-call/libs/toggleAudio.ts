import type { LocalParticipant } from 'livekit-client';

export async function toggleAudio(
    participant: LocalParticipant | null,
    current: boolean,
): Promise<boolean> {
    if (participant) {
        await participant.setMicrophoneEnabled(!current);
        return !current;
    }
    return current;
}
