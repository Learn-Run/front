import { Room } from 'livekit-client';

export default function createVideoSession() {
    const session = new Room();

    return { session };
}
