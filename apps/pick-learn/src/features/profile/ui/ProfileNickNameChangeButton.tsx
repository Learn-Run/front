'use client';
import { useModalContext } from '@/shared/model/modal/ModalContext';
import { Button } from '@repo/ui/components/base/Button';
import NickNameEditModal from './NickNameEditModal';

export default function ProfileNickNameChangeButton() {
    const { openModal } = useModalContext();

    return (
        <Button
            variant='outline'
            className='w-fit text-xs'
            onClick={() => {
                openModal(<NickNameEditModal />);
            }}
        >
            Edit
        </Button>
    );
}
