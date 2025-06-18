'use client';
import LogOutConfirmModal from '@/features/auth/ui/LogOutConfirmModal';
import Logout from '@/shared/assets/icons/Logout';
import { useModalContext } from '@/shared/model/modal/ModalContext';

export default function LogOutButton() {
    const { openModal } = useModalContext();

    return (
        <button onClick={() => openModal(<LogOutConfirmModal />)}>
            <Logout />
        </button>
    );
}
