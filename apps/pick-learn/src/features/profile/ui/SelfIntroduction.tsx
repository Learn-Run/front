export default function SelfIntroduction({
    selfIntroduction,
}: {
    selfIntroduction: string | null;
    className?: string;
    isMyProfile?: boolean;
}) {
    return (
        <div className='flex flex-col gap-2 '>
            <p className='font-semibold text-xl'>My Introduction</p>
            <p className='text-gray-700 border border-gray-700 rounded-xl w-full p-4 bg-white min-h-[100px]'>
                {selfIntroduction || '자기소개를 입력해주세요.'}
            </p>
        </div>
    );
}
