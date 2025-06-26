'use client';
import { Button } from '@repo/ui/components/base/Button';
import { useModalContext } from '../model/modal/ModalContext';
import { ProfilInfoEditModal } from '@/features/profile/ui';
import { ProfileCategoryListType } from '@/entities/profile/api/types';

export default function EditButton({
    selfintroduction: value,
    categoryList,
}: {
    selfintroduction: string | null;
    categoryList: ProfileCategoryListType[];
}) {
    const { openModal } = useModalContext();

    return (
        <Button
            onClick={() =>
                openModal(
                    <ProfilInfoEditModal
                        value={value ?? ''}
                        categoryList={categoryList}
                    />,
                )
            }
            variant='outline'
            className={`text-sm font-medium w-fit`}
        >
            Edit
        </Button>
    );
}
