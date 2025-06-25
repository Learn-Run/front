'use client';
import { Button } from '@repo/ui/components/base/Button';

interface SelfIntroductionEditorProps {
    value: string;
    onChange: (value: string) => void;
    onSave: () => void;
    onCancel: () => void;
}

export default function SelfIntroductionEditor({
    value,
    onChange,
    onSave,
    onCancel,
}: SelfIntroductionEditorProps) {
    return (
        <div className='flex flex-col gap-2'>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className='text-gray-700 border border-gray-700 rounded-xl p-4 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary-100'
                placeholder='자기소개를 입력해주세요.'
            />
            <div className='flex gap-2 justify-end'>
                <Button
                    onClick={onCancel}
                    variant='text'
                    className='px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium'
                >
                    Cancel
                </Button>
                <Button
                    onClick={onSave}
                    className='px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium'
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
