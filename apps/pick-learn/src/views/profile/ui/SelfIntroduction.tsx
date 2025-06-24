export default function SelfIntroduction({
    selfIntroduction,
}: {
    selfIntroduction: string;
}) {
    return (
        <div className='flex flex-col gap-2'>
            <p className='font-semibold text-xl'>My Introduction</p>
            <p className='text-gray-700 border border-gray-700 rounded-xl w-full p-4 bg-white min-w-[230px] min-h-[100px]'>
                {selfIntroduction} 가나다라마바사아차ㅏ
            </p>
        </div>
    );
}
