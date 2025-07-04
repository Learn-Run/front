export default function ChatRoomListSkeleton() {
    return (
        <div className='flex flex-col items-center justify-center h-full gap-4'>
            <div className='w-[90%] h-14 bg-gray-200 rounded animate-pulse' />
            <div className='w-[85%] h-14 bg-gray-200 rounded animate-pulse' />
            <div className='w-[80%] h-14 bg-gray-200 rounded animate-pulse' />
            <p className='text-gray-400 mt-4'>불러오는 중...</p>
        </div>
    );
}
