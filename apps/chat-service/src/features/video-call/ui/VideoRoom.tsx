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
                'flex flex-col flex-wrap gap-4 h-full w-full p-6 pr-0',
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
