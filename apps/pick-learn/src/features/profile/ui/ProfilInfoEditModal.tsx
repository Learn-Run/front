'use client';
import { useState, useCallback } from 'react';

import { Button } from '@repo/ui/components/base/Button';
import { useAlert } from '@/features/post/model/hooks/useAlert';
import { updateMyInfo } from '../api';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { ProfileCategoryListType } from '@/entities/profile/api/types';
import { CategorySelector, SelfIntroductionEditor } from '.';

export default function ProfilInfoEditModal({
    value,
    categoryList,
}: {
    value: string | null;
    categoryList: ProfileCategoryListType[];
}) {
    const { closeModal } = useModalContext();
    const alert = useAlert();

    const [editValue, setEditValue] = useState(value || '');
    const [selectedCategories, setSelectedCategories] =
        useState<ProfileCategoryListType[]>(categoryList);

    const handleCancel = () => {
        setEditValue(value || '');
        setSelectedCategories(categoryList);
        closeModal();
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await updateMyInfo({
                selfIntroduction: editValue,
                categoryList: selectedCategories,
            });
            closeModal();
            alert.basic('프로필 정보가 업데이트되었습니다.');
        } catch (error) {
            console.error('Error saving profile info:', error);
            alert.error('프로필 정보 업데이트에 실패했습니다.');
        }
    };

    const handleCategoryChange = useCallback(
        (categories: ProfileCategoryListType[]) => {
            setSelectedCategories(categories);
        },
        [],
    );

    return (
        <form onSubmit={handleSave} className='flex flex-col gap-5 w-full px-4'>
            <CategorySelector
                categoryList={categoryList}
                onCategoryChange={handleCategoryChange}
            />
            <SelfIntroductionEditor value={editValue} onChange={setEditValue} />
            <div className='flex gap-2 justify-end py-3'>
                <Button
                    onClick={handleCancel}
                    variant='outline'
                    className='px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium'
                >
                    Cancel
                </Button>
                <Button type='submit'>Save</Button>
            </div>
        </form>
    );
}
