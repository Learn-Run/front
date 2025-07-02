import { Mic, MicOff } from 'lucide-react';

import { useVideoCallContext } from '../model/context';
import { toggleAudio } from '../libs/toggleAudio';

export default function ToggleAudioButton() {
    const { session, publisher, updateVideoCallState } = useVideoCallContext();
    const audioEnabled = publisher?.stream?.audioActive ?? true;

    const handleClick = () => {
        if (!publisher || !session) return;
        toggleAudio(publisher, audioEnabled);
        updateVideoCallState({ publisher });
    };

    if (!session) return;

    return (
        <button onClick={handleClick}>
            {audioEnabled ? <MicOff /> : <Mic />}
        </button>
    );
}
