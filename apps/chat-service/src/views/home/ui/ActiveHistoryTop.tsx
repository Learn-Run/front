export default function ActiveHistoryTop({
    totalCount,
}: {
    totalCount: number;
}) {
    return (
        <div className='flex justify-between items-center pb-8'>
            <h3 className='text-xl font-medium'>활동내역</h3>
            <span className='text-sm text-gray-500'>총 {totalCount} 개</span>
        </div>
    );
}
