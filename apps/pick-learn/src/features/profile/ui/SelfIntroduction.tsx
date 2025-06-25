'use client';
import { useState } from 'react';
import { cn } from '@repo/ui/lib/utils';
import { updateSelfIntroduction } from '../api';
import { Button } from '@repo/ui/components/base/Button';

export default function SelfIntroduction({
    selfIntroduction,
    className,
    isMyProfile = false,
}: {
    selfIntroduction: string | null;
    className?: string;
    isMyProfile?: boolean;
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(selfIntroduction || '');

    const handleEdit = () => {
        setIsEditing(true);
        setEditValue(selfIntroduction || '');
    };

    const handleSave = () => {
        // TODO: API 호출하여 자기소개 업데이트
        console.log('Saving self introduction:', editValue);
        try {
            setIsEditing(false);
            updateSelfIntroduction({
                selfIntroduction: editValue,
            });
            alert('자기소개가 업데이트되었습니다.');
        } catch (error) {
            console.error('Error saving self introduction:', error);
        }
    };

    const handleCancel = () => {
        setEditValue(selfIntroduction || '');
        setIsEditing(false);
    };

    return (
        <div className={cn('flex flex-col gap-2 w-full md:w-auto', className)}>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-xl'>My Introduction</p>
                {isMyProfile && !isEditing && (
                    <Button
                        onClick={handleEdit}
                        variant='outline'
                        className='text-sm font-medium w-fit'
                    >
                        Edit
                    </Button>
                )}
            </div>

            {isEditing ? (
                <div className='flex flex-col gap-2'>
                    <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className='text-gray-700 border border-gray-700 rounded-xl p-4 bg-white  resize-none focus:outline-none focus:ring-2 focus:ring-primary-100'
                        placeholder='자기소개를 입력해주세요.'
                    />
                    <div className='flex gap-2 justify-end'>
                        <button
                            onClick={handleCancel}
                            className='px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium'
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className='px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium'
                        >
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <p className='text-gray-700 border border-gray-700 rounded-xl w-full p-4 bg-white min-h-[100px]'>
                    {selfIntroduction || '자기소개를 입력해주세요.'}
                </p>
            )}
        </div>
    );
}
