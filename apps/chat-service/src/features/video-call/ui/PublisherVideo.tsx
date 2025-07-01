import { useVideoCallContext } from '../model/context';

export default function PublisherVideo() {
    const { publisher } = useVideoCallContext();

    if (!publisher) return;

    return (
        <div className='border border-primary-100 rounded-xl overflow-hidden'>
            <video
                autoPlay
                muted
                playsInline
                ref={(videoElement) => {
                    if (videoElement && publisher) {
                        publisher.addVideoElement(videoElement);
                    }
                }}
            />
        </div>
    );
}
