'use client';
import { useRouter } from 'next/navigation';

import { useVideoCallContext } from '../model/context';
import { stopCall } from '../libs/stopCall';
import { cn } from '@repo/ui/lib/utils';
import StopCall from '@/shared/assets/icons/StopCall';
import { routes } from '@/shared/model/constants/routes';

export default function StopVideoButton() {
    const router = useRouter();

    const { session, updateVideoCallState } = useVideoCallContext();

    const handleClick = async () => {
        if (session) {
            stopCall(session, updateVideoCallState);

            const params = new URLSearchParams(window.location.search);

            params.delete('isOnSession');

            router.replace(`${routes.messages}?${params.toString()}`);
        }
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={cn(
                'w-14 h-14 rounded-full overflow-hidden flex justify-center items-center bg-error cursor-pointer hover:opacity-80 transition-opacity ease-in-out',
            )}
        >
            <StopCall />
        </button>
    );
}
