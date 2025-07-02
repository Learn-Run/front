import React from 'react';
import { MessageCircleOff } from 'lucide-react';

export default function ChatGroupEmpty() {
    return (
        <div className='flex flex-col h-full items-center justify-center gap-2'>
            <MessageCircleOff className='text-secondary-200 h-10 w-10' />
            <h3 className='font-semibold text-lg text-secondary-200 pt-6'>
                먼저 상대와 채팅을 시작해보세요!
            </h3>
            <p className='text-gray-500 text-sm'>
                이전 채팅 메세지가 없습니다.
            </p>
        </div>
    );
}
