'use client';
import { useVideoCallContext } from '../model/context';
import {
    PublisherVideo,
    SubscriberVideo,
    VideoControls,
} from '@/features/video-call/ui';
import { cn } from '@repo/ui/lib/utils';
// import SharedScreen from './SharedScreen';

export default function VideoRoom({ className }: { className?: string }) {
    const { isConnected } = useVideoCallContext();

    if (!isConnected) return;

    return (
        <div
            className={cn(
                'space-y-4 h-full w-full p-6 pr-0 overflow-y-scroll scrollbar-hidden',
                className,
            )}
        >
            <PublisherVideo />
            <SubscriberVideo />
            {/* <SharedScreen /> */}

            <VideoControls />
        </div>
    );
}
