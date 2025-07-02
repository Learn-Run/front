import React from 'react';

export default function ChatRoomListEmpty({
    className,
}: {
    className?: string;
}) {
    return (
        <section className={className}>
            <h3 className='px-4 text-gray-800 font-semibold'>
                최근 메세지 목록
            </h3>
            <div className='flex flex-col items-center justify-center h-full'>
                <p className='text-gray-500'>최근 메세지가 없습니다.</p>
            </div>
        </section>
    );
}
