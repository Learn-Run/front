'use client';
import { useRouter, useSearchParams } from 'next/navigation';

import { cn } from '@repo/ui/lib/utils';
import { Back, Message, Overview } from '@/shared/assets/icons';

interface ChatStepperProps {
    className?: string;
    currentStep: 'list' | 'room';
    roomTitle?: string;
}

export default function ChatStepper({
    className,
    currentStep,
    roomTitle,
}: ChatStepperProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleBackToList = () => {
        const params = new URLSearchParams(searchParams);
        params.delete('chatRoomUuid');
        params.delete('isOnSession');
        router.push(`/messages?${params.toString()}`);
    };

    return (
        <nav
            className={cn(
                'flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10',
                className,
            )}
        >
            {/* 채팅방 목록 단계 */}
            <div
                className={cn(
                    'flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 min-w-0',
                    currentStep === 'list'
                        ? 'bg-blue-50 text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800',
                )}
                onClick={handleBackToList}
            >
                <Overview className='w-4 h-4 flex-shrink-0' />
                <span className='text-sm font-medium truncate'>
                    채팅방 목록
                </span>
                {currentStep === 'list' && (
                    <div className='w-2 h-2 bg-blue-600 rounded-full animate-pulse flex-shrink-0' />
                )}
            </div>

            {/* 구분선 */}
            {currentStep === 'room' && (
                <div className='flex items-center gap-1 text-gray-400 flex-shrink-0'>
                    <div className='rotate-180'>
                        <Back />
                    </div>
                </div>
            )}

            {/* 채팅방 단계 */}
            {currentStep === 'room' && (
                <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 shadow-sm min-w-0 flex-1'>
                    <Message className='w-4 h-4 flex-shrink-0' />
                    <span className='text-sm font-medium truncate'>
                        {roomTitle || '채팅방'}
                    </span>
                    <div className='w-2 h-2 bg-blue-600 rounded-full animate-pulse flex-shrink-0' />
                </div>
            )}
        </nav>
    );
}
