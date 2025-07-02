import type { LocalParticipant } from 'livekit-client';

export async function toggleAudio(
    participant: LocalParticipant | null,
): Promise<boolean> {
    if (participant) {
        const current = participant.isMicrophoneEnabled;
        await participant.setMicrophoneEnabled(!current);
        return !current;
    }
    return false;
}
