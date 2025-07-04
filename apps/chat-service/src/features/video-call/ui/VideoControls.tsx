'use client';
import ToggleVideoButton from './ToggleVideoButton';
import ToggleAudioButton from './ToggleAudioButton';
import StopVideoButton from './StopVideoButton';
// import ToggleSharedScreen from './ToggleSharedScreen';

export default function VideoControls() {
    return (
        <div className='w-full flex gap-4 p-4 justify-center items-center bg-gray-100 rounded-lg'>
            <ToggleVideoButton />
            <StopVideoButton />
            <ToggleAudioButton />
            {/* <ToggleSharedScreen /> */}
        </div>
    );
}
