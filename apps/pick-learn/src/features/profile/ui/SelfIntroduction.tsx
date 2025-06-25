'use client';
import { useState } from 'react';

import { cn } from '@repo/ui/lib/utils';
import { updateSelfIntroduction } from '../api';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import EditButton from '@/shared/ui/EditButton';
import SelfIntroductionEditor from './SelfIntroductionEditor';

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

    const alert = useAlert();

    const handleEdit = () => {
        setIsEditing(true);
        setEditValue(selfIntroduction || '');
    };

    const handleSave = () => {
        try {
            setIsEditing(false);
            updateSelfIntroduction({
                selfIntroduction: editValue,
            });
            alert.basic('자기소개가 업데이트되었습니다.');
        } catch (error) {
            console.error('Error saving self introduction:', error);
            alert.error('자기소개 업데이트에 실패했습니다.');
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
                    <EditButton onClick={handleEdit} />
                )}
            </div>

            {isEditing ? (
                <SelfIntroductionEditor
                    value={editValue}
                    onChange={setEditValue}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : (
                <p className='text-gray-700 border border-gray-700 rounded-xl w-full p-4 bg-white min-h-[100px]'>
                    {selfIntroduction || '자기소개를 입력해주세요.'}
                </p>
            )}
        </div>
    );
}
