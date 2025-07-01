'use client';

interface SelfIntroductionEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function SelfIntroductionEditor({
    value,
    onChange,
}: SelfIntroductionEditorProps) {
    return (
        <div className='flex flex-col gap-2'>
            <p className='text-sm font-semibold'>자기소개</p>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='text-gray-700 border border-gray-700 rounded-xl p-4 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary-100'
                placeholder='자기소개를 입력해주세요.'
            />
        </div>
    );
}
