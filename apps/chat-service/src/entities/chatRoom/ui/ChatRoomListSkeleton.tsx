import React from 'react';

export default function ChatRoomListSkeleton({
    className,
}: {
    className?: string;
}) {
    return (
        <section className={className}>
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>
            <div className='flex flex-col items-center justify-center h-full gap-4'>
                <div className='w-[90%] h-14 bg-gray-200 rounded animate-pulse' />
                <div className='w-[85%] h-14 bg-gray-200 rounded animate-pulse' />
                <div className='w-[80%] h-14 bg-gray-200 rounded animate-pulse' />
                <p className='text-gray-400 mt-4'>불러오는 중...</p>
            </div>
        </section>
    );
}
