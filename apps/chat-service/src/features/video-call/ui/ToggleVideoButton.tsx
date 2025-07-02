import { Video, VideoOff } from 'lucide-react';

import { useVideoCallContext } from '../model/context';
import { toggleVideo } from '../libs/toggleVideo';

export default function ToggleVideoButton() {
    const { session, publisher, updateVideoCallState } = useVideoCallContext();

    const videoEnabled = publisher?.isCameraEnabled ?? false;

    const handleClick = () => {
        if (!publisher || !session) return;
        toggleVideo(publisher);
        updateVideoCallState({ publisher });
    };

    return (
        <button onClick={handleClick}>
            {videoEnabled ? <VideoOff /> : <Video />}
        </button>
    );
}
